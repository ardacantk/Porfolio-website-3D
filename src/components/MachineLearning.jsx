import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Pearlface from "./Pearlface"

const MachineLearning = () => {
    
    return (
        <Canvas>
            <Stage environment={"city"} intensity={0.6}>
                <Pearlface/>
            </Stage>
            <PerspectiveCamera
                makeDefault
                position={[-20, 0.9, 1.8]}
                fov = {60}
                zoom = {0.50}
            />
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
};

export default MachineLearning;
