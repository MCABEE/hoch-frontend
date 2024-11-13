import Image from "next/image";
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import Section from "./components/Section";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";
import MainFooter from "./components/MainFooter";


export default function Home() {
  return (
    <div className="bg-[#FCF5EB] sm:bg-white">
      <Navbar/>
      <Section/>
      <Section2/>
      <div className="py-6"><Section3/></div>
      <div className="py-5 sm:py-10">
        <Section4/>
      </div>
      <div>
        <Section5/>
      </div>
      <div className="py-8">
        <Section6/>
      </div>

      <div>
        <Footer/>
        <MainFooter/>
      </div>
      
      
    </div>
  );
}
