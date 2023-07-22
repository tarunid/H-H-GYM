import * as yup from "yup";

export const basicSchema = yup.object().shape({
  number: yup
    .number()
    .required("please enter a vaild email adress")
    .required("This field is Required"),
  name: yup.string().required("This field is Required"),
  message: yup.string().required("This field is Required"),
});
