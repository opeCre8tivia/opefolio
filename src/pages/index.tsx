import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <main>
      {/* nav bar */}
      <NavBar />
      {/* section parent */}
      <div className="w-full h-[94vh] flex justify-center items-center relative bg-lime-500">
        {/* left fixed on md screens */}
        <div className="hidden md:flex flex-col justify-center items-center w-[100px] min-h-[90vh] fixed bottom-0 left-0 top-0 bg-transparent">
          A
        </div>
        {/* main middle section */}
        <div className="w-full md:w-[80vw] h-full  bg-pink-300">B</div>
        {/* right fixed on md screens */}
        <div className="hidden md:flex flex-col justify-center items-center w-[100px] h-full  min-h-[90vh] fixed bottom-0 right-0 bg-transparent">
          C
        </div>
      </div>
    </main>
  );
}
