import { useState, useEffect } from "react";
import { Table, Button, Modal } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ExclamationCircleFilled } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";

const TestimonialDashboard = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmLoadingAdd, setConfirmLoadingAdd] = useState(false);

  const [tableValues, setTableValues] = useState({
    username: "",
    userWork: "",
    feedback: "",
  });

  const [id, setID] = useState();
  const { confirm } = Modal;

  const formikAdd = useFormik({
    initialValues: {
      username: "",
      userWork: "",
      feedback: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      userWork: Yup.string().required("User Work is required"),
      feedback: Yup.string().required("Feedback is required"),
    }),
    onSubmit: async (values, actions) => {
      addFunction(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    },
  });

  const formikUpdate = useFormik({
    initialValues: {
      username: "",
      userWork: "",
      feedback: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      userWork: Yup.string().required("User Work is required"),
      feedback: Yup.string().required("Feedback is required"),
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
      const response = await fetch(
        "https://hh-gym-backend-production.up.railway.app/api/feedback/all",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer",
          },
        }
      );
      const jsonData = await response.json();
      setData(jsonData.TestimonialArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addFunction = async (values) => {
    let value = JSON.stringify(values);
    try {
      await fetch("https://hh-gym-backend-production.up.railway.app/api/feedback/update", {
        method: "POST",
        body: value,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer",
        },
      });
      toast.success("Feedback added successfully");
      fetchData();
    } catch (error) {
      toast.error("Error adding feedback:", error);
    }
  };

  const updateFunction = async (values) => {
    let value = JSON.stringify(values);
    try {
      await fetch(`https://hh-gym-backend-production.up.railway.app/api/feedback/update/${id}`, {
        method: "PUT",
        body: value,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer",
        },
      });
      toast.success("Feedback updated successfully");
      fetchData();
      handleOk();
    } catch (error) {
      toast.error("Error updating feedback:", error);
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
    let { id } = record;
    try {
      const response = await fetch(`https://hh-gym-backend-production.up.railway.app/api/feedback/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer",
        },
      });
      if (response.status === 200) {
        toast.success("Feedback deleted successfully");
        fetchData();
      } else {
        toast.error("Error deleting feedback");
      }
    } catch (error) {
      toast.error("Error deleting feedback:", error);
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

  return (
    <>
      <section className="pt-10 px-6 h-[100vh]">
        <h1>Testimonial Dashboard</h1>

        <button
          className="bg-slate-400 h-[33px] w-[97px] rounded-xl mt-5 mx-2"
          onClick={() => {
            fetchData();
          }}
        >
          Refresh
        </button>

        <Button className="bg-green-500 rounded-xl" onClick={showModalAdd}>
          ADD FEEDBACK
        </Button>

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
          okType="primary"
        >
          <form
            autoComplete="off"
            onSubmit={formikAdd.handleSubmit}
            className="py-5 w-[100%]"
          >
            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                onChange={formikAdd.handleChange}
                value={formikAdd.values.username}
                className="w-[100%] form-style"
                required
              />
              {formikAdd.touched.username && formikAdd.errors.username ? (
                <div className="error-message">{formikAdd.errors.username}</div>
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

            <div className="p-5 flex justify-start">
              <button className="cssbuttons-io-button" type="submit">
                ADD FEEDBACK
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
          htmlType={"submit"}
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
