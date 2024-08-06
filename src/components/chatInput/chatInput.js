import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}  className="flex p-6 sm:p-[14px] lg:p-[32px] border-t bg-white">
      <input
        type="text"
        className="flex-grow p-2 border rounded-l-lg focus:outline-none bg-slate-50 text-light-black"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit" className="px-4 py-2 bg-custom-blue text-white rounded-r-lg hover:bg-[#3D9AC4] focus:outline-none">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
