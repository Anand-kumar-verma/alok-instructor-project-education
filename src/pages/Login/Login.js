import React from 'react'
import Navbar from '../../components/admin-navbar/navbar'

export const Login = ({children}) => {
  return (
    <div className=" bg-white">
      <Navbar />
        <div className="w-full !h-full  !overflow-auto">
          <p className="!text-[#dedede]">{children}</p>
        </div>
    </div>
  )
}
