import React from "react";
import { chatProfiles } from "../../dates/jummy";
import { useNavigate } from "react-router-dom";

const ChatScreen = () => {

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/admin-dashboard/messages/${id}`);
  };
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="rounded-lg overflow-hidden">
        {chatProfiles.map((profile) => (
          <div
            onClick={() => handleClick(profile.id)}
            key={profile.id}
            className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-12 h-12 rounded-full mr-4 border-2 border-themeColor"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">
                {profile.name}
              </h2>
              <p className="text-gray-600">{profile.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatScreen;
