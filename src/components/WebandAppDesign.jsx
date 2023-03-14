import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { MeshStandardMaterial } from "three";
import Web from "./Web";

const WebandAppDesign = () => {
    return (
        <Canvas>
            <mesh >
                <Stage environment={"city"} intensity={0.6}>

                    <Web />
                    
                </Stage>
                <OrbitControls enableZoom={false} />
            </mesh>

        </Canvas>
    )
};

export default WebandAppDesign;

/**
             
 
 */