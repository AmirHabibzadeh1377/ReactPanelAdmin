import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar  from '../../component/navbar/Navbar';
import './home.scss'
import Widget from '../../component/widget/Widget';
const Home = () => {
  return (
    <div className='home'>
       <Sidebar/>
       <div className="homeContainer">
         <Navbar/>
        <hr />
       <div className='widgets'>
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
       </div>
       </div>
    </div>
  )
}

export default Home
