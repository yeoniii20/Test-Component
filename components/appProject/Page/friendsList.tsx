import Bottom from "../Bottom";
import Top from "../Top";

const FriendsList = () => {
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
        <Top />
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 25,
              marginBottom: 40,
              paddingLeft: 28,
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#1F1F1F",
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              친구 목록
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#1F1F1F" }}>
              대결중인 친구
            </div>
            <div
              style={{
                width: "100%",
                height: 2,
                background: "grey",
              }}
            />
            <div style={{ display: "flex" }}>
              <img src="/assets/friendIcon.svg" />
              <div style={{ fontSize: 16, fontWeight: 500, color: "#1F1F1F" }}>
                친구1
              </div>
              <img src="/assets/messageIcon.svg" />
              <img src="/assets/winnerIcon.svg" />
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    </>
  );
};

export default FriendsList;
