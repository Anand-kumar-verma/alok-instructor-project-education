import React from "react";
import Index from "../components/admin-dashview";

export const FeedbackComment = () => {
  return (
    <div className="bg-slate-50">
      <div className="main max-w-[2300px] mt-[76px] flex flex-1 justify-between">
        <Index name="comments" />
      </div>
    </div>
  );
};
