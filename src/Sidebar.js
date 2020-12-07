import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SidebarChart from './SidebarChart';
import { selectUser, userSlice } from './features/userSlice';
import { useSelector } from 'react-redux';
import db, {auth}  from './firebase';

function Sidebar() {
    const user=useSelector(selectUser);
    const [chats,setChats]=useState([]);

  useEffect(()=>{
        db.collection("chats").onSnapshot((snapshot=>
        setChats(
            snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data(),
            }))
        )
        ));
  },[]);

  const addChat=()=>{
        const chatName=prompt("please enter chat name");

    if (chatName) {
        db.collection("chats").add({
            chatName:chatName,
            });
         }
    };
     
        return (
        <div className="sidebar">
            <div className="sidebar__header">

                <Avatar 
                src={user.photo}
                onClick={()=>{ auth.signOut()}} 
                className="sidebar__avatar"/>

                <div className="sidebar__input">
                    <SearchIcon />
                    <input placeholder="Search"/>
                </div>

                <IconButton className="sidebar__inputButton">
                    <RateReviewIcon onClick={addChat}/>
                </IconButton>
                
            </div>

           <div className="sidebar__chats">
              {chats.map(({id,data: { chatName } }) => (
                   <SidebarChart key={id} id={id} chatName={chatName}/>
              ))}
            
            </div>

        </div>
    );
}

export default Sidebar;
