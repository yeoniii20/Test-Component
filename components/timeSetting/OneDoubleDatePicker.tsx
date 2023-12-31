import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OneDoubleDatePicker = () => {
  const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
  const nowTime = new Date(Date.now());
  const [startDateTime, setStartDateTime] = useState<Date | null>(
    tenMinutesAgo
  );
  const [endDateTime, setEndDateTime] = useState<Date | null>(nowTime);
  const startDatePickerRef = useRef<any>(null);
  const endDatePickerRef = useRef<any>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDateTime(date);
    // 시작 일시를 변경하면 종료 일시를 초기화
    // 종료 일시가 시작 일시보다 이를 수 있기 때문
    setEndDateTime(null);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDateTime(date);
  };

  const isTimeAvailable = (time: Date) => {
    if (!startDateTime) return true;
    return time.getTime() > startDateTime.getTime();
  };

  const openStartDatePicker = () => {
    startDatePickerRef.current.setOpen(true);
  };

  const openEndDatePicker = () => {
    endDatePickerRef.current.setOpen(true);
  };

  const handleButtonClick = () => {
    console.log("시작 일시:", startDateTime);
    console.log("종료 일시:", endDateTime);
    console.log("조회에 성공했습니다");
    alert(
      `조회에 성공했습니다.\n시작 일시: ${startDateTime?.toLocaleString()}\n종료 일시: ${endDateTime?.toLocaleString()}`
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center", color: "black" }}>
      <div style={{ display: "flex" }}>
        <DatePicker
          ref={startDatePickerRef}
          selected={startDateTime}
          onChange={handleStartDateChange}
          showTimeSelect
          dateFormat="yyyy.MM.dd HH:mm"
          timeFormat="HH:mm"
        />
      </div>
      <div
        style={{ backgroundColor: "white", paddingRight: 10, color: "black" }}
      >
        ~
      </div>
      <div style={{ display: "flex" }}>
        <DatePicker
          ref={endDatePickerRef}
          selected={endDateTime}
          onChange={handleEndDateChange}
          showTimeSelect
          dateFormat="yyyy.MM.dd HH:mm"
          timeFormat="HH:mm"
          minDate={startDateTime || new Date()}
          filterTime={isTimeAvailable}
        />
        <button
          style={{
            width: 60,
            backgroundColor: "lightGrey",
            borderRadius: 8,
            border: "none",
            fontSize: "medium",
            fontWeight: "bold",
          }}
          onClick={handleButtonClick}
        >
          Quick
        </button>
      </div>
    </div>
  );
};

export default OneDoubleDatePicker;
