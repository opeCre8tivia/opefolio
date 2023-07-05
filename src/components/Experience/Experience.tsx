import React from "react"
import TechBadge from "../TechBadge/TechBadge"
import Image from "next/image"
import LessonItem from "../LessonItem/LessonItem"
import { ExperienceType } from "@/types/types"

import { BsCaretRightSquare, BsArrowUpRightSquare } from "react-icons/bs"
import Link from "next/link"

type Props = {
  data: ExperienceType
}

const _tech = [
  "React Js",
  "React Native",
  "Express JS",
  "TypeScript",
  "Prisma",
  "PostgreSql",
  "Git & Gitlab",
]

const Experience = ({ data }: Props) => {
  return (
    <div className="w-full h-fit md:flex px-[20px] my-4">
      {/* period section */}
      <div className="mt-[12px] whitespace-nowrap mr-2 font-extrabold text-gray-400 text-[10px]">
        {data.period}
      </div>

      {/* content */}
      <div className="w-full h-filt">
        {/* role section */}
        <div className="mt-[12px] font-bold text-gray-200 text-[14px]">
          {data.role}
        </div>

        {/* description and screen shot */}
        <div>
          {/* desc */}
          <div className="text-gray-400 text-[12px] my-[10px]">
            {data.description}
          </div>
          {/* technologies */}
          <div className="w-full flex flex-wrap items-center">
            {data.techList &&
              data.techList.map((t, index: number) => (
                <TechBadge key={index} name={t} />
              ))}
          </div>
          {/* img */}
          <div className=" w-full h-fit my-2 flex justify-center items-center">
            <Image
              src={data.img}
              alt="project screen shot"
              width={400}
              height={300}
              className=" border-gray-400 border-4 md:w-full"
            />
          </div>

          {/* demo or links */}
          <div className="h-[60px] w-full flex items-center justify-start">
            {data.hasVidDemo && (
              <Link href={data.videoLink}>
                <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <BsCaretRightSquare color="#f3f3f3" size={30} />
                </div>
              </Link>
            )}

            {data.link.length > 0 && (
              <Link href={data.link}>
                <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <BsArrowUpRightSquare color="#f3f3f3" size={30} />
                </div>
              </Link>
            )}
          </div>

          {/* roles */}

          <div className="mt-10 mb-4 font-extrabold text-gray-400 text-[18px] underline decoration-double py-2">
            Notable Lessons Learnt
          </div>

          <div className="w-full flex flex-col items-start justify-start">
            {data.lessons &&
              data.lessons.map((lesson, index: number) => (
                <LessonItem text={lesson} key={index} />
              ))}
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default Experience
