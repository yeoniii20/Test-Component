import { useState } from "react";

const Top = () => {
  const [progress, setProgress] = useState(50);

  return (
    <>
      <div
        style={{
          borderRadius: "0px 0px 24px 24px",
          borderRight: "1.5px solid #1F1F1F",
          borderBottom: "1.5px solid  #1F1F1F",
          borderLeft: "1.5px solid #1F1F1F",
          background: "#FFF",
          // height: 88,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            placeContent: "center",
            paddingTop: 52,
            paddingBottom: 12,
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 700, color: "#1F1F1F" }}>
            D - NN
          </div>
          <div
            style={{
              position: "relative",
              width: 175,
              height: 24,
              borderRadius: 29,
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
                background: "orange",
                borderRadius: "0 29px 29px 0",
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
          <img
            src="/assets/setting3.svg"
            style={{
              height: 24,
              width: 24,
            }}
          />
          <img
            src="/assets/notification.svg"
            style={{
              height: 24,
              width: 24,
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Top;
