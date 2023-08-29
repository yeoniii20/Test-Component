import { useState } from "react";
import Top from "../Top";
import Bottom from "../Bottom";
import Bar from "../Bar";

const Statistics = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFBF6",
        height: 812,
        width: 375,
      }}
    >
      <Top />
      {/* 중간 콘텐츠 */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 116,
            marginTop: 25,
            marginBottom: 12,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700, color: "#1F1F1F" }}>
            지출 통계
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#5C5C5C" }}>
            지출 내역
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", height: 1.5, background: "#1F1F1F" }} />
          <div style={{ width: "50%", height: 1.5, background: "#5C5C5C" }} />
        </div>
        <Bar text={"의류"} path={"/assets/shirt.svg"} />
        <div style={{ width: "100%", height: 1.5, background: "#1F1F1F" }} />
        <Bar text={"식생활"} path={"/assets/food.svg"} />
        <div style={{ width: "100%", height: 1.5, background: "#1F1F1F" }} />
        <Bar text={"주거"} path={"/assets/home.svg"} />
        <div style={{ width: "100%", height: 1.5, background: "#1F1F1F" }} />
        <Bar text={"기타"} path={"/assets/etc.svg"} />
      </div>
      <Bottom />
    </div>
  );
};

export default Statistics;
