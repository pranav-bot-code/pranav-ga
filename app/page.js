import { TbSunset2 } from "react-icons/tb";
import { RiScissorsCutFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { BsMusicNoteBeamed, BsArrowRightShort, BsQrCode } from "react-icons/bs";
import { PiPuzzlePiece } from "react-icons/pi";

export default function Home() {
  return (
    <div className="bg-cover bg-[url('/background-2.webp')] bg-black text-gray-300 w-full min-h-screen overflow-x-hidden">
      <div className="sticky backdrop-blur-3xl flex flex-col md:flex-row items-center justify-between">
        <h1 className="font-bold font-mono text-4xl p-3">prnvkk.me</h1>
        <div className="hidden md:flex items-center p-3 font-sans font-semibold">
          <a
            href="https://weather.prnvkk.me"
            className="px-2 hover:text-blue-600"
          >
            Wether
          </a>
          <a
            href="https://s.prnvkk.me"
            className="px-2 hover:text-blue-600"
          >
            URL Shortener
          </a>
          <a href="https://yt.prnvkk.me" className="px-2 hover:text-blue-600">
            YT Downloader
          </a>
          <a
            href="https://notify.prnvkk.me"
            className="px-2 hover:text-blue-600"
          >
            Notify
          </a>
          <a
            href="https://notify.prnvkk.me"
            className="px-2 hover:text-blue-600"
          >
            Shortener Addon
          </a>
          <a href="https://upi.prnvkk.me" className="px-2 hover:text-blue-600">
            UPI QR Maker
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* <div className="p-5 m-10 items-center flex-col backdrop-blur-3xl backdrop-brightness-150 rounded-lg flex">
          <h1 className="text-2xl font-mono font-bold">prnvkk.me</h1>
          <p>Easy to use and convenient <br></br>online tools!</p>
        </div> */}
        <div className="flex flex-col p-10 m-8 items-center justify-center">
          {/* <h1 className="text-4xl font-mono p-2 font-boldx">prnvkk<span className="text-red-500">.</span>me</h1> */}
          <h2 className="font-sans text-3xl"><span className="">Convenient</span> and <span className="">Easy</span> to use tools</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center backdrop-blur-md">
        {/* <h1 className="text-2xl font-sans font-semibold p-3 border-b border-gray-300">
          Tools
        </h1> */}
        <div className="flex flex-col md:grid md:grid-cols-3 p-3">
          <div className="flex flex-col justify-start rounded-xl backdrop-brightness-75 card p-2 m-2">
            <div className="flex items-center p-2">
              <TbSunset2 className="text-4xl mr-2" />
              <h1 className="font-medium">Wether</h1>
            </div>
            <p className="text-sm p-2">Simple Weather app</p>
            <a className="flex justify-center items-center bg-yellow-400 hover:bg-yellow-300 p-2 rounded-xl hover:text-gray-600 cursor-pointer w-1/2 text-gray-700" href="https://weather.prnvkk.me">Try it <BsArrowRightShort /></a>
          </div>
          <div className="flex flex-col justify-start rounded-xl backdrop-brightness-75 card p-2 m-2">
            <div className="flex items-center p-2">
              <RiScissorsCutFill className="text-4xl mr-2" />
              <h1 className="font-medium">URL Shortener</h1>
            </div>
            <p className="text-sm p-2">A Temp URL Shortener</p>
            <a className="flex justify-center items-center bg-blue-400 hover:bg-blue-300 p-2 rounded-xl cursor-pointer w-1/2 text-black" href="https://shorty.prnvkk.me">Try it <BsArrowRightShort /></a>
          </div>
          <div className="flex flex-col justify-start rounded-xl backdrop-brightness-75 card p-2 m-2">
            <div className="flex items-center p-2">
              <FiDownload className="text-4xl mr-2" />
              <h1 className="font-medium">YT Downloader</h1>
            </div>
            <p className="text-sm p-2">A Youtube Video Downloader</p>
            <a className="flex justify-center items-center bg-red-500 hover:bg-red-400 p-2 rounded-xl cursor-pointer w-2/5 text-black" href="https://yt.prnvkk.me">Try it <BsArrowRightShort /></a>
          </div>
          <div className="flex flex-col justify-start rounded-xl backdrop-brightness-75 card p-2 m-2">
            <div className="flex items-center p-2">
              <BsMusicNoteBeamed className="text-3xl mr-2" />
              <h1 className="font-medium">Notify</h1>
            </div>
            <p className="text-sm p-2">A Simple Audio Player</p>
            <a className="flex justify-center items-center bg-green-400 hover:bg-green-300 p-2 rounded-xl hover:text-gray-600 cursor-pointer w-1/2 text-gray-700" href="https://notify.prnvkk.me">Try it <BsArrowRightShort /></a>
          </div>
          <div className="flex flex-col justify-start rounded-xl backdrop-brightness-75 card p-2 m-2">
            <div className="flex items-center p-2">
              <PiPuzzlePiece className="text-3xl mr-2" />
              <h1 className="font-medium">URL Shortener Addon</h1>
            </div>
            <p className="text-sm p-2">A Simple URL Shortener addon for Firefox</p>
            <a className="flex justify-center items-center bg-blue-400 hover:bg-blue-300 p-2 rounded-xl hover:text-gray-800 cursor-pointer w-1/2 text-gray-900" href="https://addons.mozilla.org/en-GB/firefox/addon/temp-url-shortener/">Try it <BsArrowRightShort /></a>
          </div>
          <div className="flex flex-col justify-start rounded-xl backdrop-brightness-75 card p-2 m-2">
            <div className="flex items-center p-2">
              <BsQrCode className="text-3xl mr-2" />
              <h1 className="font-medium">UPI QR Generator</h1>
            </div>
            <p className="text-sm p-2">A Custom QR Generator for your UPI ID</p>
            <a className="flex justify-center items-center bg-orange-400 hover:bg-orange-300 p-2 rounded-xl hover:text-gray-600 cursor-pointer w-1/2 text-gray-700" href="https://upi.prnvkk.me">Try it <BsArrowRightShort /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
