import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
import avatarImage from '../../content/images/avatar.jpg';
import { display } from '@mui/system';
const Navbar = () => {

  
  const ClickHandler=()=>{
    let languageItems = document.querySelector(".languageItems");
    if(languageItems.classList.contains("active")){
      languageItems.classList.remove("active")
    }
    else{
      console.log("object")
      languageItems.classList.add("active")
    }
    // languageItems.classList.add()
  }
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="right">
          <div className="items">
            <div className="item">
              <LanguageIcon className='icon' onClick={ClickHandler}/>
              <div className='languageItems' >
                <div className='languageItem'>انگیلیسی</div>
                <div className='languageItem'>فارسی</div>
              </div>
            </div>
            <div className="item">
              <DarkModeIcon className='icon'/>
            </div>
            <div className="item">
              <FullscreenExitIcon className='icon'/>
            </div>
            <div className="item">
              <NotificationsNoneIcon className='icon' />
              <span className='Counter'>1</span>
            </div>
            <div className="item">
              <ChatBubbleIcon className='icon'/>
              <span className='Counter'>1</span>
            </div>
            <div className="item">
              <ListIcon className='icon'/>
            </div>
            <div className='item'>
                <img src={avatarImage} className='avatar' alt="" />
            </div>
          </div>
        </div>
        <div className="left">
          <div className="search">
            <input type="text" placeholder='جستجو....' />
            <SearchIcon className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar 
