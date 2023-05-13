import React from "react";
import Logo from "../assets/moviewwareLogo.png";
import { HiSearch } from "react-icons/hi";

const Header = () => {
  return (
    <div className="h-[62px] text-2xl flex justify-between items-center border-b p-5 bg-[#f5f5f5] ">
      <div>
        <img className="w-[100px] h-[50px]" src={Logo} alt="i-movieware" />
      </div>
      <nav>
        <span className="p-3 hover:cursor-pointer  hover:bg-[#4b4b4b] rounded-md">
          Home
        </span>
        <span className="p-3 hover:cursor-pointer hover:bg-[#4b4b4b] rounded-md">
          Popular
        </span>
        <span className="p-3 hover:cursor-pointer hover:bg-[#4b4b4b] rounded-md">
          Top Rated
        </span>
        <span className="p-3 hover:cursor-pointer hover:bg-[#4b4b4b] rounded-md">
          Upcoming
        </span>
      </nav>
      <div className="relative">
        <input
          className="h-[30px] text-[#6c6c6c] py-4 pl-[40px]  border-solid border-2 border-[black] rounded-md focus:outline-none "
          type="text"
          placeholder="Search....."
        />
        <span className="absolute left-5 top-[20%]">
          <HiSearch className="text-3xl text-[#6c6c6c]" />
        </span>
      </div>
    </div>
  );
};

export default Header;
