import React, { useEffect, useState } from "react";
import { getUser } from "../API-Adapt";
import { useOutletContext } from "react-router-dom";

export default function Messages() {
  const buttonText = ["open", "close"];
  const [token] = useOutletContext();
  const [messagesTo, setMessagesTo] = useState([]);
  const [messagesFrom, setMessagesFrom] = useState([]);
  const [received, setReceived] = useState(false);
  const [sent, setSent] = useState(false);
  const [buttonReceive, setButtonReceive] = useState(0);
  const [buttonSent, setButtonSent] = useState(0);

  useEffect(() => {
    getMessages();
  }, []);
  async function getMessages() {
    const response = await getUser(token);
    const messages = response.data.messages;
    const tempTo = [];
    const tempFrom = [];
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].fromUser.username === response.data.username) {
        tempFrom.push(messages[i]);
      } else {
        tempTo.push(messages[i]);
      }
    }
    setMessagesTo(tempTo);
    setMessagesFrom(tempFrom);
  }
  function receiveChange() {
    setReceived(!received);
    setButtonReceive((buttonReceive + 1) % buttonText.length);
  }
  function sentChange() {
    setSent(!sent);
    setButtonSent((buttonSent + 1) % buttonText.length);
  }
  return (
    <div id="messagePage">
      <div className="holdMessage">
      <h2 className="messageTitle">Messages For You</h2>
      {received
        ? messagesTo.map((message, idx) => {
            return (
              <div className="message to" key={`messagesTo:${idx}`}>
                <div><span className="messagesLabel">From</span>: {message.fromUser.username}</div>
                <div><span className="messagesLabel">About</span>: {message.post.title} </div>
                <div className="message-content"><span className="messagesLabel">Message: </span> {message.content}</div>
              </div>
            );
          })
        : null}
      </div>
      <button onClick={() => receiveChange()} className='messageButton'>
        {buttonText[buttonReceive]}
      </button>
      {/* {received
        ? messagesTo.map((message, idx) => {
            return (
              <div className="message to" key={`messagesTo:${idx}`}>
                <div>content:{message.content}</div>
                <div>from: {message.fromUser.username}</div>
                <div> item: {message.post.title} </div>
              </div>
            );
          })
        : null} */}
      
      <div className="holdMessage">
      <h2 className="messageTitle">Sent Messages</h2>
      {sent
        ? messagesFrom.map((message, idx) => {
            return (
              <div className="message from" key={`messagesFrom:${idx}`}>
               <div><span className="messagesLabel">From</span>: {message.fromUser.username}</div>
                <div><span className="messagesLabel">About</span>: {message.post.title} </div>
                <div className="message-content"><span className="messagesLabel">Message:</span><br></br> {message.content}</div>
              </div>
            );
          })
        : null}
      </div>
      <button onClick={() => sentChange()} className='messageButton'>{buttonText[buttonSent]}</button>

    </div>
  );
}
