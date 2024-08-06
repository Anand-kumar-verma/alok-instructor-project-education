import React from "react";
import Review from "../review-card/review";
import Navbar from "../admin-navbar/navbar";
export default function Comments() {
  return (
    <div className="w-full h-[calc(100vh-76px)]">
      <Review />
      <div className="mt-2"></div>
      <Review/>
      <div className="mt-2"></div>
      <Review/>
    </div>
  );
}
