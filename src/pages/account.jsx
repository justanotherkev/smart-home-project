import Header from "../components/header/header";
import { UserProfile } from "@clerk/clerk-react";

function Account() {
  return (

    <div className="account">
      <div className="userProfile">
        <UserProfile />
      </div>
    </div>



  );
}

export default Account;
