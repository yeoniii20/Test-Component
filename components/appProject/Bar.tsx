import { useState } from "react";

const Bar = () => {
  const [progress, setProgress] = useState(50);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          placeContent: "center",
          paddingTop: 16,
          paddingBottom: 12,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 335,
            height: 24,
            borderRadius: 24,
            border: "1.5px solid #1F1F1F",
            overflow: "hidden",
          }}
        >
          {/* 주황색 배경 */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              // 주황색 배경의 너비
              width: `${progress}%`,
              height: "100%",
              background: "#6ADCA3",
              borderRadius: "0 24px 24px 0",
            }}
          />
          <div
            style={{
              marginLeft: -20,
              fontSize: 16,
              fontWeight: 900,
              color: "#1F1F1F",
              whiteSpace: "nowrap",
              transform: "translateY(-10%) translateX(50%)",
            }}
          >
            NN%
          </div>
        </div>
      </div>
    </>
  );
};
export default Bar;
