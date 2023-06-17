import Image from "next/image";
import { Inter } from "next/font/google";
import BasicDropdown from "@/components/dropdown/BasicDropdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <BasicDropdown />
    </>
  );
}
