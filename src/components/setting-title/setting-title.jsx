import s from "./setting-title.module.css";

function SettingTitle(props) {
  return (
    <div className={s.setting_header}>
      <div className={s.icon_and_title}>
        {props.icon}
        <h1 className={s.setting_title}>{props.title}</h1>
      </div>
    </div>
  );
}

export default SettingTitle;
