import "./Contact.css";
import { CommomHero, CommonTextBlackWrapper } from "../../assets/img";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { useFormik } from "formik";
import { basicSchema } from "./schema/schema";
import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "../../interceptors/axiosInstance";

const Contact = () => {

  const { values, touched, handleSubmit, handleBlur, handleChange, errors } =
    useFormik({
      initialValues: {
        name: "",
        number: "",
        message: "",
      },
      validationSchema: basicSchema,
      onSubmit: async (values, actions) => {
        try {
          await axiosInstance.post('/email/send', values);

          toast.success('Email sent successfully', {
            duration: 3000,
          });

          actions.resetForm();
        } catch (error) {
          console.error('Error sending data:', error);
          toast.error('Error sending email. Please try again', {
            duration: 3000,
          });
        }
      }
    })
  return (
    <>
      <section className="pb-14">
        <div className="bg-contact-common w-[100%] h-[430px] flex flex-col justify-center items-start" style={{ backgroundImage: `url(${CommomHero})`}}>
          <div className="grid grid-cols-1 w-[70%] mx-auto">
            <h1 className="contact-title">Contact</h1>
            <p className="bg-black-rappper" style={{ backgroundImage: `url(${CommonTextBlackWrapper})`}}>
              H&H &ndash;
              <span className="text-[var(--primary-color)] uppercase">
                {" "}
                &#160;Contact
              </span>
            </p>
          </div>
        </div>
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center py-10">
              <h3 className="heading-3">We are here for help you!</h3>
              <h2 className="heading-2 py-2">To Shape Your Body.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto">
            <div className="py-10">
              <div className="flex flex-col md:flex-row justify-center items-center py-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.893739463705!2d80.1360265!3d12.9735509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f015b70d5d%3A0x6c70774a4ad0497d!2sH%26H%20Fitness%20Studio!5e0!3m2!1sen!2sin!4v1689869883786!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  width={"100%"}
                  height={450}
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="w-full sm:w-[50%]">
                  <h3 className="contact-sub-heading">Address</h3>
                  <div className="bg-[var(--primary-color)] w-10 h-1 my-5"></div>
                  <Link to="https://g.co/kgs/dtpDDZ" className="contact-content break-words">
                    NO.9, 2ND FLOOR, Ekambaram St,
                    <br />
                    Gokulam Colony, Sambanthanar Nagar,
                    <br />
                    Pammal, Chennai, Tamil Nadu 600075
                  </Link>
                </div>
                <div className="w-full sm:w-[50%]">
                  <h3 className="contact-sub-heading">Opening Hours</h3>
                  <div className="bg-[var(--primary-color)] w-10 h-1 my-5"></div>
                  <p className="contact-content break-words">
                    Mon to Fri: 7:30 am — 1:00 am &nbsp;
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="py-5 w-[100%] sm:w-[50%]">
                  <h3 className="contact-sub-heading">Information</h3>
                  <div className="bg-[var(--primary-color)] w-10 h-1 my-5"></div>
                  <Link to="">
                    <li className="flex justify-start items-center gap-2 py-2 contact-content">
                      <AiFillPhone />
                      <Link to="tel:07305014152">73050 14152</Link>,<Link to="tel:7305014153">73050 14153</Link>
                    </li>
                  </Link>

                  <Link to="mailto:handhfitnessclub@gmail.com">
                    <li className="flex justify-start items-center gap-2 py-2 contact-content text-xs">
                      <BiLogoGmail />
                      handhfitnessclub@gmail.com
                    </li>
                  </Link>
                </div>
                <div className="py-5 w-[100%] sm:w-[50%]">
                  <h3 className="contact-sub-heading">Follow Us On</h3>
                  <div className="bg-[var(--primary-color)] w-10 h-1 my-5"></div>
                  <div className="flex justify-start py-5 w-[100%] gap-5">
                    <span className="bg-[#efefef] rounded-full p-3 hover:bg-[#fa7e1e]">
                      <AiOutlineInstagram />
                    </span>
                    {/* <span className="bg-[#efefef] rounded-full p-3">
                      <AiOutlineInstagram />
                    </span>
                    <span className="bg-[#efefef] rounded-full p-3">
                      <AiOutlineInstagram />
                    </span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10">
              <div className="w-[100%] md:w-[70%] mx-auto bg-[#f8f8f8] pt-7 pb-10 px-8 rounded-lg">
                <h3 className="contact-sub-heading">Leave Us Your Info</h3>
                <div className="bg-[var(--primary-color)] w-10 h-1 my-5"></div>
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <div className="flex flex-col justify-start items-start m-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        errors.name && touched.name
                          ? "border border-red-600 w-[100%] form-style"
                          : "w-[100%] form-style"
                      }
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-700">{"*" + errors.name}</p>
                    )}

                  </div>

                  <div className="flex flex-col justify-start items-start m-2">
                    <input
                      id="number"
                      name="number"
                      type="number"
                      placeholder="Mobile Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.number}
                      className={
                        errors.number && touched.number
                          ? "border border-red-600 w-[100%] form-style"
                          : "w-[100%] form-style"
                      }
                    />
                    {errors.number && touched.number && (
                      <p className="text-red-700">{"*" + errors.number}</p>
                    )}
                  </div>

                  <div className="flex flex-col justify-start items-start m-2">
                    <label htmlFor="message"></label>
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      placeholder="Tell us the Query"
                      onChange={handleChange}
                      value={values.message}
                      className="form-style-textarea"></textarea>
                    {errors.message && touched.message && (
                      <p className="text-red-700">{"*" + errors.message}</p>
                    )}
                  </div>

                  <div className="p-5 flex justify-start">
                    <button className="cssbuttons-io-button" type="submit">
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </section>

    </>
  );
};

export default Contact;
