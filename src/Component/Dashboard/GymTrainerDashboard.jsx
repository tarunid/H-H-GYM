import { useState, useEffect } from "react";
import { Table, Button, Modal } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ExclamationCircleFilled } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";

const GymTrainerDashboard = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmLoadingAdd, setConfirmLoadingAdd] = useState(false);

  const [tableValues, setTableValues] = useState({
    name: "",
    trainerType: "",
    socialLinks: "",
    imageLink: "",
  });

  const [id, setID] = useState();
  const { confirm } = Modal;

  const formikAdd = useFormik({
    initialValues: {
      name: "",
      trainerType: "",
      socialLinks: "",
      imageLink: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      trainerType: Yup.string().required("Trainer Type is required"),
      socialLinks: Yup.string().required("Social Links is required"),
      imageLink: Yup.string().required("Image Link is required"),
    }),
    onSubmit: async (values, actions) => {
      addFunction(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    },
  });

  const formikUpdate = useFormik({
    initialValues: {
      name: "",
      trainerType: "",
      socialLinks: "",
      imageLink: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      trainerType: Yup.string().required("Trainer Type is required"),
      socialLinks: Yup.string().required("Social Links is required"),
      imageLink: Yup.string().required("Image Link is required"),
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
      name: record.name,
      trainerType: record.trainerType,
      socialLinks: record.socialLinks,
      imageLink: record.imageLink,
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
        "https://hh-gym-backend-production.up.railway.app/api/trainer/all",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer",
          },
        }
      );
      const jsonData = await response.json();
      setData(jsonData.trainers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addFunction = async (values) => {
    let value = JSON.stringify(values);
    try {
      await fetch("https://hh-gym-backend-production.up.railway.app/api/trainer/add", {
        method: "POST",
        body: value,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer",
        },
      });
      toast.success("Data added successfully");
      fetchData();
    } catch (error) {
      toast.error("Error adding data:", error);
    }
  };

  const updateFunction = async (values) => {
    let value = JSON.stringify(values);
    try {
      // Replace with your API endpoint for updating data
      await fetch(`https://hh-gym-backend-production.up.railway.app/api/trainer/update/${id}`, {
        method: "PUT",
        body: value,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer",
        },
      });
      toast.success("Data updated successfully");
      fetchData();
      handleOk();
    } catch (error) {
      toast.error("Error updating data:", error);
    }
  };

  const showConfirm = (record) => {
    confirm({
      title: "Do you Want to delete this item?",
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
      // Replace with your API endpoint for deleting data
      const response = await fetch(`https://hh-gym-backend-production.up.railway.app/api/trainer/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer",
        },
      });
      if (response.status === 200) {
        toast.success("Data deleted successfully");
        fetchData();
      } else {
        toast.error("Error deleting data");
      }
    } catch (error) {
      toast.error("Error deleting data:", error);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Trainer Type",
      dataIndex: "trainerType",
      key: "trainerType",
    },
    {
      title: "Social Links",
      dataIndex: "socialLinks",
      key: "socialLinks",
    },
    {
      title: "Image Link",
      dataIndex: "imageLink",
      key: "imageLink",
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
        <h1>Trainer Dashboard</h1>

        <button
          className="bg-slate-400 h-[33px] w-[97px] rounded-xl mt-5 mx-2"
          onClick={() => {
            fetchData();
          }}
        >
          Refresh
        </button>

        <Button className="bg-green-500 rounded-xl" onClick={showModalAdd}>
          ADD DATA
        </Button>

        <div className="py-10">
          <Table dataSource={data} columns={columns} bordered />
        </div>

        <Modal
          title="ADD TRAINER DATA"
          visible={openAdd}
          onOk={handleOkAdd}
          confirmLoading={confirmLoadingAdd}
          onCancel={handleCancelAdd}
          okText={"ADD DATA"}
          okType="primary"
        >
          <form
            autoComplete="off"
            onSubmit={formikAdd.handleSubmit}
            className="py-5 w-[100%]"
          >
            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={formikAdd.handleChange}
                value={formikAdd.values.name}
                className="w-[100%] form-style"
                required
              />
              {formikAdd.touched.name && formikAdd.errors.name ? (
                <div className="error-message">{formikAdd.errors.name}</div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="trainerType"
                name="trainerType"
                type="text"
                placeholder="Trainer Type"
                onChange={formikAdd.handleChange}
                value={formikAdd.values.trainerType}
                className="w-[100%] form-style"
                required
              />
              {formikAdd.touched.trainerType && formikAdd.errors.trainerType ? (
                <div className="error-message">
                  {formikAdd.errors.trainerType}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="socialLinks"
                name="socialLinks"
                type="text"
                placeholder="Social Links"
                onChange={formikAdd.handleChange}
                value={formikAdd.values.socialLinks}
                className="w-[100%] form-style"
                required
              />
              {formikAdd.touched.socialLinks && formikAdd.errors.socialLinks ? (
                <div className="error-message">
                  {formikAdd.errors.socialLinks}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="imageLink"
                name="imageLink"
                type="text"
                placeholder="Image Link"
                onChange={formikAdd.handleChange}
                value={formikAdd.values.imageLink}
                className="w-[100%] form-style"
                required
              />
              {formikAdd.touched.imageLink && formikAdd.errors.imageLink ? (
                <div className="error-message">
                  {formikAdd.errors.imageLink}
                </div>
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
          title="UPDATE TRAINER DATA"
          visible={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          okText={"UPDATE DATA"}
          htmlType={"submit"}
        >
          <form
            autoComplete="off"
            onSubmit={formikUpdate.handleSubmit}
            className="py-5 w-[100%]"
          >
            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="name"
                name="name"
                type="text"
                placeholder={tableValues.name}
                onChange={formikUpdate.handleChange}
                value={formikUpdate.values.name}
                className="w-[100%] form-style"
                required
              />
              {formikUpdate.touched.name && formikUpdate.errors.name ? (
                <div className="error-message">{formikUpdate.errors.name}</div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="trainerType"
                name="trainerType"
                type="text"
                placeholder={tableValues.trainerType}
                onChange={formikUpdate.handleChange}
                value={formikUpdate.values.trainerType}
                className="w-[100%] form-style"
                required
              />
              {formikUpdate.touched.trainerType &&
              formikUpdate.errors.trainerType ? (
                <div className="error-message">
                  {formikUpdate.errors.trainerType}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="socialLinks"
                name="socialLinks"
                type="text"
                placeholder={tableValues.socialLinks}
                onChange={formikUpdate.handleChange}
                value={formikUpdate.values.socialLinks}
                className="w-[100%] form-style"
                required
              />
              {formikUpdate.touched.socialLinks &&
              formikUpdate.errors.socialLinks ? (
                <div className="error-message">
                  {formikUpdate.errors.socialLinks}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="imageLink"
                name="imageLink"
                type="text"
                placeholder={tableValues.imageLink}
                onChange={formikUpdate.handleChange}
                value={formikUpdate.values.imageLink}
                className="w-[100%] form-style"
                required
              />
              {formikUpdate.touched.imageLink &&
              formikUpdate.errors.imageLink ? (
                <div className="error-message">
                  {formikUpdate.errors.imageLink}
                </div>
              ) : null}
            </div>

            <div className="p-5 flex justify-start">
              <button className="cssbuttons-io-button" type="submit">
                UPDATE DATA
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

export default GymTrainerDashboard;
