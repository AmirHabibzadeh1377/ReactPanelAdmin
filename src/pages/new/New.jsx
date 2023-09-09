import "./new.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import noimage from "../../content/images/no-image-icon-15.png";
import { useFormik } from "formik";
import {useState} from 'react';
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
const New = ({title,columns,isUser}) => {
  const validate = (values) => {
    const error = {};
    if (!values.name) {
      error.name = "وارد کردن نام الزامی است";
    } else if (values.name.length < 3) {
      error.name = "طول نام نباید کمتر از 3 کارکتر باشد";
    }
    if (!values.userName) {
      error.userName = "وارد کردن نام کاربری الزامی است";
    } else if (values.userName.length < 5) {
      error.userName = "طول نام کاربری نباید کمتر از 5 کارکتر باشد";
    }
    if (!values.email) {
      error.email = "وارد کردن ایمیل الزامی است";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      error.email = "ادرس ایمل وارد شده معتبر نمی باشد";
    }
    if (!values.phone) {
      error.phone = "وارد کردن مشاره موبایل الزامی است";
    } else if (values.phone.length < 11) {
      error.phone = "طول شماره تماس وارد شده کمتر از 11 کاراکتر می باشد";
    }

    return error;
  };
  const [file,setFile] = useState("");
  const formik = useFormik({
    initialValues: {
      userName: "",
      name: "",
      email: "",
      phone: "",
      zipcode: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <img src={!file?noimage : URL.createObjectURL(file)} alt="" />
          </div>
          <div className="left">
            <form onSubmit={formik.handleSubmit} className="newForm">
              <div className="formInput">
                <img src="" alt="" />
                <label htmlFor="file">
                 تصویر : <DriveFolderUploadIcon className="icon"/>
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={(e)=>{setFile(e.target.files[0])}}
                  value={formik.values.imageUrl}
                />
              </div>
              <div className="formInput">
                <label htmlFor="name">{isUser ?columns.name :columns.productName} :</label>
                <input
                  type="text"
                  className="filds"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {!formik.values.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="formInput">
                <label htmlFor="userName">{isUser ? columns.userName : columns.productPrice}:</label>
                <input
                  className="filds"
                  type="text"
                  id="userName"
                  name="userName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userName}
                />
                {!formik.values.userName ? (
                  <div className="error">{formik.errors.userName}</div>
                ) : null}
              </div>

              <div className="formInput">
                <label htmlFor="email">{isUser?columns.email:columns.productCount}:</label>
                <input
                  className="filds"
                  type="text"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {!formik.values.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="formInput">
                <label htmlFor="phone">{isUser?columns.phoneNumber:columns.productDiscount} :</label>
                <input
                  type="text"
                  className="filds"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {!formik.values.phone ? (
                  <div className="error">{formik.errors.phone}</div>
                ) : null}
              </div>
              <div className="formInput">
                <label htmlFor="zipcode">{isUser ? columns.zipCode: columns.productDescription}</label>
                <input
                  className="filds"
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zipcode}
                />
                {!formik.values.zipcode ? (
                  <div className="error">{formik.errors.zipcode}</div>
                ) : null}
              </div>
              <button type="submit">افزودن</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
