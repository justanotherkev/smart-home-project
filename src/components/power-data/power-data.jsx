import s from "./power-data.module.css";
import FactorDetails from "../factor-details/factor-details";
import { ElectricBolt, Air, Lightbulb } from "@mui/icons-material";

function PowerData() {
  return (
    <div className={s.powerData}>
      <div className={s.heading}>
        <p className={s.title}>Power Consumption</p>
        <p className={s.subtitle}>Summary of the energy consumption</p>
      </div>

      <div className={s.info_display}>


        <div className={s.item_box_dark}>

          <div className={s.item_icon}>
            <ElectricBolt style={{ fontSize: 20 }} />
          </div>

          <div className={s.item_details}>
            <div className={s.item_reading}>16 kwh</div>
            <p className={s.item_subtitle}>Today</p>
          </div>

        </div>


        <div className={s.item_box_light}>

          <div className={s.item_icon}>
            <ElectricBolt style={{ fontSize: 20 }} />
          </div>

          <div className={s.item_details}>
            <div className={s.item_reading}>439 kwh</div>
            <p className={s.item_subtitle}>This month</p>
          </div>

        </div>

      </div>

      <div className={s.light_and_Ac}>
        <FactorDetails
          icon={<Lightbulb style={{ fontSize: 20 }} />}
          title="Main Light"
          reading="2"
          units=" kwh"
        />
        <FactorDetails
          icon={<Air style={{ fontSize: 20 }} />}
          title="Air Conditioner"
          reading="8"
          units=" kwh"
        />
      </div>
    </div>
  );
}

export default PowerData;
