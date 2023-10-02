import { NavLink } from "react-router-dom";
import "./MenuBar.css";

export const MenuBar = () => {
  const menuMap = {
    Main: "/main",
    Profile: "/profile",
    Add: "/add",
  };
  return (
    <div className="menu-container">
      {Object.entries(menuMap).map(([key, value]) => (
        <div className="block" key={key}>
          <NavLink
            to={key}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {key}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
