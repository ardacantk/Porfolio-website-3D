import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Arm from "./Arm"

const Engineering = () => {
    return (
        <Canvas camera={{position: [800,0,100] }}>
            <Stage environment={"city"} intensity={0.6}>
                <Arm/>
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
};

export default Engineering;

/**
            

 */