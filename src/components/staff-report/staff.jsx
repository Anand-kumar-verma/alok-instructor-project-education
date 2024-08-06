import React, { useEffect, useState } from "react";
// import { dateStaff } from '../../dates/jummy'
import { cards } from "../../dates/jummy";
import {getRoute} from "../../dates/jummy";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Staff = ({ data, numberItems }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const name = useParams();
  console.log(name);

  const location = useLocation();
  console.log(location?.pathname?.split("/")?.[location?.pathname?.split("/").length-1]);
  function handleClick() {
    navigate(`/admin-dashboard/recent-purchase`);
  }
  useEffect(() => {
    if (data.length > numberItems) {
      setItems(data.slice(0, numberItems));
    } else {
      setItems(data);
    }
  }, [data, numberItems]);

  return (
    <div className="w-full bg-white rounded-xl p-6">
      <div className=" flex justify-between pb-4">
        <div className=" text-zinc-900 text-base font-semibold leading-normal">
          {cards?.find((i)=>i.id===name?.id)?.text || getRoute?.find((i)=>i.location===location?.pathname?.split("/")?.[location?.pathname?.split("/").length-1])?.name || "Sale Report"}
        </div>
        {items.length <= 4 && (
          <div
            onClick={handleClick}
            className=" text-right cursor-pointer text-[#52B6DF] text-sm font-semibold leading-tight"
          >
            View All
          </div>
        )}
      </div>
      <div className=" flex-col justify-start items-start inline-flex w-full">
        {items.map(({ name, img, color, percent, money,status }) => {
          return (
            <div className="w-full px-6 py-3 bg-white border-b border-neutral-200 justify-start items-center gap-4 inline-flex">
              <div className="grow shrink basis-0 h-11 justify-start items-center gap-4 flex">
                <img src={img} alt="" />
                <div className="justify-start">
                  <div className="text-zinc-900 text-base font-medium leading-normal">
                    {name}
                  </div>
                  <div
                    className={`self-stretch ${color} text-xs font-normal leading-[18px]`}
                  >
                    {percent}
                  </div>
                  <div className={`self-stretch ${color} text-xs font-normal leading-[18px]`}>
                    {status}
                  </div>
                </div>
              </div>
              <div className="w-[92px] flex-col justify-start items-start inline-flex">
                <div className={`${location?.pathname?.split("/")?.[location?.pathname?.split("/").length-1]==="user-notification" && "text-[12px]"} self-stretch text-right text-zinc-900 text-base font-medium leading-normal`}>
                  {money}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staff;

// shahribek
