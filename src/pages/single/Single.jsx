import "./single.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import image from "../../content/images/avatar.jpg";
import Chart from "../../component/chart/Chart";
import UserTable from "../../component/table/UserTable";
import { useParams } from "react-router-dom";
import {useState , useEffect} from 'react';
import Loading from '../../component/loading/Loading';
import { RemoveShoppingCart } from "@mui/icons-material";
const Single = () => {
  const { userId } = useParams();
  const [user,setUser] = useState({name :"" ,email:"", address:{phone:"", street:"",suite:"",city:""} });
  const fetchUserApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseJson = await response.json();
    return responseJson;
  };
  useEffect(()=>{
    fetchUserApi().then(response => {
    setUser(response.filter(item=>item.id==userId)[0])
  })
  },[])
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="right">
            <div className="editButton">ویرایش</div>
            <h1 className="title">اطلاعات کاربر</h1>
            <div className="item">
              <img src={image} alt="" className="itemImage" />
              <div className="details">
                <h1 className="itemTitle">{user.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">ایمیل:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">شماره تماس :</span>
                  <span className="itemValue">{user.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">آدرس :</span>
                  <span className="itemValue">{user.address.street + user.address.suite}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">شهر :</span>
                  <span className="itemValue">{user.address.city}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <Chart aspect={5 / 1} chartTitle={"نمودار خرید 6 ماه مشتری"} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">آخرین خرید های کاربر</h1>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
