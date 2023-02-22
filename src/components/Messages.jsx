import React, { useEffect, useState } from "react";
import { getUser } from "../API-Adapt";
import { useOutletContext } from "react-router-dom";

export default function Messages() {
    const buttonText = ['open','close']
  const [token] = useOutletContext();
  const [messagesTo, setMessagesTo] = useState([]);
  const [messagesFrom, setMessagesFrom] = useState([]);
  const [received, setReceived] = useState(false);
  const [sent, setSent] = useState(false);
  const [buttonReceive, setButtonReceive] = useState(0)
  const [buttonSent, setButtonSent] = useState(0)


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
    setReceived(!received)
    setButtonReceive((buttonReceive + 1) % buttonText.length)
  }
  function sentChange() {
    setSent(!sent)
    setButtonSent((buttonSent + 1) % buttonText.length)
  }
  return (
    <div>
      <h2>Received</h2>
      <button onClick={() => receiveChange()}>{buttonText[buttonReceive]}</button>
      {received?
      messagesTo.map((message, idx) => {
        return (
          <div className="message" key={`messagesTo:${idx}`}>
            <div>content:{message.content}</div>
            <div>from: {message.fromUser.username}</div>
            <div> item: {message.post.title} </div>
          </div>
        );
      }):null}
      <h2>Sent</h2>
      <button onClick={() => sentChange()}>{buttonText[buttonSent]}</button>
      {sent?
      messagesFrom.map((message, idx) => {
        return (
          <div className="message"key={`messagesFrom:${idx}`}>
            <div>content:{message.content}</div>
            <div>from: {message.fromUser.username}</div>
            <div> item: {message.post.title} </div>
          </div>
        );
      }):null}
    </div>
  );
}
