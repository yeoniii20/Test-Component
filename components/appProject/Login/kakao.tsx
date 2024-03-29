const kakao = () => {
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
          src="/assets/SUNNY.png"
          style={{
            marginTop: 75,
            alignSelf: "center",
          }}
        />
        <div
          style={{
            fontFamily: "SUITE",
            fontSize: 20,
            fontWeight: 500,
            color: "#1F1F1F",
            marginTop: 48,
            textAlign: "center",
          }}
        >
          간편하게 로그인하고
          <br />
          써니의 서비스를 이용해보세요
        </div>
        <img
          src="/assets/kakao_login_large.png"
          style={{
            width: 335,
            height: 50.25,
            marginTop: 48,
            alignSelf: "center",
          }}
        />
      </div>
    </>
  );
};
export default kakao;
