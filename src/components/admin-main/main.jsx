import React from "react";
import Line from "../../components/charts/linechart/line";
import Cards from "../../components/admin-sale-cards/cards";
import Options from "../../components/options/options";
import Bar from "../../components/charts/bar-graph/bar";
import { cards } from '../../dates/jummy'

const Main = () => {
  return (
    <div className="p-6 mb-6 bg-slate-50 min-h-screen">
      <div className="">
        <Options />
      </div>

      <div>
        <Cards data = {cards}/>
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className=" p-6 w-full my-4 lg:w-[64%] bg-white rounded-xl">
          <div className=" justify-start items-start gap-2 flex flex-wrap">
            <div className="ext-zinc-900 text-base font-medium leading-normal mb-8 text-zinc-900">
              Progress Report
            </div>

            <Line />
          </div>
        </div>
        <div className=" p-6 w-full my-4 lg:w-1/3 bg-white rounded-xl">
          <Bar />
        </div>
      </div>
    </div>
  );
};

export default Main;
