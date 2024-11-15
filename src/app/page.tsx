import Image from "next/image";
import Head from "./components/head";
import Body from "./components/body";
import Bottom from "./components/bottom";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center">
      <Head />
      <Body />
      <Bottom/>
      
    </div>
  );
}
