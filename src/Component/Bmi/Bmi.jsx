import "./Bmi.css";
// import { Table } from "antd";
import { Table } from "antd";
import { useFormik } from "formik";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
// import DataTable from "react-data-table-component";
// import { basicSchema } from "../Contact/schema/schema";

const Bmi = () => {
  let [height, setheight] = useState(0);
  let [weight, setweight] = useState(0);
  let [BmiValue, setBmiValue] = useState();
  let [BmiMessage, setBmiMessage] = useState();
  let [close, setclose] = useState(false);

  const calculateBmi = (a, b) => {
    if (a && b) {
      const heightInMeters = a / 100;
      const bmi = (a / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiValue(bmi);

      let message = "";
      if (bmi < 18.5) {
        message = "You are Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        message = "You are Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        message = "You are Overweight";
      } else {
        message = "You are Obese";
      }
      setBmiMessage(message);
      setclose(true);
    } else {
      setBmiValue("");
      setBmiMessage("");
    }
  };
  const { values, touched, handleSubmit, handleBlur, handleChange, errors } =
    useFormik({
      initialValues: {
        weight: "",
        height: "",
      },
      // validationSchema: () => {
      //   setheight(height), setweight(weight);
      // },
      onSubmit: async (values, actions) => {
        setheight(values.height);
        setweight(values.weight);
        calculateBmi(weight, height);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
      },
    });

  const columns = [
    {
      key: "1",
      bmi: "BELOW 18.5",
      status: "Underweight",
    },
    {
      key: "2",
      bmi: "18.5 - 24.9",
      status: "Healthy",
    },
    {
      key: "3",
      bmi: "25.5 - 29.9",
      status: "Overweight",
    },
    {
      key: "4",
      bmi: "30 - and Above",
      status: "Obse",
    },
  ];

  const data = [
    {
      title: "BMI",
      dataIndex: "bmi",
      key: "bmi",
    },
    {
      title: "WEIGHT STATUS",
      dataIndex: "status",
      key: "status",
    },
  ];

  const closeBtn = () => {
    setclose(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setclose(false);
    }, 12000);
  }, [close]);

  return (
    <>
      <section className="py-5">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-[90%] mx-auto">
            <div className="flex flex-col justify-start items-center text-center">
              <h3 className="heading-3 text-start w-[100%]">BMI CALCULATOR CHART</h3>

              <div className="py-5">
                <Table
                  className="text-center"
                  dataSource={columns}
                  bordered
                  columns={data}
                />
                {/* <DataTable columns={columns} data={data} /> */}
              </div>
            </div>
            <div className="flex flex-col justify-start items-start text-start">
              <h3 className="heading-3 text-start w-[100%]">BMI CALCULATOR</h3>
              <form
                autoComplete="off"
                onSubmit={handleSubmit}
                className="py-5 w-[100%]">
                <div className="flex flex-col justify-start items-start m-2">
                  <input
                    id="weight"
                    name="weight"
                    type="text"
                    placeholder="weight"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.weight}
                    className={
                      errors.weight && touched.weight
                        ? "border border-red-600 w-[100%] form-style"
                        : "w-[100%] form-style"
                    }
                  />
                  {errors.weight && touched.weight && (
                    <p className="text-red-700">{"*" + errors.name}</p>
                  )}
                </div>

                <div className="flex flex-col justify-start items-start m-2">
                  <input
                    id="height"
                    name="height"
                    type="text"
                    placeholder="Height"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.height}
                    className={
                      errors.height && touched.height
                        ? "border border-red-600 w-[100%] form-style"
                        : "w-[100%] form-style"
                    }
                  />
                  {errors.height && touched.height && (
                    <p className="text-red-700">{"*" + errors.height}</p>
                  )}
                </div>

                <div>
                  {close ? (
                    <>
                      <div className="text-center bg-slate-500 py-5 w-[90%] mx-auto rounded-xl font-['Montserrat'] flex justify-between items-center px-3">
                        <p className="text-center">
                          {BmiValue !== 0 ? (
                            <p>
                              {BmiValue} {BmiMessage}
                            </p>
                          ) : (
                            ""
                          )}
                        </p>
                        <p onClick={closeBtn}>
                          <AiOutlineClose />
                        </p>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>

                <div className="p-5 flex justify-start">
                  <button
                    className="cssbuttons-io-button"
                    type="submit"
                    onSubmit={calculateBmi}>
                    Calculate
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
      </section>
    </>
  );
};

export default Bmi;
