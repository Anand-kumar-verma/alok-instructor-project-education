import { useState } from "react";
import ChatWindow from "../chat-window/chatWindow";
import ChatInput from "../chatInput/chatInput";
import ProfileMenu from "../profile-menu/profile";

const Chat = () => {
    const [messages, setMessages] = useState([]);
  
    const handleSendMessage = (message) => {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setTimeout(() => {
        setMessages([...messages, { text: message, sender: 'user' }, { text: 'This is a response', sender: 'assistant' }]);
      }, 1000);
    };
  
    return (
      <div className="mt-78px">
        <ProfileMenu/>
        <div className="flex w-full justify-center items-center">
        <div className="w-full h-full border shadow-lg">
          <ChatWindow messages={messages} />
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
      </div>
    );
  };
  
  export default Chat;