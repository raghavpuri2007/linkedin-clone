import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux"
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    
    return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://i.pinimg.com/originals/a3/af/35/a3af356c5d57a46a1abdf37421ce3ac3.jpg" alt="Linkedin Profile Banner" />
            <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed your profile?</p>
                <p className="sidebar_statNumber">2,543</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">2,448</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('java')}
            {recentItem('ftc')}
            {recentItem('fbla')}
            {recentItem('tsa')}
            {recentItem('usaco')}
        </div>
    </div>
    )
}

export default Sidebar