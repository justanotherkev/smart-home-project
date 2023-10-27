import Header from "../components/header/header";
import { UserProfile } from "@clerk/clerk-react";
import SettingTitle from "../components/setting-title/setting-title";
import {
  AccountBox,
  AccountCircle,
  AccountCircleOutlined,
  ShareLocation,
} from "@mui/icons-material";

function Settings() {
  const handleCityChange = (event) => {
    console.log(event);
  };

  return (
    <div className="settings">
      <Header
        heading={"Settings"}
        subheading={"Manage your application and account settings"}
      />

      {/* <div className="setting_box">
        <SettingTitle
          title={"Location"}
          icon={<ShareLocation style={{ fontSize: 40 }} />}
        />

        <div className="option_box">
          <p className="setting_prompt">Select your current city: </p>
          <select className="city_dropdown" onChange={handleCityChange()}>
            <option value="" disabled selected>
              Select a city
            </option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Dubai">Dubai</option>
            <option value="Cairo">Cairo</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>
      </div> */}
    </div>
  );
}

export default Settings;
