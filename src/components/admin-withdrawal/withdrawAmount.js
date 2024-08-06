import React from "react";
import Cards from "../admin-sale-cards/cards";
import Options from "../options/options";
import { payment } from "../../dates/jummy";
import Staff from "../staff-report/staff";
import { cards } from '../../dates/jummy'
export const WithdrawAmount = () => {
  return (
    <div className="p-6 mb-6 bg-slate-50 min-h-screen">
      <div className="">
        <Options />
      </div>

      <div className="">
        <Cards data={cards}/>
      </div>

      <div className="my-4">
        <Staff data={payment} numberItems={payment.length} />
      </div>
    </div>
  );
};
