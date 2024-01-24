import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/sidebar.css";

export const PruebaSideBar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="mt-20">
      <section className="">
        <nav className="mobilescreen">
          <div
            title="Menu"
            id="menuToggle"
            className="cursor-pointer"
            onClick={() => setOpen(!isOpen)}
          >
            <div className="newburgerintown">
              <h1>There is a new Burger in town</h1>
              <p>Taste it, feel it, use it.</p>
            </div>
            {/* Utiliza isOpen para aplicar la clase según el estado del menú */}
            <input type="checkbox" checked={isOpen} />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};
