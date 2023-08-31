import Kakao from "@/components/appProject/Login/kakao";
import SiginIn from "@/components/appProject/Login/siginIn";
import Message from "@/components/appProject/Modal/message";
import Note from "@/components/appProject/spendingStatus/note";
import Statistics from "@/components/appProject/spendingStatus/statistics";

const Login = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          height: "100vh",
          gap: 10,
        }}
      >
        <div
          style={{
            marginBottom: 10,
            gap: 10,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Kakao />
          <SiginIn />
        </div>
        <div
          style={{
            marginBottom: 10,
            gap: 10,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Statistics />
          <Note />
          <Message />
        </div>
      </div>
    </>
  );
};

export default Login;
