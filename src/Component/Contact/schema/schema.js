import * as yup from "yup";

export const basicSchema = yup.object().shape({
  number: yup
    .string()
    .required("This field is Required")
    .matches(/^\d{10}$/, "Mobile number must be 10 digits long")
    .required("Please enter a valid Mobile Number"),
  name: yup.string().required("This field is Required"),
  message: yup.string().required("This field is Required"),
});