import React, { useState } from "react";
import RadioBtnT from "./radioBtnT";
import RadioBtnF from "./radioBtnF";

interface CustomButtonProps {
  text: string;
}

const RadioBtn: React.FC<CustomButtonProps> = ({ text }) => {
  const [state, setState] = useState(false);

  const handleRadioBtnClick = () => {
    setState(!state);
    if (state) {
      <RadioBtnT />;
    } else <RadioBtnF />;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
      <button onClick={handleRadioBtnClick} />
      <div style={{ fontSize: 16, fontWeight: 500, color: "#5C5C5C" }}>
        {text}
      </div>
    </div>
  );
};

export default RadioBtn;
