import React from "react"

type Props = {
  name: string
}

const TechBadge = ({ name }: Props) => {
  return (
    <div className="w-fit h-fit p-4 flex justify-center items-center text-cyan-300 text-[8px] whitespace-nowrap bg-gray-600 bg-opacity-50 rounded-full m-1">
      {name}
    </div>
  )
}

export default TechBadge
