import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Develop from "./Develop";

const Development = () => {
    return (
        <Canvas camera={{position: [800,0,100] }}>
            <Stage environment={"city"} intensity={0.6} >
                <Develop />
            </Stage>
            <OrbitControls enableZoom={false} />

        </Canvas>
    )
};

export default Development;

/*

*/