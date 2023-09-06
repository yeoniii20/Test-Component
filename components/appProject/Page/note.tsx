import Bottom from "../Bottom";
import RadioBtn from "../Btn/RadioBtn";
import LargeBtn from "../Btn/largeBtn";
import LargeBtnBasic from "../Btn/largeBtnBasic";
import RadioBtnF from "../Btn/radioBtnF";
import Input from "../Input/input";
import Top from "../Top";

const Note = () => {
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
              }}
            >
              지출 내역 추가
            </div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#1F1F1F",
                marginBottom: 8,
                marginTop: 32,
                paddingLeft: 10,
              }}
            >
              어떤 이름으로 기록할까요?
            </div>
            <Input placeholder={"지출 내용"} />
            <div style={{ display: "flex" }}>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#1F1F1F",
                  paddingLeft: 10,
                  marginTop: 32,
                  marginBottom: 8,
                }}
              >
                어디에 쓰셨나요?
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignSelf: "end",
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#5C5C5C",
                  }}
                >
                  <img
                    src="/assets/notice.svg"
                    style={{
                      width: 16,
                      height: 16,
                      marginLeft: 8,
                      marginBottom: 4,
                      marginRight: 2,
                    }}
                  />
                  구분 기준
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <RadioBtnF />
                  <div
                    style={{ fontSize: 16, fontWeight: 500, color: "#5C5C5C" }}
                  >
                    의류
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <RadioBtnF />
                  <div
                    style={{ fontSize: 16, fontWeight: 500, color: "#5C5C5C" }}
                  >
                    식생활
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <RadioBtnF />
                  <div
                    style={{ fontSize: 16, fontWeight: 500, color: "#5C5C5C" }}
                  >
                    주거
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <RadioBtnF />
                  <div
                    style={{ fontSize: 16, fontWeight: 500, color: "#5C5C5C" }}
                  >
                    기타
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#1F1F1F",
                  marginBottom: 8,
                  marginTop: 32,
                  paddingLeft: 10,
                }}
              >
                얼마를 쓰셨나요?
              </div>
              <Input placeholder={"지출 금액"} />
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#1F1F1F",
                  marginBottom: 8,
                  marginTop: 32,
                  paddingLeft: 10,
                }}
              >
                언제 쓰셨나요?
              </div>
              <Input placeholder={"지출 일자"} />
              <div style={{ marginBottom: 40 }} />
              <LargeBtnBasic
                text={"등록하기"}
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    </>
  );
};

export default Note;
