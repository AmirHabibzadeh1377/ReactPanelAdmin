import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import './home.scss'
import Widget from '../../component/widget/Widget';
import Fetured from '../../component/fetured/Fetured';
import Chart from '../../component/chart/Chart';
import UserTable from '../../component/table/UserTable';
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <hr />
        <div className='widgets'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Fetured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">آخرین تراکنش ها</div>
          <UserTable/>
        </div>
      </div>
    </div>
  )
}

export default Home
