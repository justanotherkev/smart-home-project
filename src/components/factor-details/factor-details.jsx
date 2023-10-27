import s from "./factor-details.module.css";

function FactorDetails(props) {
  return (
    <div className={s.item_container}>
      <div className={s.item_icon_container}>{props.icon}</div>
      <div className={s.item_details}>
        <p className={s.item_title}>{props.title}</p>
        <p className={s.reading}>{props.reading}{props.units}</p>
      </div>
    </div>
  );
}

export default FactorDetails;
