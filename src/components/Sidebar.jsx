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
                Inicio
              </li>
              <li>
                <a href="#">Productos</a>
              </li>
              <li>
                <a href="#">Nosotros</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
  );
};
