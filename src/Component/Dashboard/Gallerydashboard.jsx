import "./style.css";
import axiosInstance from "../../interceptors/axiosInstance";
import * as Yup from "yup";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { Table, Button, Modal, Upload } from "antd";
import { useFormik } from "formik";
import {
  ExclamationCircleFilled,
  UploadOutlined,
} from "@ant-design/icons";
import toast from "react-hot-toast";

const Gallerydashboard = () => {
  const { accessToken } = useAuth();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmLoadingAdd, setConfirmLoadingAdd] = useState(false);
  const [dataImg, setDataImg] = useState("");
  const [datatext, setDataText] = useState("");
  const [type, setType] = useState("");
  const [id, setID] = useState("");
  const { confirm } = Modal;
  const [percent, setPercent] = useState(0);

  const formikAdd = useFormik({
    initialValues: {
      imgSrc: "",
      textName: "",
      type: "",
    },
    validationSchema: Yup.object().shape({
      imgSrc1: Yup.string().required('Image URL is required'),
      textName1: Yup.string().required('Text Name is required'),
      type1: Yup.string().required('Type is required'),
    }),
    onSubmit: async (values, actions) => {
      addfunction(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    },
  });

  const formikUpdate = useFormik({
    initialValues: {
      imgSrc1: "",
      textName1: "",
      type1: "",
    },
    validationSchema: Yup.object().shape({
      imgSrc1: Yup.string().required('Image URL is required'),
      textName1: Yup.string().required('Text Name is required'),
      type1: Yup.string().required('Type is required'),
    }),
    onSubmit: async (values, actions) => {
      if (values) {
        if (values.imgSrc1 === "") {
          values.imgSrc1 = dataImg;
        }
        if (values.textName1 === "") {
          values.textName1 = datatext;
        }
        if (values.type1 === "") {
          values.type1 = type;
        }
      }
      updateFunction(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    },
  });

  const showModal = (record) => {
    setOpen(true);
    setID(record.ID);
    setDataImg(record.imgSrc);
    setDataText(record.textName);
    setType(record.type);
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
      const response = await axiosInstance.get("/gallery/gallery-all-all",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const jsonData = response.data;
      setData(jsonData.users);
      toast.success("Fetched Data", { duration: 400 });
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data");
    }
  };


  const addfunction = async (values) => {
    const tosatId = toast.loading("Adding data...");
    try {
      const response = await axiosInstance.post("/gallery/galleryview",
        {
          value: JSON.stringify(values),
        },
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
      console.error("Error fetching data:", error);
    }
  };

  const updateFunction = async (values) => {
    const value = JSON.stringify(values);
    console.log(value)
    const toastId = toast.loading("Updating data...");
    try {
      const response = await axiosInstance.put(
        `/gallery/galleryview/${id}`,
        {
          value: JSON.stringify(values),
        }
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
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      onOk() {
        deleteFunction(record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const deleteFunction = async (record) => {
    const { ID } = record;
    const toastId = toast.loading("Deleting data...");

    try {
      const response = await axiosInstance.delete(`/gallery/galleryview/${ID}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          }
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
      dataIndex: "ID",
      key: "ID",
    },
    {
      title: 'IMAGE URL',
      dataIndex: 'imgSrc',
      key: 'imgSrc',
      render: (text) => (
        <img src={text} alt="Image" style={{ width: '100px' }} />
      ),
    },
    {
      title: "IMAGE TAG",
      dataIndex: "textName",
      key: "textName",
    },
    {
      title: "TYPE TAG",
      dataIndex: "type",
      key: "type",
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

  function getUploadProps(componentName) {
    return {
      action:
        "https://hh-gym-backend-production.up.railway.app/api/upload/image",
      listType: "picture",
      beforeUpload: () => false,
      async previewFile(file) {
        const formData = new FormData();

        const dataUrl = await new Promise((resolve) => {
          const fileread = new FileReader();
          fileread.readAsDataURL(file);
          fileread.onloadend = () => {
            resolve(fileread.result);
          };
        });

        formData.append("image", dataUrl);

        const response = await fetch(
          "https://hh-gym-backend-production.up.railway.app/api/upload/image",
          {
            method: "POST",
            body: formData,
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setPercent(percentCompleted);
            },
          }
        );

        const result = await response.json();

        { componentName == "add" ? formikAdd.values.imgSrc = result.image : formikUpdate.values.imgSrc1 = result.image }

        return result.image;
      },
      progress: {
        percent: percent,
        status: percent === 100 ? "done" : "active",
      },
    };
  }
  const updateProps = getUploadProps("update");
  const addProps = getUploadProps("add");

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
                id="textName"
                name="textName"
                type="text"
                placeholder={"textName"}
                onChange={formikAdd.handleChange}
                onBlur={formikAdd.handleBlur}
                value={formikAdd.values.textName}
                className={
                  formikAdd.errors.textName && formikAdd.touched.textName
                    ? "border border-red-600 w-[100%] form-style"
                    : "w-[100%] form-style"
                }
              />
              {formikAdd.errors.textName && formikAdd.touched.textName && (
                <p className="text-red-700">
                  {"*" + formikAdd.errors.textName}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <Upload {...addProps}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
              {formikAdd.errors.imgSrc && formikAdd.touched.imgSrc && (
                <p className="text-red-700">{"*" + formikAdd.errors.imgSrc}</p>
              )}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <label
                htmlFor="type"
                style={{ display: "block", padding: "10px" }}
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                value={formikAdd.values.type}
                onChange={formikAdd.handleChange}
                onBlur={formikAdd.handleBlur}
                style={{ display: "block", padding: "10px" }}
              >
                <option value="" label="Select the Category">
                  Select the Category
                </option>
                <option value="General" label="General">
                  General
                </option>
                <option value="Equipments" label="Equipments">
                  Equipments
                </option>
                <option value="Dumbell" label="Dumbell">
                  Dumbell
                </option>
              </select>
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
                id="textName1"
                name="textName1"
                type="text"
                placeholder={datatext}
                onChange={formikUpdate.handleChange}
                onBlur={formikUpdate.handleBlur}
                value={formikUpdate.values.textName1}
                className={
                  formikUpdate.errors.textName1 &&
                    formikUpdate.touched.textName1
                    ? "border border-red-600 w-[100%] form-style"
                    : "w-[100%] form-style"
                }
              />
              {formikUpdate.errors.textName1 &&
                formikUpdate.touched.textName1 && (
                  <p className="text-red-700">
                    {"*" + formikUpdate.errors.textName1}
                  </p>
                )}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <Upload {...updateProps}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
              {formikUpdate.errors.imgSrc1 &&
                formikUpdate.touched.imgSrc1 && (
                  <p className="text-red-700">
                    {"*" + formikUpdate.errors.imgSrc1}
                  </p>
                )}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <label
                htmlFor="type1"
                style={{ display: "block", padding: "10px" }}
              >
                Type
              </label>
              <select
                id="type1"
                name="type1"
                defaultValue="General"
                value={formikUpdate.values.type1}
                onChange={formikUpdate.handleChange}
                onBlur={formikUpdate.handleBlur}
                style={{ display: "block", padding: "10px" }}
              >
                <option value="" label="Select the Category">
                  Select the Category
                </option>
                <option value="General" label="General">
                  General
                </option>
                <option value="Equipments" label="Equipments">
                  Equipments
                </option>
                <option value="Dumbell" label="Dumbell">
                  Dumbell
                </option>
              </select>
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

export default Gallerydashboard;
