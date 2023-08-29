import { useState } from "react";
import Top from "../Top";
import Bottom from "../Bottom";

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
      <div style={{ flex: 1 }}></div> {/* 중간 콘텐츠 */}
      <Bottom />
    </div>
  );
};

export default Statistics;
