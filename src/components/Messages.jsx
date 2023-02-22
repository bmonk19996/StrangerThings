import React, { useEffect, useState } from "react";
import { getUser } from "../API-Adapt";
import { useOutletContext } from "react-router-dom";

export default function Messages() {
  const [token] = useOutletContext();
  const [messages, setMessages] = useState([]);
  const [messagesTo, setMessagesTo] = useState([]);
  const [messagesFrom, setMessagesFrom] = useState([]);
  useEffect(() => {
    getMessages();
  }, []);
  async function getMessages() {
    const response = await getUser(token);
    if (response.data) {
      setMessages(response.data.messages);
    } else {
      setMessages([]);
    }
  }
  console.log(messages);
  return messagesTo.map((message, idx) => {
    return (
      <div className="message" key={`the unique key for this is ${idx}`}>
        <div>content:{message.content}</div>
        <div>from: {message.fromUser.username}</div>
        <div> item: {message.post.title} </div>
      </div>
    );
  }

  messagesFrom.map((message, idx) => {
    return (
      <div className="message" key={`the unique key for this is ${idx}`}>
        <div>content:{message.content}</div>
        <div>from: {message.fromUser.username}</div>
        <div> item: {message.post.title} </div>
      </div>
    );
  });
}
