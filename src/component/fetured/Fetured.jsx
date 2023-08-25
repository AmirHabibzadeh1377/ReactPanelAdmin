import './fetured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Fetured = () => (
  <div className='fetured'>
    <div className="top">
      <div className="title">مجموع درآمد روز جاری</div>
      <MoreVertIcon className='icon' />
    </div>
    <div className="bottom">
      <div className="featuredChart">
        <CircularProgressbar value={70} text='70%' strokeWidth={3} />
      </div>
      <p className="title">مجموع درآمد امروز</p>
      <p className="amount">50,000,000 <span className='iranUnit'>تومان</span></p>
      <a className="description">برای دیدن محصولات پر فروش کلیک کنید</a>
      <div className="summary">
        <div className="item">
          <div className="itemTitle">روزانه</div>
          <div className="itemResult positive">
            <KeyboardArrowUpIcon className='icon'/>
            <div className="resultAmount">50,000,000 <span className='iranUnit'>تومان</span></div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">ماهانه</div>
          <div className="itemResult positive">
            <KeyboardArrowUpIcon className='icon'/>
            <div className="resultAmount">100,000,000 <span className='iranUnit'>تومان</span></div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">سالانه</div>
          <div className="itemResult negative">
            <KeyboardArrowDownIcon className='icon'/>
            <div className="resultAmount">-20,000,000 <span className='iranUnit'>تومان</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Fetured