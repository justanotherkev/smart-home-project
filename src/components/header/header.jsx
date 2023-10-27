import s from "./header.module.css";
import { useUser } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

function Header(props) {
  const userData = useUser();

  if (!userData.isLoaded || !userData.isSignedIn) {
    return (
      <div className={s.header}>
        <div>
          <h1 className={s.header_heading}>Loading..</h1>
          <p className={s.header_tagline}>{props.subheading}</p>
        </div>

        <div>
          <NavLink to="/account">
            <img className={s.profile_img} src={userData.user.imageUrl} alt="Profile picture" />
          </NavLink>
        </div>

      </div>
    );
  }

  return (
    <div className={s.header}>
      <div>
        <h1 className={s.header_heading}>{props.heading}</h1>
        <p className={s.header_tagline}>{props.subheading}</p>
      </div>
      <div>
        <NavLink to="/account">
          <img className={s.profile_img} src={userData.user.imageUrl} alt="Profile picture" />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
