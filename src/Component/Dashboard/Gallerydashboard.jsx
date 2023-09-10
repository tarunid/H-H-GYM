import "./style.css"
import axios from "axios";
import axiosInstance from "../../interceptors/axiosInstance";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { Table, Button, Modal } from "antd";
import { useFormik } from "formik";
import { ExclamationCircleFilled } from '@ant-design/icons';

const Gallerydashboard = () => {
  const {accessToken} = useAuth();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmLoadingAdd, setConfirmLoadingAdd] = useState(false);
  const [dataImg, setDataImg] = useState();
  const [datatext, setDataText] = useState();
  const [type, setType] = useState();
  const [id, setID] = useState();
  const { confirm } = Modal;
  

  const formikAdd = useFormik({
    initialValues: {
      imgSrc: "",
      textName: "",
      type: "",
    },
    // validationSchema:
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
    // validationSchema:
    onSubmit: async (values, actions) => {
      console.log(values.type1);
      if (values){
        if (values.imgSrc1 === ""){
          values.imgSrc1 = dataImg;
        }
        if (values.textName1 === ""){
          values.textName1 = datatext;
        }
        if (values.type1 === ""){
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
  },[]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://hh-gym-backend-production.up.railway.app/api/gallery-all-all", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer",
        },
      });
      const jsonData = await response.json();
      setData(jsonData);
      console.log(response);
      console.log(jsonData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addfunction = async (values) => {
    let value = JSON.stringify(values);
    console.log(accessToken)
    try {
      await axiosInstance.post("/galleryview", {
        value,
      }, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${accessToken}`
        }
      });
      console.log(accessToken)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateFunction = async (values) => {
    let value = JSON.stringify(values);
    try {
      await axios.put("https://hh-gym-backend-production.up.railway.app/api/galleryview/" + id, {
        value,
      });
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showConfirm = (record) => {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      onOk() {
        deletefunction(record);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const deletefunction = async (record) => {
    console.log("Delete function called with record:", record);
    let { ID } = record;
    console.log("jjj");
    try {
      const response = await axios.delete(
        "https://hh-gym-backend-production.up.railway.app/api/deletegallery/" + ID,
        {
          headers: { // Fix the typo here
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${accessToken}`
          },
        }
      );
      console.log(response);
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
    },
    {
      title: "IMAGE URL",
      dataIndex: "imgSrc",
      key: "userName",
    },
    {
      title: "IAMGE TAG",
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
      dataIndex: "bhkbh",
      key: "UPDATE",
      render: (text, record) => (
        <button
          className="bg-green-500 py-2 px-3 rounded-xl"
          onClick={() => showModal(record)}>
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
          onClick={() => showConfirm(record)}>
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
          }}>
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
          open={openAdd}
          onOk={handleOkAdd}
          confirmLoading={confirmLoadingAdd}
          onCancel={handleCancelAdd}
          okText={"ADD DATA"}
          okType="primary">
          <form
            autoComplete="off"
            onSubmit={formikAdd.handleSubmit}
            className="py-5 w-[100%]">
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
              <input
                id="imgSrc"
                name="imgSrc"
                type="text"
                placeholder={"imgSrc"}
                onChange={formikAdd.handleChange}
                onBlur={formikAdd.handleBlur}
                value={formikAdd.values.imgSrc}
                className={
                  formikAdd.errors.imgSrc && formikAdd.touched.imgSrc
                    ? "border border-red-600 w-[100%] form-style"
                    : "w-[100%] form-style"
                }
              />
              {formikAdd.errors.imgSrc && formikAdd.touched.imgSrc && (
                <p className="text-red-700">{"*" + formikAdd.errors.imgSrc}</p>
              )}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <label
                htmlFor="type"
                style={{ display: "block", padding: "10px" }}>
                Type
              </label>
              <select
                name="type"
                value={formikAdd.values.type}
                onChange={formikAdd.handleChange}
                onBlur={formikAdd.handleBlur}
                style={{ display: "block", padding: "10px" }}>
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
        </Modal>

        <Modal
          title="UPADATE GYM GRID DATA"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          okText={"UPDATE DATA"}
          htmlType={"submit"}>
          <form
            autoComplete="off"
            onSubmit={formikUpdate.handleSubmit}
            className="py-5 w-[100%]">
            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="textName1"
                name="textName1"
                type="text"
                placeholder={datatext}
                onChange={formikUpdate.handleChange}
                onBlur={formikUpdate.handleBlur}
                value={formikUpdate.values.height}
                className={
                  formikUpdate.errors.height && formikUpdate.touched.height
                    ? "border border-red-600 w-[100%] form-style"
                    : "w-[100%] form-style"
                }
              />
              {formikUpdate.errors.height && formikUpdate.touched.height && (
                <p className="text-red-700"> 
                  {"*" + formikUpdate.errors.height}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <input
                id="imgSrc1"
                name="imgSrc1"
                type="text"
                placeholder={dataImg}
                onChange={formikUpdate.handleChange}
                onBlur={formikUpdate.handleBlur}
                value={formikUpdate.values.weight}
                className={
                  formikUpdate.errors.weight && formikUpdate.touched.weight
                    ? "border border-red-600 w-[100%] form-style"
                    : "w-[100%] form-style"
                }
              />
              {formikUpdate.errors.weight && formikUpdate.touched.weight && (
                <p className="text-red-700">
                  {"*" + formikUpdate.errors.weight}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-start items-start m-2">
              <label
                htmlFor="type1"
                style={{ display: "block", padding: "10px" }}>
                Type
              </label>
              <select
                name="type1"
                value={formikUpdate.values.type1}
                onChange={formikUpdate.handleChange}
                onBlur={formikUpdate.handleBlur}
                defaultChecked={type}
                style={{ display: "block", 
                padding: "10px" }}>
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
        </Modal>
      </section>
    </>
  );
};

export default Gallerydashboard;
