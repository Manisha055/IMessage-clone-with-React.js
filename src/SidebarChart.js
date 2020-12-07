import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChat } from './features/chatSlice';
import db from './firebase';
import * as timeago from 'timeago.js';



import './SidebarChart.css';
 
function SidebarChart({id,chatName}) {
    const dispatch=useDispatch();
    const[chatInfo,setChatInfo]=useState([]);

    useEffect(()=>{
        db.collection("chats")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot)=>{
            setChatInfo(snapshot.docs.map((doc)=>doc.data()))
        })
    },[id]);

    return (
        <div onClick={()=>
            dispatch(
                setChat({
                    chatId:id,
                    chatName:chatName,
                })
            )
        } 
            className="sidebarChart">
            <Avatar src={chatInfo[0]?.photo}/>
            <div className='sidebarChart__info'>
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                <small>
                    {timeago.format(
                        new Date(chatInfo[0]?.timestamp?.toDate())
                       
                       
                    )}
                </small>

            </div>
                 
        </div>
    )
}
 
export default SidebarChart
