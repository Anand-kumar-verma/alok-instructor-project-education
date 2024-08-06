import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate, Link } from "react-router-dom";
import profile from "../../dates/imgs/profile.png";
import bell from "../../dates/imgs/bel.png";
import { useMediaQuery } from "react-responsive";
import "../../App.css";
import { Data } from "../../dates/jummy";
import { Drawer } from "../nav-drawer/Drawer";

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const isMediumScreen = useMediaQuery({ minWidth: 1020 });

  const lastSegment = path
    .split("/")
    .filter((segment) => segment !== "")
    .pop();

  useEffect(() => {
    if (lastSegment === "login") {
      setShowIcon(false);
    }
  }, [lastSegment]);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleClick = () => {
    navigate("/user-notification");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="z-50 fixed left-0 top-0 right-0 h-[10vh] px-6 py-4 bg-white border-b border-neutral-200 flex justify-between items-center gap-[20px]">
      <div className="flex items-center">
        <h2 className="font-bold">
          {isMediumScreen ? (
            "Knowledgify"
          ) : (
            <GiHamburgerMenu className="text-xl" onClick={toggleDrawer} />
          )}
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden rounded-full md:flex">
          <div className="px-4 py-2.5 rounded-l-full flex items-center">
            {showIcon && (
              <div onClick={handleClick} className="w-6 h-6 relative">
                <img className="h-full" src={bell} alt="Notifications" />
              </div>
            )}
          </div>
        </div>
        <div onClick={handleLogin} className="flex items-center">
          <img className="w-11 h-11 rounded-full" src={profile} alt="Profile" />
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
};

export default Navbar;
