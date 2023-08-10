import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="right">
          <div className="items">
            <div className="item">
              <LanguageIcon className='icon'/>
            </div>
            <div className="item">
              <DarkModeIcon className='icon'/>
            </div>
            <div className="item">
              <FullscreenExitIcon className='icon'/>
            </div>
            <div className="item">
              <NotificationsNoneIcon className='icon' />
            </div>
            <div className="item">
              <ChatBubbleIcon className='icon'/>
            </div>
            <div className="item">
              <ListIcon className='icon'/>
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
