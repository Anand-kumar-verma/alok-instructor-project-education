import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Data } from "../../dates/jummy";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const path = useLocation().pathname;
  const lastSegment = path.substring(path.lastIndexOf('/') + 1) || '/';;
  const [activeIcon, setActiveIcon] = useState(null);
  const [activeCat, setActiveCat] = useState(lastSegment);
  const [category, setCategory] = useState([]);
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ maxWidth: 1020 });

  useEffect(() => {
    // Handle the root route separately
    if (lastSegment === '/') {
      setActiveIcon(Data[0].icon);
      setCategory(Data[0].inside);
      setActiveCat(Data[0].inside[0].text);
    } else {
      // Find the current icon and category based on the path
      const currentIcon = Data.find((icon) => 
        icon.inside.some((insideItem) => insideItem.url === lastSegment)
      );

      if (currentIcon) {
        setActiveIcon(currentIcon.icon);
        setCategory(currentIcon.inside);
      }
    }
  }, [path]);

  const ClickedIcon = (icon) => {
    if (icon.icon === activeIcon) {
      return;
    } else {
      dispatch({ type: "SET_TOGGLE", payload: true });
      setActiveIcon(icon.icon);
      setCategory(icon.inside);
      setActiveCat(lastSegment);
      navigate(`/admin-dashboard/${icon.inside[0].url}`);
    }
  };

  if(isSmallScreen)return;

  return (
    <div className="!top-[10vh] !h-full">
      <div className="z-50 drop-shadow-2xl md:drop-shadow flex h-[90vh] !w-[22vw]">
        <div className="flex-col md:justify-start items-start gap-4 flex bg-zinc-900 px-4 py-6 min-h-full">
          {Data.map((icon, index) => (
            <div
              key={index}
              onClick={() => {
                ClickedIcon(icon);
              }}
              className={`p-3.5 cursor-pointer ${
                activeIcon === icon.icon
                  ? "text-white bg-gradient-to-bl from-custom-blue to-custom-coral"
                  : "text-neutral-400"
              } rounded-lg flex-col hover:text-white duration-300 justify-start items-center gap-2 flex`}
            >
              <i className={`${icon.icon} text-xl w-6 h-6 text-center`}></i>
            </div>
          ))}
        </div>
        <div
          className={`${
            state.toggle ? "block" : "hidden"
          } !w-[100%] h-full overflow-hidden md:overflow-auto py-6 bg-white border-r border-neutral-200 flex-col justify-start items-start gap-4 inline-flex`}
        >
          {category.map(({ text, icon, url }, index) => (
            <Link
              to={`/admin-dashboard/${url}`}
              // onClick={() => {
              //   setActiveCat(text);
              // }}
              key={index}
              className={`self-stretch duration-300 cursor-pointer px-[18px] ${
                lastSegment === url
                  ? "bg-orange-50 bg-opacity-80 border-r-2 border-custom-blue"
                  : "text-zinc-500 hover:bg-neutral-200"
              } py-3.5 justify-start items-center gap-3 inline-flex`}
            >
              <div
                className={`w-6 relative ${
                  lastSegment === url
                    ? "text-custom-blue"
                    : "text-zinc-500"
                } text-xl`}
              >
                <i className={`${icon}`}></i>
              </div>
              <div
                className={`grow shrink basis-0 ${
                  lastSegment === url
                    ? "text-custom-blue font-semibold"
                    : "text-zinc-500 font-normal"
                } text-sm leading-tight`}
              >
                {text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
