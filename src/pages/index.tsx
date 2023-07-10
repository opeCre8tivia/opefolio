import React, { useState, useEffect } from "react"
import NavBar from "@/components/NavBar/NavBar"
import { FaUser, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { AiOutlineGithub } from "react-icons/ai"
import About from "@/components/About/About"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import Experience from "@/components/Experience/Experience"
import { ExperienceType } from "@/types/types"
import data from "../data/experience.json"
import Head from "next/head"
import { spy } from "@/utils/getVisitorsInfo"

export default function Home() {
  const [info, setInfo] = useState<ExperienceType[]>([])

  useEffect(() => {
    if (data) {
      setInfo([...data])
    }
  }, [data])

  useEffect(() => {
    // spy()
  }, [])

  return (
    <main>
      {/* SEO */}
      <Head>
        <title>Emmanuel Opel | Software Engineer</title>
        <meta
          name="description"
          content="I am a software engineer with over 5 years of experience; I know how to building things using code"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

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

          <SectionTitle title="Experience" />
          {info &&
            info.map((i, index: number) => <Experience data={i} key={index} />)}

          {/* <SectionTitle title="Projects" /> */}

          {/* mobile navbar shadow component */}
          <div className="min-h-[60px] w-full sm:hidden "></div>
          {/* mobile screen menu */}
          <div className="w-full h-[50px] min-h-[50px] flex justify-between items-center  bg-white fixed bottom-0 left-0 right-0  sm:hidden px-10 z-20">
            <FaGithub className="text-gray-400 text-[30px] my-1 hover:text-cyan-300" />
            <FaTwitter className="text-gray-400 text-[30px] my-1 hover:text-cyan-300" />
            <FaLinkedin className="text-gray-400 text-[30px] my-1 hover:text-cyan-300" />
          </div>
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
  )
}
