import { TbSunset2 } from "react-icons/tb";
import { RiScissorsCutFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { BsMusicNoteBeamed, BsArrowRightShort } from "react-icons/bs";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 w-full overflow-x-hidden h-full">
      <div className="sticky backdrop-blur-3xl flex flex-col md:flex-row items-center justify-between">
        <h1 className="font-bold font-mono text-4xl p-3">pranav.ga</h1>
        <div className="flex items-center p-3 font-sans font-semibold">
          <a
            href="https://weather.pranav.ga"
            className="px-2 hover:text-blue-700"
          >
            Weather
          </a>
          <a
            href="https://shorty.pranav.ga"
            className="px-2 hover:text-blue-700"
          >
            URL Shortener
          </a>
          <a href="https://yt.pranav.ga" className="px-2 hover:text-blue-700">
            YT Downloader
          </a>
          <a
            href="https://notify.pranav.ga"
            className="px-2 hover:text-blue-700"
          >
            Notify
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-normal h-96 bg-cover bg-[url('/background-1.jpeg')]">
        <div className="p-10 m-10 items-center flex-col backdrop-blur-3xl backdrop-brightness-150 rounded-lg flex">
          <h1 className="text-2xl font-mono font-bold">pranav.ga</h1>
          <p>Easy to use and convenient <br></br>online tools!</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-sans font-semibold p-3 border-b border-gray-300">
          Tools
        </h1>
        <div className="flex flex-col md:flex-row p-3">
          <div className="flex flex-col justify-start rounded-xl backdrop-brightness-90 card p-2 m-2">
            <div className="flex items-center p-2">
              <TbSunset2 className="text-4xl mr-2" />
              <h1 className="font-medium">Weather</h1>
            </div>
            <p className="text-sm p-2">Simple Weather app</p>
            <a className="flex justify-center items-center bg-yellow-400 hover:bg-yellow-300 p-2 rounded-xl hover:text-gray-600 cursor-pointer w-1/2 text-gray-700" href="https://weather.pranav.ga">Try it <BsArrowRightShort /></a>
          </div>
          <div className="flex flex-col justify-start rounded-xl backdrop-brightness-90 card p-2 m-2">
            <div className="flex items-center p-2">
              <RiScissorsCutFill className="text-4xl mr-2" />
              <h1 className="font-medium">URL Shortener</h1>
            </div>
            <p className="text-sm p-2">A Temp URL Shortener</p>
            <a className="flex justify-center items-center bg-blue-400 hover:bg-blue-300 p-2 rounded-xl hover:text-gray-600 cursor-pointer w-1/2 text-gray-700" href="https://shorty.pranav.ga">Try it <BsArrowRightShort /></a>
          </div>
          <div className="flex flex-col justify-start rounded-xl backdrop-brightness-90 card p-2 m-2">
            <div className="flex items-center p-2">
              <FiDownload className="text-4xl mr-2" />
              <h1 className="font-medium">YT Downloader</h1>
            </div>
            <p className="text-sm p-2">A Youtube Video Downloader</p>
            <a className="flex justify-center items-center bg-red-500 hover:bg-red-400 p-2 rounded-xl hover:text-gray-100 cursor-pointer w-2/5 text-gray-200" href="https://yt.pranav.ga">Try it <BsArrowRightShort /></a>
          </div>
          <div className="flex flex-col justify-start rounded-xl backdrop-brightness-90 card p-2 m-2">
            <div className="flex items-center p-2">
              <BsMusicNoteBeamed className="text-3xl mr-2" />
              <h1 className="font-medium">Notify</h1>
            </div>
            <p className="text-sm p-2">A Simple Audio Player</p>
            <a className="flex justify-center items-center bg-green-400 hover:bg-green-300 p-2 rounded-xl hover:text-gray-600 cursor-pointer w-1/2 text-gray-700" href="https://notify.pranav.ga">Try it <BsArrowRightShort /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
