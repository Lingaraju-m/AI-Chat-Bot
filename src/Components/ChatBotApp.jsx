
import React, {useState} from 'react'
import './ChatBotApp.css'

const ChatBotApp = ({ onGoBack, chats, setChats }) => {
  
  const[inputValue, setInputValue] = useState('');
  const[messages, setMessages] = useState(chats[0]?.messages || []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const sendmessage = () =>{
    if(inputValue.trim() !== ''){
      const newMessage = {
        type: 'prompt',
        text: inputValue,
        timestamp: new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" }),
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInputValue('');

      const updatedChats = chats.map((chat, index) => {
        if(index === 0) {
          return {
            ...chat,
            messages: updatedMessages,
          };
        }
        return chat;
      });
      setChats(updatedChats);
    }
  }

  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i className="bx bx-edit-alt new-chat"></i>
        </div>
        {chats.map((chat, index) =>(
            <div key={index} className={`chat-list-item ${index === 0 ? 'active' : ''}`}>
              <h4>{chat.id}</h4>
              <i className="bx bx-x-circle"></i>
            </div>
          ))
        }
      </div>

      <div className="chat-window">
        <div className="chat-title">  
          <h3>Chat with AI</h3>
          <i className="bx bx-arrow-back arrow" onClick={onGoBack}></i>
        </div>
        <div className="chat">
          <div className="prompt">Hi there!
            <span>07:30:57 PM</span>
          </div>
          <div className="response">Hello, I'm AI. How can I assist you today?
            <span>07:30:58 PM</span>
          </div>
          <div className="typing">Typing...</div>
        </div>
        <form className="msg-form">
          <i className="fa-solid fa-face-smile emoji"></i>
          <input type="text" className="msg-input" placeholder="Type a message..." />
          <i className="fa-solid fa-paper-plane"></i>
        </form>
      </div>
    </div>
  )
}

export default ChatBotApp
