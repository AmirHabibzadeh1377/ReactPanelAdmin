import './single.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import image from '../../content/images/avatar.jpg'
import Chart from '../../component/chart/Chart'
import UserTable from '../../component/table/UserTable'
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="right">
            <div className="editButton">ویرایش</div>
            <h1 className="title">اطلاعات کاربر</h1>
            <div className="item">
              <img src={image} alt="" className="itemImage" />
              <div className="details">
                <h1 className="itemTitle">امیر حبیب زاده</h1>
                <div className="detailItem">
                  <span className="itemKey">ایمیل:</span>
                  <span className="itemValue">amirhabibzadeh@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">شماره تماس :</span>
                  <span className="itemValue">09015202479</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">آدرس :</span>
                  <span className="itemValue">تهران- قرجک شهرستان ورامین</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">کشور :</span>
                  <span className="itemValue">ایران</span>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <Chart aspect={5/1} chartTitle={"نمودار خرید 6 ماه مشتری"}/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">آخرین خرید های کاربر</h1>
          <UserTable/>
        </div>
      </div>
    </div>
  )
}

export default Single
