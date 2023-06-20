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
        <div style={{ color: "black" }}>관리자 화면 정의서 Dropdown</div>
        <div style={{ display: "flex", gap: 30, marginBottom: 200 }}>
          <br />
          <SimpleDropdown />
          <br />
          <SimpleCategoryDropdown />
          <br />
          <MultiGroupDropdown />
          <br />
        </div>
        <div style={{ color: "black" }}>모니터 화면 정의서 Dropdown</div>
        <div style={{ display: "flex", gap: 30 }}>
          <br />
          <SingleTabulatorDropdown />
          <br />
          <MultiTabulatorDropdown />
          <br />
          <MultiBothSearchDropdown />
          <br />
          <GridDropdown />
        </div>
        {/* <MultiGroupDropdown />
        <SimpleDropdown />
        <SimpleCategoryDropdown /> */}
        {/* <BasicDropdown /> */}
        {/* <SingleTabulatorDropdown /> */}
        {/* <SingleSearchDropwon /> */}
        {/* <MultiTabulatorDropdown /> */}
        {/* <MultiSearchDropdown /> */}
        {/* <SingleSelectDropdown /> */}
      </div>
    </>
  );
}
