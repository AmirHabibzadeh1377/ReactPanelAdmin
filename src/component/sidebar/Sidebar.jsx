import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import MessageIcon from "@mui/icons-material/Message";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"} className="link">
          <span className="logo">پنل ادمین</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">داشبورد</p>
          <li>
            <Link to={"/"} className="link">
              <DashboardIcon className="icon" />
              <span>داشبورد</span>
            </Link>
          </li>
          <p className="title">مدیریت کاربران</p>
          <li>
            <Link to="/users" className="link">
              <GroupIcon className="icon" />
              <span>کاربران</span>
            </Link>
          </li>
          <p className="title">مدیریت محصولات</p>
          <li>
            <Link to={"/products"} className="link">
              <StoreIcon className="icon" />
              <span>مدیریت محصولات</span>
            </Link>
          </li>
          <p className="title">میز خدمات</p>
          <li>
            <Link to={"/comments"} className="link">
              <MessageIcon className="icon" />
              <span>مدیریت نظرات</span>
            </Link>
          </li>
          <li>
            <Link to={"/logs"} className="link">
              <PsychologyIcon className="icon" />
              <span>مدیریت خطاها</span>
            </Link>
          </li>
          <li>
            <Link to={"/settings"} className="link">
              <SettingsApplicationsIcon className="icon" />
              <span>تنظیمات</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="optionColor"></div>
        <div className="optionColor"></div>
      </div>
    </div>
  );
};

export default Sidebar;
