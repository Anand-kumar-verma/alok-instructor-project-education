import React from 'react';

const ChatWindow = ({ messages }) => {
  return (
    <div className="flex flex-col p-4 space-y-4 overflow-y-auto h-96 bg-slate-50">
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-custom-blue text-white' : 'bg-gray-200 text-black'}`}>
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
