import { FaPowerOff } from "react-icons/fa6";
import { useRef } from "react";
import Room from "./components/Room";

function App() {
  const audioRef=useRef<HTMLAudioElement>(null)

  window.addEventListener('scroll', (e) => {
    e.preventDefault()
  })


  return (
    <>
      <div className="min-h-screen overflow-hidden w-full flex gap-[300px] flex-col justify-center animated-background bg-radical-gradient items-center">
        <img src="/logo.png" alt="logo" className="w-28 fixed top-5 left-0"/>
        
        

        <a href="#model-area" onClick={() =>{ audioRef.current?.play()}}>
          <button className="relative border-2 p-4 rounded-full">
            <span className="animate-ping absolute top-0 left-0 h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <FaPowerOff className="text-white text-5xl"/>
          </button>
        </a>
        
        <p className="text-white word">
          Press button To Start
        </p>
      </div>

      <div id="model-area" className="h-screen w-full animated-background bg-radical-gradient">
        <Room audioRef={audioRef} />
      </div>
      <audio src="/audio/room-.mp3" ref={audioRef} loop></audio>
    </>
  )
}

export default App
