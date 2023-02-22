import React, { useEffect, useState } from "react";
import { getUser } from "../API-Adapt";
import { useOutletContext } from "react-router-dom";

export default function Messages() {
  const [token] = useOutletContext();
  const [messages, setMessages] = useState([]);
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
  return messages.map((message, idx) => {
    return <div>item number:{idx}</div>;
  });
}
