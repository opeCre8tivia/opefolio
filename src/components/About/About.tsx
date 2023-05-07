import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section>
      <div className="w-full min-h-[80vh] sm:flex justify-center items-center p-10">
        {/* texts */}
        <div className=" w-full sm:w-[50%] h-full">
          <p className="text-cyan-300 text-[12px]">Hi, my name is</p>

          <h1 className="mt-[20px] font-extrabold text-gray-200 text-[30px]">
            Emmanuel Opel.
          </h1>
          <h1 className="font-extrabold text-gray-400 text-[30px]">
            I build things using code.
          </h1>

          <div className="text-gray-500 text-[12px] my-[10px]">
            I am a software engineer who loves building things for the web and
            mobile.I am always ready to take on new challenges because that is
            what has made me grow in knowledge and keeps me learning new
            technologies that get things done.
            <br />I am currently a vailable for an opportunity; mostly if it
            were to join a team of like minded individuals.
          </div>
        </div>

        {/* photo */}
        <div className=" w-full sm:w-[50%] h-full flex justify-center items-center">
          <Image
            alt="emmanuel's picture"
            src="/ope.jpg"
            width={200}
            height={200}
            style={{ width: "65%", height: "65%", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
