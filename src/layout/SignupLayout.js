import React from "react";
import Navbar from "../components/admin-navbar/navbar";
import Sidebar from "../components/admin-sidebar/sidebar";

const SignupLayout = ({children }) => {
  return (
    <div className="overflow-auto bg-slate-50">
      <Navbar />
        <div className="w-full !h-full  !overflow-auto">
          <p className="!text-[#dedede]">{children}</p>
        </div>
    </div>
  );
};

export default SignupLayout;
