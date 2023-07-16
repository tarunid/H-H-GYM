import { Table } from "antd";
import { useFormik } from "formik";
import { useState } from "react";
// import { basicSchema } from "../Contact/schema/schema";

const Bmi = () => {
  let[height , setheight] = useState(0);
  let[weight, setweight] = useState(0);
  let[BmiValue, setBmiValue] = useState();
  let[BmiMessage, setBmiMessage] = useState();


  const calculateBmi = () => {
    if (height && weight) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmiValue(bmi);

        let message = '';
        if (bmi < 18.5) {
            message = 'You are Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            message = 'You are Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            message = 'You are Overweight';
        } else {
            message = 'You are Obese';
        }
        setBmiMessage(message);
    } else {
        setBmiValue('');
        setBmiMessage('');
    }
};
  const { values, touched, handleSubmit, handleBlur, handleChange, errors } =
    useFormik({
      initialValues: {
        weight: "",
        age: ""
      },
      // validationSchema: basicSchema,
      onSubmit: async (values, actions) => {
        setheight(values.age);
        setweight(values.weight);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
      },
    });

  const dataSource = [
    {
      key: "1",
      bmi: "BLOW 18.5",
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

  const columns = [
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

  return (
    <>
      <section className="py-5">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="heading-3">BMI CALCULATOR CHART</h3>

              <div className="py-5">
                <Table dataSource={dataSource} columns={columns} />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="heading-3">BMI CALCULATOR CHART</h3>
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
                    id="age"
                    name="age"
                    type="text"
                    placeholder="Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    className={
                      errors.age && touched.age
                        ? "border border-red-600 w-[100%] form-style"
                        : "w-[100%] form-style"
                    }
                  />
                  {errors.age && touched.age && (
                    <p className="text-red-700">{"*" + errors.age}</p>
                  )}
                </div>

                <div className="p-5 flex justify-start">
                  <button className="cssbuttons-io-button" type="submit" onClick={calculateBmi}>
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

                  {height}
                  {weight}
                  {BmiValue}
                  {BmiMessage}
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
