import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoIosMenu } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed flex justify-center items-center z-[100] w-screen py-5 font-serif text-black bg-white border border-black border-b-1 top-0 left-0 transition duration-300 ">
      <div
        className="hidden resp:flex justify-center items-center mr-5 w-10 h-10 text-2xl bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
      <div
        className={
          "resp:fixed resp:top-0 resp:left-0 resp:w-full resp:h-screen resp:bg-[rgba(0,0,0,0.5)]" +
          " " +
          (isOpen ? "resp:block" : "hidden")
        }
        id="back__menu"
        onClick={() => {
          setOpen(false);
        }}
      ></div>
      <nav
        className={
          "navbar-home mr-4 lg:mr-16 resp:dark:bg-zinc-950 resp:bg-white resp:m-0 resp:fixed resp:w-60 resp:h-screen resp:top-0 resp:p-7 resp:z-10" +
          " " +
          (isOpen ? "resp:right-0" : "resp:-right-60")
        }
      >
        <ul className="flex items-center gap-96 justify-between resp:mt-5 resp:flex-col">
          <div className="icons-left flex justify-start ml-16 gap-6">
            <div
              title="Menu"
              id="menuToggle"
              onClick={() => setOpen(!isOpen)}
            >
              <input type="checkbox" className="cursor-pointer w-10 h-10 hover:bg-red-600" checked={isOpen} />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <li
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Inicio
                </li>
                <li>
                  <a href="#">Productos</a>
                </li>
                <li>
                  <a href="#">Personalizar</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
            <FiSearch className="cursor-pointer text-black text-2xl hover:text-red-600 transition duration-300" />
          </div>
          <img
            src="/melaologo.jpg"
            className="h-16 ml-10 lg:ml-32 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="icons-right flex justify-end ml-10 gap-6">
            <IoMdHeartEmpty className="cursor-pointer text-black text-2xl hover:text-red-600 transition duration-300" />
            <VscAccount
              className="cursor-pointer text-black text-2xl hover:text-red-600 transition duration-300"
              onClick={() => {
                navigate("/signup");
                setIsOpen(false);
              }}
            />
            <IoBagOutline className="cursor-pointer text-black text-2xl hover:text-red-600 transition duration-300" />
          </div>
        </ul>
      </nav>
    </header>
  );
};
