import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoMdHeartEmpty } from "react-icons/io";
import { SideBar } from "./Sidebar";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed flex justify-between items-center z-[100] w-screen py-5 font-serif text-black bg-white border border-black border-b-1 top-0 left-0 transition duration-300">
      <div
        className="flex items-center ml-5 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <i className="fa-solid fa-bars text-2xl"></i>
        <FiSearch className="cursor-pointer text-black text-2xl hover:text-red-600 ml-20" />
      </div>
      <SideBar isOpen={isOpen} setOpen={setOpen} />

      <img
        src="/melaologo.jpg"
        className="h-16 ml-16 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <div className="flex items-center mr-12">
        <IoMdHeartEmpty className="cursor-pointer text-black text-2xl hover:text-red-600 ml-6" />
        <VscAccount
          className="cursor-pointer text-black text-2xl hover:text-red-600 ml-6"
          onClick={() => navigate("/signup")}
        />
        <IoBagOutline className="cursor-pointer text-black text-2xl hover:text-red-600 ml-6" />
      </div>
    </header>
  );
};
