const RadioBtnT = () => {
  return (
    <>
      <div style={{ cursor: "pointer" }}>
        <div
          style={{
            display: "inline-block",
            width: "24px",
            height: "24px",
            backgroundColor: "white",
            borderRadius: "50%",
            border: "2px solid grey",
          }}
        >
          <div
            style={{
              position: "relative",
              top: "25%",
              left: "25%",
              width: "50%",
              height: "50%",
              backgroundColor: "grey",
              borderRadius: "50%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default RadioBtnT;
