import React from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import MessageIcon from '@mui/icons-material/Message';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">پنل ادمین</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">داشبورد</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>داشبورد</span>
                </li>
                <p className="title">مدیریت کاربران</p>
                <li>
                    <GroupIcon className='icon'/>
                    <span>کاربران</span>
                </li>
                <p className="title">مدیریت محصولات</p>
                <li>
                   <StoreIcon className='icon'/>
                    <span>مدیریت محصولات</span>
                </li>
                <p className="title">میز خدمات</p>
                <li>
                    <MessageIcon className='icon'/>
                    <span>مدیریت نظرات</span>
                </li>
                <li>
                    <PsychologyIcon className='icon'/>
                    <span>مدیریت خطاها</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon'/>
                    <span>تنظیمات</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
           <div className="optionColor"></div>
           <div className="optionColor"></div>
        </div>
    </div>
  )
}

export default Sidebar
