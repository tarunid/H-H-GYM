import "./style.css"
import axiosInstance from "../../interceptors/axiosInstance";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { Table, Button, Modal, Upload } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ExclamationCircleFilled, UploadOutlined } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";

const TestimonialDashboard = () => {
  const { accessToken } = useAuth();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmLoadingAdd, setConfirmLoadingAdd] = useState(false);
  const [percent, setPercent] = useState(0);
  const [tableValues, setTableValues] = useState({
    username: "",
    userWork: "",
    feedback: "",
    imageLink: "",
  });
  const [id, setID] = useState();
  const { confirm } = Modal;

  const formikAdd = useFormik({
    initialValues: {
      userName: "",
      userWork: "",
      feedback: "",
      imageLink: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Username is required"),
      userWork: Yup.string().required("User Work is required"),
      feedback: Yup.string().required("Feedback is required"),
      imageLink: Yup.string().required("Image is required"),
    }),
    onSubmit: async (values, actions) => {
      addFunction(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    },
  });

  const formikUpdate = useFormik({
    initialValues: {
      username: tableValues.username,
      userWork: tableValues.userWork,
      feedback: tableValues.feedback,
      imageLink: tableValues.imageLink,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      userWork: Yup.string().required("User Work is required"),
      feedback: Yup.string().required("Feedback is required"),
      imageLink: Yup.string().required("Image is required"),
    }),
    onSubmit: async (values, actions) => {
      updateFunction(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    },
  });

  const showModal = (record) => {
    setOpen(true);
    setID(record.id);
    setTableValues({
      username: record.username,
      userWork: record.userWork,
      feedback: record.feedback,
      imageLink: record.imageLink,
    });

    formikUpdate.resetForm({
      values: {
        username: record.username,
        userWork: record.userWork,
        feedback: record.feedback,
        imageLink: record.imageLink
      }
    });
  };

  const showModalAdd = () => {
    setOpenAdd(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 500);
  };

  const handleOkAdd = () => {
    setConfirmLoadingAdd(true);
    setTimeout(() => {
      setOpenAdd(false);
      setConfirmLoadingAdd(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleCancelAdd = () => {
    setOpenAdd(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        "https://hh-gym-backend-production.up.railway.app/api/feedback/all",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setData(response.data.TestimonialArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addFunction = async (values) => {
    let value = JSON.stringify(values);
    const tosatId = toast.loading("Adding data...");
    try {
      const response = await axiosInstance.post("/feedback/add", value,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      toast.dismiss(tosatId);
      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      toast.dismiss(tosatId);
      toast.error("Error adding data:", error);
    }
  };

  const updateFunction = async (values) => {
    const toastId = toast.loading("Updating data...");

    try {
      const response = await axiosInstance.put(`/feedback/update/${id}`, values, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      toast.dismiss(toastId);
      toast.success(response.data.message);
      fetchData();
      handleOk();
    } catch (error) {
      toast.dismiss(toastId);
      console.error("Error updating data:", error);
      toast.error("Error updating data");
    }
  };

  const showConfirm = (record) => {
    confirm({
      title: "Do you Want to delete this feedback?",
      icon: <ExclamationCircleFilled />,
      content: "This action cannot be undone.",
      onOk() {
        deleteFunction(record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const deleteFunction = async (record) => {
    const { id } = record
    const toastId = toast.loading("Deleting data...");

    try {
      const response = await axiosInstance.delete(`/feedback/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      toast.dismiss(toastId);
      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      toast.dismiss(toastId);
      console.error("Error deleting data:", error);
      toast.error("Error deleting data");
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "User Work",
      dataIndex: "userWork",
      key: "userWork",
    },
    {
      title: "Feedback",
      dataIndex: "feedback",
      key: "feedback",
    },
    {
      title: "imageLink",
      dataIndex: "imageLink",
      key: "imageLink",
      render: (text) => (
        <img src={text} alt="Image" style={{ width: '100px' }} />
      ),
    },
    {
      title: "UPDATE",
      dataIndex: "update",
      key: "update",
      render: (text, record) => (
        <button
          className="bg-green-500 py-2 px-3 rounded-xl"
          onClick={() => showModal(record)}
        >
          {"UPDATE"}
        </button>
      ),
    },
    {
      title: "DELETE",
      dataIndex: "delete",
      key: "delete",
      render: (text, record) => (
        <button
          className="bg-red-500 py-2 px-3 rounded-xl"
          onClick={() => showConfirm(record)}
        >
          {"DELETE"}
        </button>
      ),
    },
  ];

  function getUploadProps(componentName) {
    return {
      action: 'https://hh-gym-backend-production.up.railway.app/api/upload/image',
      listType: 'picture',
      beforeUpload: () => false,
      async previewFile(file) {
        console.log('Your upload file:', file);

        const formData = new FormData();

        const dataUrl = await new Promise((resolve) => {
          const fileread = new FileReader();
          fileread.readAsDataURL(file);
          fileread.onloadend = () => {
            resolve(fileread.result);
          };
        });

        formData.append('image', dataUrl);

        const response = await fetch('https://hh-gym-backend-production.up.railway.app/api/upload/image', {
          method: 'POST',
          body: formData,
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setPercent(percentCompleted);
          }
        });

        const result = await response.json();

        { componentName == "add" ? formikAdd.values.imageLink = result.image : formikUpdate.values.imageLink = result.image }

        return result.image;
      },
      progress: {
        percent: percent,
        status: percent === 100 ? 'done' : 'active',
      }
    };
  }
  const updateProps = getUploadProps("update");
  const addProps = getUploadProps("add");

  return (
    <>
      <section className="pt-10 px-6 h-[100vh]">
        <h1>Testimonial Dashboard</h1>

        <div className="w-[90%] mx-auto grid grid-cols-2">
          <div className="flex justify-start gap-5">
            <button className="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0" onClick={fetchData}>
              Refresh
            </button>
            <button
              className="rounded-lg  relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
              onClick={showModalAdd}
            >
              <span className="text-gray-200 ml-8 transform font-[--poppins] group-hover:translate-x-10 transition-all duration-300 " >
                ADD ITEM
              </span>
              <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                <svg
                  className="svg w-8 text-white"
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1={12} x2={12} y1={5} y2={19} />
                  <line x1={5} x2={19} y1={12} y2={12} />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="py-10">
          <Table dataSource={data} columns={columns} bordered />
        </div>

        <Modal
          title="ADD FEEDBACK"
          visible={openAdd}
          onOk={handleOkAdd}
          confirmLoading={confirmLoadingAdd}
          onCancel={handleCancelAdd}
          okText={"ADD FEEDBACK"}
        >
          <form
            autoComplete="off"
            onSubmit={formikAdd.handleSubmit}
            className="py-5 w-[100%]"
          >
            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="userName"
                name="userName"
                type="text"
                placeholder="UserName"
                onChange={formikAdd.handleChange}
                value={formikAdd.values.userName}
                className="w-[100%] form-style"
                required
              />
              {formikAdd.touched.userName && formikAdd.errors.userName ? (
                <div className="error-message">{formikAdd.errors.userName}</div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="userWork"
                name="userWork"
                type="text"
                placeholder="User Work"
                onChange={formikAdd.handleChange}
                value={formikAdd.values.userWork}
                className="w-[100%] form-style"
                required
              />
              {formikAdd.touched.userWork && formikAdd.errors.userWork ? (
                <div className="error-message">{formikAdd.errors.userWork}</div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="feedback"
                name="feedback"
                type="text"
                placeholder="Feedback"
                onChange={formikAdd.handleChange}
                value={formikAdd.values.feedback}
                className="w-[100%] form-style"
                required
              />
              {formikAdd.touched.feedback && formikAdd.errors.feedback ? (
                <div className="error-message">{formikAdd.errors.feedback}</div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <Upload {...addProps}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
              {formikAdd.touched.imageLink && formikAdd.errors.imageLink ? (
                <div className="error-message">{formikAdd.errors.imageLink}</div>
              ) : null}
            </div>

            <div className="p-5 flex justify-start">
              <button className="cssbuttons-io-button" type="submit">
                ADD DATA
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </Modal>

        <Modal
          title="UPDATE FEEDBACK"
          visible={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          okText={"UPDATE FEEDBACK"}
        >
          <form
            autoComplete="off"
            onSubmit={formikUpdate.handleSubmit}
            className="py-5 w-[100%]"
          >
            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="username"
                name="username"
                type="text"
                placeholder={tableValues.username}
                onChange={formikUpdate.handleChange}
                value={formikUpdate.values.username}
                className="w-[100%] form-style"
                required
              />
              {formikUpdate.touched.username && formikUpdate.errors.username ? (
                <div className="error-message">{formikUpdate.errors.username}</div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="userWork"
                name="userWork"
                type="text"
                placeholder={tableValues.userWork}
                onChange={formikUpdate.handleChange}
                value={formikUpdate.values.userWork}
                className="w-[100%] form-style"
                required
              />
              {formikUpdate.touched.userWork && formikUpdate.errors.userWork ? (
                <div className="error-message">{formikUpdate.errors.userWork}</div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="feedback"
                name="feedback"
                type="text"
                placeholder={tableValues.feedback}
                onChange={formikUpdate.handleChange}
                value={formikUpdate.values.feedback}
                className="w-[100%] form-style"
                required
              />
              {formikUpdate.touched.feedback && formikUpdate.errors.feedback ? (
                <div className="error-message">{formikUpdate.errors.feedback}</div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <Upload {...updateProps}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
              {formikUpdate.touched.imageLink && formikUpdate.errors.imageLink ? (
                <div className="error-message">{formikUpdate.errors.imageLink}</div>
              ) : null}
            </div>

            <div className="p-5 flex justify-start">
              <button className="cssbuttons-io-button" type="submit">
                UPDATE FEEDBACK
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </Modal>
      </section>
      <Toaster />
    </>
  );
};

export default TestimonialDashboard;
