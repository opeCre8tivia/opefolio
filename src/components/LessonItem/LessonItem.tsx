import React from "react"
import { FaArrowRight, FaCode } from "react-icons/fa"

type Props = {
  text: string
}

const LessonItem = ({ text }: Props) => {
  return (
    <div className="w-full h-fit flex justify-start items-center">
      <div className="w-[30px] h-[30px] flex justify-center items-center mx-2">
        <FaCode color="#d9d9d9" size={20} />
      </div>
      <div className="text-gray-400 text-[12px] my-[10px]">{text}</div>
    </div>
  )
}

export default LessonItem
