import { Avatar } from '@material-ui/core'
import React from 'react'
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import './Message.css'

const Message =forwardRef(
    (       
        {id, 
        contents:{timestamp,email,photo,dispalyName
            ,uid,message}},
        ref
    )=> {

    const user= useSelector(selectUser);
    return (
        <div 
        ref={ref}
        className={`message ${user.email===email && 
        "message__sender"}`}>
            <Avatar className="message__photo" src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            
        </div>
    );
}
);


export default Message
