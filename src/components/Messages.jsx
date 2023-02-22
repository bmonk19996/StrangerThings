import React, { useEffect, useState } from "react";
import { getUser } from "../API-Adapt";
import { useOutletContext } from "react-router-dom";

export default function Messages() {
  const [token] = useOutletContext();
  const [messagesTo, setMessagesTo] = useState([]);
  const [messagesFrom, setMessagesFrom] = useState([]);
  useEffect(() => {
    getMessages();
  }, []);
  async function getMessages() {
    const response = await getUser(token);
    // if (response.data) {
    //   setMessages(response.data.messages);
    // } else {
    //   setMessages([]);
    // }

    const messages = response.data.messages;

    for(let i = 0; i < messages.length; i++){
      if(messages[i].fromUser._id === response._id){
        console.log('the message is from me');
      }else{
        console.log('not from me');
      }
    }

    // if(response.data.messages.fromUser === )
  }
  return (
    <div>
      <h2>Received</h2>
      {messagesTo.map((message, idx) => {
        return (
          <div className="message">
            <div>content:{message.content}</div>
            <div>from: {message.fromUser.username}</div>
            <div> item: {message.post.title} </div>
          </div>
        );
      })}
      <h2>Sent</h2>
      {messagesFrom.map((message, idx) => {
        return (
          <div className="message">
            <div>content:{message.content}</div>
            <div>from: {message.fromUser.username}</div>
            <div> item: {message.post.title} </div>
          </div>
        );
      })}
    </div>
  );
}
