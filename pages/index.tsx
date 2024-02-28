import Image from "next/image";
import { Inter } from "next/font/google";
import BasicDropdown from "@/components/dropdown/BasicDropdown";
import DropdownTest from "@/components/dropdown/dropdownTest";
import SingleTabulatorDropdown from "@/components/dropdown/Single/SingleTabultorDropdown";
import MultiTabulatorDropdown from "@/components/dropdown/Multi/MultiTabulatorDropdown";
import SingleSelectDropdown from "@/components/dropdown/Single/SingleSelectDropdown";
import SingleSearchDropwon from "@/components/dropdown/Single/SingleSearchDropdown";
import MultiSearchDropdown from "@/components/dropdown/Multi/MultiSearchDropdown";
import SimpleDropdown from "@/components/dropdown/SimpleDropdown";
import SimpleCategoryDropdown from "@/components/dropdown/SimpleCategoryDropdown";
import MultiGroupDropdown from "@/components/dropdown/Multi/MutiGroupDropdown";
import MultiBothSearchDropdown from "@/components/dropdown/Multi/MultiBothSearchDropdown";
import GridDropdown from "@/components/dropdown/Grid/GridDropdown";
import SimpleDataTimePicker1 from "@/components/timeSetting/SimpleDateTimePicker2";
import OneDoubleDatePicker from "@/components/timeSetting/OneDoubleDatePicker";
import DoubleCalendarWithTimePicker from "@/components/timeSetting/DoubleCalenderWithTimePicker";
import QuickDatePicker from "@/components/timeSetting/QuickDatePicker";
import SelectQueueTopicTest from "@/components/Modal/SelectQueueTopicTest";
import EChartsComponent from "@/components/chart/echart";
import LineChartComponent from "@/components/chart/lineChart";
import LineChartComponent2 from "@/components/chart/linChart2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const optionList = [
    { value: "option1", lable: "option1" },
    { value: "option2", label: "option2" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "ivory",
          height: "100vh",
        }}
      >
        <SelectQueueTopicTest />
        <div style={{ display: "flex", flexDirection: "row" }}>
          {/* <EChartsComponent /> */}
          <LineChartComponent />
          <LineChartComponent2 />
        </div>
      </div>
    </>
  );
}
