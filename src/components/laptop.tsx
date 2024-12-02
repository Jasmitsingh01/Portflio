import { Environment, Html, PresentationControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { BsCameraReels, BsFillCameraReelsFill } from "react-icons/bs";
import { IoIosVolumeHigh, IoIosVolumeOff } from "react-icons/io";
import { Mesh } from 'three';
import { TypeAnimation } from 'react-type-animation';

function Laptop({audioRef}:{audioRef:React.RefObject<HTMLAudioElement>}) {
  const [zoom, setZoom] = useState<boolean>(false)
  const [muted, setMuted] = useState<boolean>(false)
  const meshRef=useRef<Mesh>(null)
  useFrame(()=>{
    if(meshRef.current&&zoom){
      meshRef.current.rotation.y=-Math.PI/6
    meshRef.current.scale.set(1.4,1.4,1.4)
    }
    else if(meshRef.current && !zoom){
      meshRef.current.rotation.y=0
      meshRef.current.scale.set(1,1,1)
    }
    if(audioRef.current&&muted){
      audioRef.current.pause()
    }
    else if(audioRef.current&&!muted){
      audioRef.current.play()
    }
  })

    const laptop=useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  return (
    <>
    <Environment preset="warehouse" />
{zoom ?  <primitive object={laptop.scene} position-y={-1.5} scale={2} ref={meshRef}>
        <Html wrapperClass='laptop' transform position={[0,1.57,-1.5]} rotation-x={-0.25} distanceFactor={1.15}>
            <iframe src="https://windowx11.netlify.app/" frameBorder="0"></iframe>
        </Html>
    </primitive> : <PresentationControls global polar={[-0.4,0.2]} azimuth={[-0.6,0.2]} >
    <primitive object={laptop.scene} position-y={-1.5} scale={1} ref={meshRef}>
        <Html wrapperClass='laptop' transform position={[0,1.57,-1.5]} rotation-x={-0.25} distanceFactor={1.15}>
            <iframe src="https://windowx11.netlify.app/" frameBorder="0"></iframe>
        </Html>
    </primitive>
</PresentationControls>}
<Html position={[15,2,-1.5]} >
    <div  className="fixed top-5 right-0 p-5">
    <div className="flex gap-20 justify-evenly text-4xl items-center mb-40">
   {
      zoom ? <BsCameraReels className="text-white " onClick={() => {
        
        setZoom(!zoom)
      }}/> : <BsFillCameraReelsFill className="text-white " onClick={() => setZoom(!zoom)}/>
    
   }
   {
    muted ? <IoIosVolumeHigh className="text-white " onClick={() => setMuted(!muted)}/> : <IoIosVolumeOff className="text-white " onClick={() => setMuted(!muted)}/>
   }
    </div>
    
    </div>
    </Html>

    <Html position={[5,0,-1.5]} >
    <div className="intro  flex flex-col gap-5 text-white">
          <p className="text-white text-2xl  flex flex-col   text-nowrap  items-center">
            Hello There !!👋👋
            <br />
          
            

          </p>
          <p className=' text-white text-2xl flex flex-nowrap text-nowrap items-center gap-3'>
            MY Name is 
          <span  >
              <TypeAnimation sequence={["Jasmit Singh", 1000]} speed={6} repeat={Infinity} style={{
                color:'skyblue'
              }} />
            </span>
          </p>
          <p className="text-white text-2xl flex text-nowrap flex-nowrap  gap-3 items-center">
          I am a 
          <span className="text-sky-400" >
            <TypeAnimation sequence={["Full Stack Developer", 1000," UI/UX Designer🎨", 1000, "Freelancer💼", 1000]} speed={6} repeat={Infinity} />
          </span>
    

          </p>
        </div> 
   </Html>
   </>
  )
}

export default Laptop
