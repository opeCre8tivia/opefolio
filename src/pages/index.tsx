import NavBar from "@/components/NavBar/NavBar";
import { FaUser, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import About from "@/components/About/About";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function Home() {
  return (
    <main>
      {/* nav bar */}
      <NavBar />
      {/* section parent */}
      <div className="w-full h-[94vh] flex justify-center items-center relative">
        {/* left fixed on md screens */}
        <div className="hidden md:flex flex-col justify-end items-center w-[100px] min-h-[90vh] fixed bottom-0 left-0 top-0 bg-transparent">
          <FaGithub className="text-gray-400 text-[20px] my-5 hover:text-cyan-300" />
          <FaTwitter className="text-gray-400 text-[20px] my-5 hover:text-cyan-300" />
          <FaLinkedin className="text-gray-400 text-[20px] my-5 hover:text-cyan-300" />

          <div className="my-5 w-[2px] h-[150px] bg-gray-400 hover:bg-cyan-300"></div>
        </div>
        {/* main middle section */}
        <div className="w-full md:w-[80vw] h-full flex flex-col justify-start">
          <About />

          <SectionTitle title="Technologies and Tools" />
          <SectionTitle title="Projects" />

          {/* mobile navbar shadow component */}
          <div className="h-[200px] w-full sm:hidden "></div>
        </div>
        {/* right fixed on md screens */}
        <div className="hidden md:flex flex-col justify-end items-center w-[100px] h-full  min-h-[90vh] fixed bottom-0 right-0 bg-transparent">
          <div className="text-gray-400 text-[12px] rotate-90 w-[300px] my-[20px] hover:text-cyan-300 ">
            opegude.n3t@gmail.com
          </div>
          <div className="my-5 w-[2px] h-[60px] bg-gray-400 hover:bg-cyan-300"></div>
        </div>
      </div>
    </main>
  );
}
