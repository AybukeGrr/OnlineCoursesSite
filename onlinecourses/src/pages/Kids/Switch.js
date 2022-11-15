import * as React from "react";
import Switch from "@mui/material/Switch";
import "./Kids.css"
import PriceCardOne from "./PriceCardOne";
import PriceCardGroup from "./PriceCardGroup";


const PriceSwitch = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="example">
      <label>
        <span>4 Kişilik Grup Paketleri</span>
        <Switch
          id="switch"
          onChange={handleChange}
          checked={checked}
          inputProps={{ "aria-label": "controlled" }}
          size="medium"
          style={{ color: "#b16562", bgColor: "transparent"}}
        />
        <span>Birebir Eğitim Paketleri</span>
      </label>
      <p>
        <span>{checked ? <PriceCardGroup /> : <PriceCardOne />}</span>
      </p>
    </div>
  );
}

export default PriceSwitch;
