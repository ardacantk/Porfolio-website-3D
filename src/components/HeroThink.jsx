import React, { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Think from "./Think"



const HeroThink = () => {

    return (
        <Canvas>
            <Stage environment={"city"} intensity={0.6}>
                <Think />
            </Stage>
            <PerspectiveCamera
                makeDefault
                position={[-1, -1, 1.8]}
                fov = {60}
                zoom = {0.9}
            />
            <OrbitControls enableZoom = {false} />
        </Canvas>
    )
}

export default HeroThink;



