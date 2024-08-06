import React from "react";
import Navbar from "../components/admin-navbar/navbar";
import Sidebar from "../components/admin-sidebar/sidebar";

const Layout = ({children }) => {
  return (
    <div className="!h-screen !w-screen overflow-auto bg-slate-50">
      <Navbar />
      <div className="!h-[90vh]  !w-full !fixed !top-[10vh] !flex">
          <Sidebar />
        <div className="w-full !h-full  !overflow-auto">
          <p className="!text-[#dedede]">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
