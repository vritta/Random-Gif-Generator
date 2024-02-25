import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-full background flex flex-col relative items-center">
      <h1 className="bg-white text-center w-11/12 rounded-2xl text-4xl py-2 mt-[40px] font-bold">
      RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center mt-[30px] gap-y-10">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
