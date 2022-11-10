import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.01} />
    </>
  );
};


export default function Earth () {
    return(
    <div className="earthCon">
        <Canvas shadows dpr={[1,2]} camera = {{ position: [0,0,4], fov: 50}}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
            <pointLight position={[-10, -10, -10]} />
            <Environment preset="city" />
            <Model />
            <OrbitControls />
        </Canvas>
    </div>
    )
}
