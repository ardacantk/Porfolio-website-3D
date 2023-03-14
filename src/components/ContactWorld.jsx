import React, { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import World from "./World"



const contactWorld = () => {

    return (
        <Canvas>
            <Stage environment={"city"} intensity={0.6}>
                <World />
            </Stage>
            <PerspectiveCamera
                makeDefault
                position={[500, 0.9, 1.8]}
                fov = {60}
                zoom = {0.35}
            />
            <OrbitControls enableZoom = {false} />
        </Canvas>
    )
}

export default contactWorld;



