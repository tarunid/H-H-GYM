import { useState, useEffect } from "react";
import { Table, Button, Modal } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../interceptors/axiosInstance";
import { useAuth } from "../../hooks/useAuth";
import { ExclamationCircleFilled } from "@ant-design/icons";
import toast from "react-hot-toast";

const Gympricedashboard = () => {
  const { accessToken } = useAuth();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmLoadingAdd, setConfirmLoadingAdd] = useState(false);

  const [tableValues, setTableValues] = useState({
    tag: "",
    description: "",
    price: "",
  });

  const [id, setID] = useState();
  const { confirm } = Modal;

  const formikAdd = useFormik({
    initialValues: {
      tag: "",
      description: "",
      price: "",
    },
    validationSchema: Yup.object({
      tag: Yup.string().required("Tag is required"),
      description: Yup.string()
        .required("Description is required")
        .matches(/\|/, "Description should contain at least one delimiter |"),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be a positive number")
        .integer("Price must be an integer"),
    }),
    onSubmit: async (values, actions) => {
      const descriptionArray = values.description.split("|").map((item) => item.trim());

      const processedValues = {
        ...values,
        description: descriptionArray,
      };

      addfunction(processedValues);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    },
  });

  const formikUpdate = useFormik({
    initialValues: {
      tag: "",
      description: "",
      price: "",
    },
    validationSchema: Yup.object({
      tag: Yup.string().required("Tag is required"),
      description: Yup.string()
        .required("Description is required")
        .matches(/\|/, "Description should contain at least one delimiter |"),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be a positive number")
        .integer("Price must be an integer"),
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
      tag: record.tag,
      description: record.description,
      price: record.price,
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
        "https://hh-gym-backend-production.up.railway.app/api/price/all",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const jsonData = await response.json();
      setData(jsonData.deserializedPriceCards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addfunction = async (values) => {
    try {
      const response = await axiosInstance.post(
        "/price/add",
        JSON.stringify(values),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      toast.success(response.status);
      fetchData();
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const updateFunction = async (values) => {
    try {
      const response = await axiosInstance.put(
        `/price/update/${id}`,
        JSON.stringify(values)
      );
      toast.success(response.data.message);
      setOpen(false);
      fetchData();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const showConfirm = (record) => {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      onOk() {
        deletefunction(record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const deletefunction = async (record) => {
    try {
      const response = await axiosInstance.delete(
        `/price/delete/${record.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
    {
      title: "Description TAG",
      dataIndex: "description",
      key: "description",
      render: (text) => text.join(" | "), // Render the array as a string
    },
    {
      title: "TYPE TAG",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "UPDATE",
      dataIndex: "bhkbh",
      key: "UPDATE",
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
      dataIndex: "DELETE",
      key: "DELETE",
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
        <h1>GALLERY GRID VIEW DASHBOARD</h1>

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
          title="ADD GYM GRID DATA"
          visible={openAdd}
          onOk={handleOkAdd}
          confirmLoading={confirmLoadingAdd}
          onCancel={handleCancelAdd}
          okText={"ADD DATA"}
        >
          <form
            autoComplete="off"
            onSubmit={formikAdd.handleSubmit}
            className="py-5 w-[100%]"
          >
            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="tag"
                name="tag"
                type="text"
                placeholder="Enter Tag"
                onChange={formikAdd.handleChange}
                value={formikAdd.values.tag}
                className="w-[100%] form-style"
              />
              {formikAdd.touched.tag && formikAdd.errors.tag ? (
                <div className="error-message">{formikAdd.errors.tag}</div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <textarea
                id="description"
                name="description"
                placeholder="Enter Description: Example: Abc | def"
                onChange={formikAdd.handleChange}
                onBlur={formikAdd.handleBlur}
                value={formikAdd.values.description}
                className="w-[100%] form-style"
              />
              {formikAdd.touched.description && formikAdd.errors.description ? (
                <div className="error-message">{formikAdd.errors.description}</div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="price"
                name="price"
                type="number"
                placeholder="Enter Price"
                onChange={formikAdd.handleChange}
                value={formikAdd.values.price}
                className="w-[100%] form-style"
              />
              {formikAdd.touched.price && formikAdd.errors.price ? (
                <div className="error-message">{formikAdd.errors.price}</div>
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
          title="UPDATE GYM GRID DATA"
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
                id="tag"
                name="tag"
                type="text"
                placeholder={tableValues.tag}
                onChange={formikUpdate.handleChange}
                value={formikUpdate.values.tag}
                className="w-[100%] form-style"
              />
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <textarea
                id="description"
                name="description"
                placeholder={tableValues.description}
                onChange={formikUpdate.handleChange}
                onBlur={formikUpdate.handleBlur}
                value={formikUpdate.values.description}
                className="w-[100%] form-style"
              />
              {formikUpdate.touched.description && formikUpdate.errors.description ? (
                <div>{formikUpdate.errors.description}</div>
              ) : null}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="price"
                name="price"
                type="number"
                placeholder={tableValues.price}
                onChange={formikUpdate.handleChange}
                value={formikUpdate.values.price}
                className="w-[100%] form-style"
              />
            </div>

            <div className="p-5 flex justify-start">
              <button className="cssbuttons-io-button" type="submit">
                UPDATE
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
    </>
  );
};

export default Gympricedashboard;
