import "./Contact.css";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { useFormik } from "formik";
import { basicSchema } from "./schema/schema";
import axios from "axios";

const Contact = () => {
  const { values, touched, handleSubmit, handleBlur, handleChange, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: basicSchema,
      onSubmit: async (values, actions) => {
        axios.post("api/send", values);
        console.log(values);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
      },
    });
  return (
    <>
      <section className="py-5">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="heading-3">We are here for help you! </h3>
              <h2 className="heading-2 py-2">To Shape Your Body.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto">
            <div className="py-10">
              <div className="flex flex-col justify-center items-center text-center">
                {/* <Map google={this.props.google}
                style = {{width:"100%",height:"100%"}}
                zoom = {10}
                initialCenter = { 
                  {
                    lat: 28.704060,
                    lng: 77.102493 
                  }
                }
                /> */}
              </div>
              <div className="flex justify-between items-start">
                <div className="w-[50%]">
                  <h3 className="contact-sub-heading">Address</h3>
                  <div className="bg-red-600 w-10 h-1 my-5"></div>
                  <p className="contact-content break-words">
                    NO.9, 2ND FLOOR, Ekambaram St,
                    <br />
                    Gokulam Colony, Sambanthanar Nagar,
                    <br />
                    Pammal, Chennai, Tamil Nadu 600075
                  </p>
                </div>
                <div className="w-[50%]">
                  <h3 className="contact-sub-heading">Opening Hours</h3>
                  <div className="bg-red-600 w-10 h-1 my-5"></div>
                  <p className="contact-content break-words">
                    Mon to Fri: 7:30 am — 1:00 am &nbsp;
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="py-5 w-[50%]">
                  <h3 className="contact-sub-heading">Information</h3>
                  <div className="bg-red-600 w-10 h-1 my-5"></div>
                  <Link to="">
                    <li className="flex justify-start items-center gap-2 py-2 contact-content">
                      <AiFillPhone />
                      073050 14152
                    </li>
                  </Link>

                  <Link to="">
                    <li className="flex justify-start items-center gap-2 py-2 contact-content">
                      <BiLogoGmail />
                      handhfitnessclub@gmail.com
                    </li>
                  </Link>
                </div>
                <div className="py-5 w-[50%]">
                  <h3 className="contact-sub-heading">Follow Us On</h3>
                  <div className="bg-red-600 w-10 h-1 my-5"></div>
                  <div className="flex justify-start py-5 w-[100%] gap-5">
                    <span className="bg-[#efefef] rounded-full p-3">
                      <AiOutlineInstagram />
                    </span>
                    <span className="bg-[#efefef] rounded-full p-3">
                      <AiOutlineInstagram />
                    </span>
                    <span className="bg-[#efefef] rounded-full p-3">
                      <AiOutlineInstagram />
                    </span>
                    <span className="bg-[#efefef] rounded-full p-3">
                      <AiOutlineInstagram />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10">
              <div className="w-[100%] md:w-[70%] mx-auto bg-[#f8f8f8] pt-7 pb-10 px-8 rounded-lg">
                <h3 className="contact-sub-heading">Leave Us Your Info</h3>
                <div className="bg-red-600 w-10 h-1 my-5"></div>
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <div className="flex flex-col justify-start items-start m-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        errors.name && touched.name
                          ? "border border-red-600 w-[100%] form-style"
                          : "w-[100%] form-style"
                      }
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-700">{"*" + errors.name}</p>
                    )}
                  </div>

                  <div className="flex flex-col justify-start items-start m-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={
                        errors.email && touched.email
                          ? "border border-red-600 w-[100%] form-style"
                          : "w-[100%] form-style"
                      }
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-700">{"*" + errors.email}</p>
                    )}
                  </div>

                  <div className="flex flex-col justify-start items-start m-2">
                    <label htmlFor="message"></label>
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      placeholder="Tell us the Query"
                      onChange={handleChange}
                      value={values.message}
                      className="form-style-textarea"></textarea>
                    {errors.message && touched.message && (
                      <p className="text-red-700">{"*" + errors.message}</p>
                    )}
                  </div>

                  <div className="p-5 flex justify-start">
                    <button className="cssbuttons-io-button" type="submit">
                      Send
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
