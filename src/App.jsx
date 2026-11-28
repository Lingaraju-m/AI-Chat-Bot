import React from 'react'
import ChatBotStart from './components/ChatBotStart'
import ChatBotApp from './components/ChatBotApp'

const App = () => {
  const [isChatting, setIsChatting] = React.useState(false);
  const [chats, setChats] = React.useState([]);

  const handleStartChat = () => {
    setIsChatting(true);

    if(chats.length === 0) {
      const now = new Date();
      const newChat = {
        id: `Chat ${now.toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" })} ${now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" })}`,
        messages: [],
      };
      setChats([newChat]);
    }
  };
    
  const handleGoBack = () => {
    setIsChatting(false);
  };
  return (
    <div className="container">
    {
      isChatting ? (
        <ChatBotApp onGoBack={handleGoBack} chats={chats} setChats={setChats} />
      ) : (
        <ChatBotStart onStartChat={handleStartChat} />
      )
    }
    </div>
  )
}

export default App
