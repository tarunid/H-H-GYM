import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../interceptors/axiosInstance";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // this function will help to get exp time,create time,data
  function parseJwt(token) {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(jsonPayload);
    } catch (error) {
      // Handle any parsing errors here
      console.error("Error parsing JWT:", error);
      return null;
    }
  }

  // Load tokens from local storage on initial render
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");

    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
    }

    setIsLoading(false);
  }, []);

  // Define a function to update the tokens in both state and local storage
  const updateTokens = (newAccessToken, newRefreshToken) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);

    localStorage.setItem("accessToken", newAccessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
  };

  // Function to log in
  const login = (data) => {
    let user = parseJwt(data.accessToken);
    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    setUser(user.email);
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  };

  // Function to log out
  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  // Check token expiration and refresh if necessary
  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const response = await axiosInstance.post(
          "auth/renewAccessToken",
          { refreshToken },
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const { accessToken: newAccessToken } = response.data.accessToken;
        updateTokens(newAccessToken, refreshToken);
      } catch (error) {
        console.error("Token refresh failed:", error);
        navigate("/login");
      }
    };

    const checkTokenExpiration = () => {
      if (!accessToken) return;

      const accessTokenData = parseJwt(accessToken); // Implement parseJwt to extract expiration time
      const currentTime = Math.floor(Date.now() / 1000);

      if (accessTokenData.exp - currentTime < 60) {
        // Token is about to expire (less than 60 seconds remaining), refresh it
        refreshAccessToken();
      }
    };

    checkTokenExpiration();

    // Check token expiration periodically
    const tokenCheckInterval = setInterval(checkTokenExpiration, 60000); // Check every minute

    return () => {
      clearInterval(tokenCheckInterval);
    };
  }, [accessToken, refreshToken, navigate]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        refreshToken,
        user,
        updateTokens,
        login,
        logout,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a ReactNode and is required
};
