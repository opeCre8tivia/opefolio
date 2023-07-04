import React from "react"
import TechBadge from "../TechBadge/TechBadge"
import Image from "next/image"
import LessonItem from "../LessonItem/LessonItem"

type Props = {}

const _tech = [
  "React Js",
  "React Native",
  "Express JS",
  "TypeScript",
  "Prisma",
  "PostgreSql",
  "Git & Gitlab",
]

const Experience = (props: Props) => {
  return (
    <div className="w-full h-fit md:flex px-[20px] my-4">
      {/* period section */}
      <div className="mt-[12px] whitespace-nowrap mr-2 font-extrabold text-gray-400 text-[10px]">
        2022 - PRESENT
      </div>

      {/* content */}
      <div className="w-full h-filt">
        {/* role section */}
        <div className="mt-[12px] font-bold text-gray-200 text-[14px]">
          Fullstack Mobile & Web Engineer GoldPOS
        </div>

        {/* description and screen shot */}
        <div>
          {/* desc */}
          <div className="text-gray-400 text-[12px] my-[10px]">
            GoldPOS is a point of sale system that runs on a tablet based
            android app and a web based backoffice. I worked with other team
            members to develope an MVP in the shortest time possible and because
            of the tight budget;I had to work on the Frontend,backend and on the
            android app
          </div>
          {/* technologies */}
          <div className="w-full flex flex-wrap items-center">
            {_tech &&
              _tech.map((t, index: number) => (
                <TechBadge key={index} name={t} />
              ))}
          </div>
          {/* img */}
          <div className=" w-full h-fit my-2 flex justify-center items-center">
            <Image
              src={"/pos.png"}
              alt="project screen shot"
              width={400}
              height={300}
              className=" border-gray-400 border-4 md:w-full"
            />
          </div>

          {/* roles */}

          <div className="mt-4 mb-1 font-extrabold text-gray-400 text-[10px]">
            Notable Lessons Learnt
          </div>

          <div>
            <LessonItem text="Learnt how to connect react native app to a bluetooth printer and print" />
            <LessonItem text="Learnt how to connect react native app to a bluetooth printer and print" />
            <LessonItem text="Learnt how to connect react native app to a bluetooth printer and print" />
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default Experience
