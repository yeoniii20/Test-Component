import React from "react";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

const LargeBtnBasic: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <button
      style={{
        padding: "12px 0px 11px 0px",
        borderRadius: 8,
        border: "1.5px solid #1F1F1F",
        backgroundColor: "white",
        boxShadow: "1.5px 1.5px 0px 0px #1F1F1F",
        color: "#1F1F1F",
        width: 335,
        height: 48,
        textAlign: "center",
        alignSelf: "center",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default LargeBtnBasic;
