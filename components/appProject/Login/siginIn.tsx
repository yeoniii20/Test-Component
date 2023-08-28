import { useState } from "react";

const SiginIn = () => {
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFBF6",
          height: 812,
          width: 375,
        }}
      >
        <img
          src="/assets/Union.svg"
          style={{
            height: 120,
            width: 120,
            alignSelf: "center",
            marginTop: 75,
          }}
        />
        <img
          src="/assets/SUNNY.svg"
          style={{
            height: 34,
            width: 104,
            alignSelf: "center",
            marginTop: 16,
          }}
        />
        <div
          style={{
            fontFamily: "SUITE",
            fontSize: 16,
            fontWeight: 500,
            color: "#1F1F1F",
            marginTop: 40,
            alignSelf: "center",
          }}
        >
          써니에서 사용할 별명을 설정해주세요
        </div>
        <input
          placeholder="별명"
          style={{
            width: 320,
            height: 48,
            padding: "14px 11px",
            border: isInputFocused
              ? "1.5px solid #FFA851"
              : "1.5px solid #C1C1C1",
            borderRadius: 8,
            marginTop: 16,
            alignSelf: "center",
            outline: "none",
          }}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <div
          style={{
            marginTop: 8,
            fontSize: 12,
            fontWeight: 500,
            color: "#1F1F1F",
            textAlign: "center",
          }}
        >
          * 2~10자 이내, 특수문자 및 숫자 사용 가능, 이모지 사용 불가
        </div>
        <div
          style={{
            padding: "12px 0px 11px 0px",
            borderRadius: 8,
            border: "1.5px solid #1F1F1F",
            background: "white",
            color: "#1F1F1F",
            width: 335,
            height: 48,
            textAlign: "center",
            alignSelf: "center",
            marginTop: 278,
          }}
        >
          시작하기
        </div>
      </div>
    </>
  );
};
export default SiginIn;
