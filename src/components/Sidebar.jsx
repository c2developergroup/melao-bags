import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/sidebar.css";

export const SideBar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
          <div
            title="Menu"
            id="menuToggle"
            className="cursor-pointer"
            onClick={() => setOpen(!isOpen)}
          >
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
  );
};
