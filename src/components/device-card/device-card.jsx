import s from "./device-card.module.css";
import PropTypes from "prop-types";
import { PowerIcon } from "@heroicons/react/24/solid";

function DeviceCard(props) {
  const handleClick = () => {
    props.handleDeviceUpdate(props.device._id);
  };

  return (
    <div className={s.device_card}>
      <h2>Test change</h2>
      <h3>Conflict</h3>
      <img className={s.device_card_img} src={props.device.image} alt="Device image" />
      <div className={s.device_card_info}>
        <div className={s.device_card_info_container}>
          <h3 className={s.device_card_text}>{props.device.name}</h3>
          <button
            type="button"
            onClick={handleClick}
            className={
              props.device.state
                ? s.device_card_icon_on
                : s.device_card_icon_off
            }
          >
            <PowerIcon width={36} height={36} />
          </button>
        </div>
      </div>
    </div>
  );
}

DeviceCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default DeviceCard;
