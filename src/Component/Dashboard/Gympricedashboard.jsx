import "./style.css"
import axiosInstance from "../../interceptors/axiosInstance";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { Table, Modal } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ExclamationCircleFilled } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";

const Gympricedashboard = () => {
  const { accessToken } = useAuth();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmLoadingAdd, setConfirmLoadingAdd] = useState(false);
  const [id, setID] = useState();
  const [tableValues, setTableValues] = useState({
    tag: "",
    description: "",
    price: "",
  });
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
      tag: tableValues.tag,
      description: tableValues.description,
      price: tableValues.price
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

      console.log(descriptionArray)

      const processedValues = {
        ...values,
        description: values.description.split("|").map((item) => item.trim()),
      };

      updateFunction(processedValues);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    },
  });

  const showModal = (record) => {
    setOpen(true);
    setID(record.id);
    setTableValues({
      tag: record.tag,
      description: record.description.join(' | '),
      price: record.price,
    });

    formikUpdate.resetForm({
      values: {
        tag: record.tag,
        description: record.description.join(' | '),
        price: record.price
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
      const response = await axiosInstance.get("/price/all",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const jsonData = response.data;
      setData(jsonData.deserializedPriceCards);
      toast.success("Fetched Data", { duration: 400 });
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data");
    }
  };

  const addfunction = async (values) => {
    let value = JSON.stringify(values);
    const tosatId = toast.loading("Adding data...");
    try {
      const response = await axiosInstance.post(
        "/price/add",
        value,
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
    const value = JSON.stringify(values);
    console.log(value)
    const toastId = toast.loading("Updating data...");
    try {
      const response = await axiosInstance.put(
        `/price/update/${id}`,
        value
      );
      toast.dismiss(toastId);
      toast.success(response.data.message);
      handleOk();
      fetchData();
    } catch (error) {
      toast.dismiss(toastId)
      console.error("Error updating data:", error);
      toast.error("Error updating data", error);
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
    const { id } = record
    const toastId = toast.loading("Deleting data...");

    try {
      const response = await axiosInstance.delete(`/price/delete/${id}`, {
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
        <h1 className="py-10">PRICE VIEW DASHBOARD</h1>

        <div className="w-[90%] mx-auto grid grid-cols-2">
          <div className="flex justify-start gap-5">
            <button className="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0" onClick={() => {
              fetchData();
            }}>
              Refresh
            </button>
            <button
              className="rounded-lg  relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
              onClick={showModalAdd}
            >
              <span className="text-gray-200 ml-8 transform font-[--poppins] group-hover:translate-x-10 transition-all duration-300 ">
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

            <button className="cssbuttons-io-button" type="submit">
              ADD
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
        <Toaster />
      </section>
    </>
  );
};

export default Gympricedashboard;
