import './new.scss';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import noimage from '../../content/images/no-image-icon-15.png';
import { useFormik } from 'formik';
const New = () => {
  const validate = values => {
    const error = [];
    if (!values.name) {
      error.name = "وارد کردن نام الزامی است";
    }
    else if (values.name.length < 3) {
      error.name = "طول نام نباید کمتر از 3 کارکتر باشد"
    }
    if (!values.userName) {
      error.userName = "وارد کردن نام کاربری الزامی است";
    }
    else if (values.userName.length < 5) {
      error.userName = "طول نام کاربری نباید کمتر از 5 کارکتر باشد";
    }
    if (!values.email) {
      error.email = 'وارد کردن ایمیل الزامی است';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      error.email = "ادرس ایمل وارد شده معتبر نمی باشد";
    }
    if (!values.phone) {
      error.phone = "وارد کردن مشاره موبایل الزامی است";
    }
    else if (values.phone.length < 11) {
      error.phone = "طول شماره تماس وارد شده کمتر از 11 کاراکتر می باشد";
    }
  }
  const formik = useFormik({
    initialValues: {
      userName: '',
      name: "",
      email: "",
      phone: "",
      zipcode: "",
    },
    onSubmit: values => {
      alert(values);
    },
  });
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className='title'>افزودن کاربر جدید</h1>
        </div>
        <div className="bottom">
          <div className="right"><img src={noimage} alt="" /></div>
          <div className="left">
            <form onSubmit={formik.handleSubmit} className='newForm'>
              <label htmlFor="name">نام :</label>
              <input type="text"
              className='filds'
              id='name'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              />
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}

              <label htmlFor="userName">نام کاربری:</label>
              <input 
              className='filds'
              type="text"
              id='userName'
              name='userName'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName} />
              {formik.values.userName ? <div>{formik.errors.userName}</div> : null}

              <label htmlFor="email">ایمیل:</label>
              <input 
              className='filds'
              type="text"
              id='email'
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}/>
              {!formik.values.email ? <div>{formik.errors.eamil}</div> : null}

              <label htmlFor="phone">شماره تماس</label>
              <input 
              type="text"
              className='filds'
              id='phone'
              name='phone'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              />
              {!formik.values.phone ? <div>{formik.errors.phone}</div> : null}

              <label htmlFor="zipcode">آدرس پستی</label>
              <input 
              className='filds'
              type="text"
              id='zipcode'
              name='zipcode'
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              value={formik.values.zipcode}/>
              {!formik.values.zipcode ? <div>{formik.errors.zipcode}</div>:null}

              <button type='submit'>افزودن</button>
            </form> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
