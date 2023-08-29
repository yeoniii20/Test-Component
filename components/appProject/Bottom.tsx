import { useState } from "react";

const Bottom = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="100"
          viewBox="0 0 375 100"
          fill="none"
        >
          <mask id="path-1-inside-1_448_96" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 24V100.8C0 101.885 0.0719966 102.953 0.211473 104H374.789C374.928 102.953 375 101.885 375 100.8V24C375 10.7452 364.255 0 351 0H253.733C240.581 0 230.419 11.2945 223.722 22.6126C216.242 35.2525 202.818 43.68 187.5 43.68C172.182 43.68 158.758 35.2525 151.278 22.6126C144.581 11.2945 134.418 0 121.267 0H24C10.7452 0 0 10.7452 0 24Z"
            />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 24V100.8C0 101.885 0.0719966 102.953 0.211473 104H374.789C374.928 102.953 375 101.885 375 100.8V24C375 10.7452 364.255 0 351 0H253.733C240.581 0 230.419 11.2945 223.722 22.6126C216.242 35.2525 202.818 43.68 187.5 43.68C172.182 43.68 158.758 35.2525 151.278 22.6126C144.581 11.2945 134.418 0 121.267 0H24C10.7452 0 0 10.7452 0 24Z"
            fill="white"
          />
          <path
            d="M0.211473 104L-1.27539 104.198L-1.10193 105.5H0.211473V104ZM374.789 104V105.5H376.102L376.275 104.198L374.789 104ZM223.722 22.6126L225.013 23.3765L223.722 22.6126ZM151.278 22.6126L152.569 21.8488H152.569L151.278 22.6126ZM-1.5 24V100.8H1.5V24H-1.5ZM-1.5 100.8C-1.5 101.951 -1.42359 103.086 -1.27539 104.198L1.69833 103.802C1.56758 102.821 1.5 101.819 1.5 100.8H-1.5ZM374.789 102.5H0.211473V105.5H374.789V102.5ZM376.275 104.198C376.424 103.086 376.5 101.951 376.5 100.8H373.5C373.5 101.819 373.432 102.821 373.302 103.802L376.275 104.198ZM376.5 100.8V24H373.5V100.8H376.5ZM376.5 24C376.5 9.91674 365.083 -1.5 351 -1.5V1.5C363.426 1.5 373.5 11.5736 373.5 24H376.5ZM351 -1.5H253.733V1.5H351V-1.5ZM253.733 -1.5C246.701 -1.5 240.542 1.52456 235.339 5.91574C230.144 10.3005 225.829 16.1062 222.431 21.8488L225.013 23.3765C228.312 17.801 232.426 12.3004 237.274 8.20831C242.115 4.12271 247.613 1.5 253.733 1.5V-1.5ZM222.431 21.8488C215.2 34.0682 202.247 42.18 187.5 42.18V45.18C203.388 45.18 217.285 36.4368 225.013 23.3765L222.431 21.8488ZM187.5 42.18C172.753 42.18 159.8 34.0682 152.569 21.8488L149.987 23.3765C157.715 36.4368 171.612 45.18 187.5 45.18V42.18ZM152.569 21.8488C149.171 16.1062 144.856 10.3005 139.661 5.91575C134.458 1.52456 128.299 -1.5 121.267 -1.5V1.5C127.387 1.5 132.885 4.12271 137.726 8.20832C142.574 12.3004 146.688 17.801 149.987 23.3765L152.569 21.8488ZM121.267 -1.5H24V1.5H121.267V-1.5ZM24 -1.5C9.91674 -1.5 -1.5 9.91673 -1.5 24H1.5C1.5 11.5736 11.5736 1.5 24 1.5V-1.5Z"
            fill="#1F1F1F"
            mask="url(#path-1-inside-1_448_96)"
          />
        </svg>
        <div
          style={{
            position: "absolute",
            top: -30,
            left: 156,
            display: "flex",
          }}
        >
          <img
            src="/assets/bottomIcon.png"
            style={{
              marginBottom: 10,
              width: 64,
              height: 64,
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 32,
            display: "flex",
            gap: 102,
          }}
        >
          <div style={{ display: "flex", gap: 41 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src="/assets/community.svg"
                style={{
                  marginBottom: 10,
                  width: 24,
                  height: 24,
                  placeSelf: "center",
                }}
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: "#1F1F1F",
                  textAlign: "center",
                }}
              >
                커뮤니티
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src="/assets/Mssg.svg"
                style={{
                  marginBottom: 10,
                  width: 24,
                  height: 24,
                  placeSelf: "center",
                }}
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: "#1F1F1F",
                  textAlign: "center",
                }}
              >
                대화
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 37 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src="/assets/friend.svg"
                style={{
                  marginBottom: 10,
                  width: 24,
                  height: 24,
                  placeSelf: "center",
                }}
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: "#1F1F1F",
                  textAlign: "center",
                }}
              >
                친구
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src="/assets/profile.svg"
                style={{
                  marginBottom: 10,
                  width: 24,
                  height: 24,
                  placeSelf: "center",
                }}
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: "#1F1F1F",
                  textAlign: "center",
                }}
              >
                마이페이지
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bottom;
