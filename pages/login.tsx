import Kakao from "@/components/appProject/Login/kakao";
import SiginIn from "@/components/appProject/Login/siginIn";
import Message from "@/components/appProject/Modal/message";
import FriendsList from "@/components/appProject/Page/friendsList";
import Note from "@/components/appProject/Page/note";
import Statistics from "@/components/appProject/Page/statistics";

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
          <FriendsList />
          <Message />
        </div>
      </div>
    </>
  );
};

export default Login;
