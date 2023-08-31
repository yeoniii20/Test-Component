import { useState } from "react";

interface CustomButtonProps {
  placeholder: string;
}

const Input: React.FC<CustomButtonProps> = ({ placeholder }) => {
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <>
      <div>
        <input
          placeholder={placeholder}
          style={{
            width: 320,
            height: 48,
            padding: "14px 11px",
            border: isInputFocused
              ? "1.5px solid #FFA851"
              : "1.5px solid #C1C1C1",
            borderRadius: 8,
            alignSelf: "center",
            outline: "none",
            color: "black",
          }}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
      </div>
    </>
  );
};

export default Input;
