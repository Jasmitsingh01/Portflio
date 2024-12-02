import { Canvas } from "@react-three/fiber"
import Laptop from "./laptop"


function Room({audioRef}:{audioRef:React.RefObject<HTMLAudioElement>}) {

  return (
    <>
      <Canvas camera={{
        fov: 45,
        near: 0.1,  
        far: 2000,
        position: [-3, 1.5, 4]
      }}>
       <Laptop audioRef={audioRef} />
    
      </Canvas>
    </>
    
  )
}

export default Room
