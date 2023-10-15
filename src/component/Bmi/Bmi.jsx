import "./Bmi.css";
import { Table } from "antd";
import { useFormik } from "formik";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import * as yup from "yup";

const Bmi = () => {
  let [BmiValue, setBmiValue] = useState();
  let [BmiMessage, setBmiMessage] = useState();
  let [close, setclose] = useState(false);

  const calculateBmi = (a, b) => {
    if (a && b) {
      console.log(a, b);
      const heightInMeters = parseInt(a) / 100;
      const bmi = (parseInt(b) / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiValue(bmi);

      let message = "";
      if (bmi < 18.5) {
        message = "You are Under weight";
      } else if (bmi >= 18.5 && bmi < 25) {
        message = "You are Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        message = "You are Over weight";
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
  const formik = useFormik({
    initialValues: {
      weight: "",
      height: "",
    },
    validationSchema: yup.object().shape({
      weight: yup
        .number()
        .required("Please Enter your weight")
        .min(1, "You must be at 1 kg"),
      height: yup
        .number()
        .required("Please Enter your height")
        .min(1, "You must be at 1 cm"),
    }),
    onSubmit: async (values, actions) => {
      calculateBmi(values.height, values.weight);
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
      status: "Normal weight",
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
      <section className="py-14">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto pb-14">
            <div className="flex flex-col justify-start items-center text-center">
              <h3 className="heading-3 text-start w-[100%] py-5">
                BMI CALCULATOR CHART
              </h3>

              <div className="py-5">
                <Table
                  className="text-center"
                  dataSource={columns}
                  bordered
                  columns={data}
                />

                <p className="flex py-5 self-start heading-5">
                  *<span className="font-bold">BMR</span>&nbsp; Metabolic Rate
                  /&nbsp; <span className="font-bold">BMI</span>&nbsp; Body Mass
                  Index{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start text-start">
              <h3 className="heading-3 text-start w-[100%] py-5">
                BMI CALCULATOR
              </h3>

              <p>
                Discover Your Fitness Journey with Our BMI Calculator! Calculate your Body Mass Index (BMI) to kickstart your personalized fitness path.
              </p>
              <form
                autoComplete="off"
                onSubmit={formik.handleSubmit}
                className="py-5 w-[100%]">
                <div className="flex flex-col justify-start items-start m-2">
                  <input
                    id="height"
                    name="height"
                    type="text"
                    placeholder="Height (in cm)"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.height}
                    className={
                      formik.errors.height && formik.touched.height
                        ? "border border-red-600 w-[100%] form-style"
                        : "w-[100%] form-style"
                    }
                  />
                  {formik.errors.height && formik.touched.height && (
                    <p className="text-red-700">{"*" + formik.errors.height}</p>
                  )}
                </div>

                <div className="flex flex-col justify-start items-start m-2">
                  <input
                    id="weight"
                    name="weight"
                    type="text"
                    placeholder="weight (in kg)"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.weight}
                    className={
                      formik.errors.weight && formik.touched.weight
                        ? "border border-red-600 w-[100%] form-style"
                        : "w-[100%] form-style"
                    }
                  />
                  {formik.errors.weight && formik.touched.weight && (
                    <p className="text-red-700">{"*" + formik.errors.weight}</p>
                  )}
                </div>

                <div>
                  {close ? (
                    <>
                      <div className="text-center bg-[var(--primary-color)] text-white py-5 w-[90%] mx-auto rounded-xl font-['Montserrat'] flex justify-between items-center px-3">
                        <p className="text-center">
                          {BmiValue !== 0 ? (
                            <p>
                              {BmiValue}
                              {", "}
                              {BmiMessage}
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
                  <button className="cssbuttons-io-button" type="submit">
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
