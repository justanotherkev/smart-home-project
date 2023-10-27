import s from "./nav-icon.module.css";
import { Cog6ToothIcon, ChartPieIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const iconSize = 30

function NavIcon(props) {
  if (props.route === "home") {
    return (
      <NavLink to={"/"}>
        {(linkProps) => {
          return (
            <div
              className={linkProps.isActive ? s.container_active : s.container}
            >
              <HomeIcon width={iconSize} height={iconSize} />
            </div>
          );
        }}
      </NavLink>
    );
  } else if (props.route === "settings") {
    return (
      <NavLink to={"/settings"}>
        {(linkProps) => {
          return (
            <div
              className={linkProps.isActive ? s.container_active : s.container}
            >
              <Cog6ToothIcon width={iconSize} height={iconSize} />
            </div>
          );
        }}
      </NavLink>
    );
  } else if (props.route === "analytics") {
    return (
      <NavLink to={"/analytics"}>
        {(linkProps) => {
          return (
            <div
              className={linkProps.isActive ? s.container_active : s.container}
            >
              <ChartPieIcon width={iconSize} height={iconSize} />
            </div>
          );
        }}
      </NavLink>
    );
  } else if (props.route === "account") {
    return (
      <NavLink to={"/account"}>
        {(linkProps) => {
          return (
            <div
              className={linkProps.isActive ? s.container_active : s.container}
            >
              <UserCircleIcon width={iconSize} height={iconSize} />
            </div>
          );
        }}
      </NavLink>
    );
  }
}

export default NavIcon;
