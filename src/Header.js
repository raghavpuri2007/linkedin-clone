import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CommentIcon from '@mui/icons-material/Comment';
import { useDispatch } from "react-redux"
import { auth } from "./firebase"
import { logout } from "./features/userSlice"
function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>

        <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin-Icon" />

            <div className="header_search">
                <SearchIcon />
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon={HomeIcon } title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={WorkOutlineIcon} title="Jobs" />
            <HeaderOption Icon={CommentIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsNoneIcon} title="Notifications" />
            <HeaderOption avatar={true} title="me"
            onClick={logoutOfApp}
            />
        </div>
    </div>
  )
}

export default Header