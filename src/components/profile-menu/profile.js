import React from 'react';

const ProfileMenu = () => {
  return (
    <div className="flex justify-between items-center p-4  text-card-black bg-white">
      <div className="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Main hu Na"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-semibold">Mai hu Na</span>
      </div>
    </div>
  );
};

export default ProfileMenu;
