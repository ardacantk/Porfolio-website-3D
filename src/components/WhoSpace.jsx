import React, { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Space from "./Space"



const WhoSpace = () => {

    return (
        <Canvas>
            <Stage environment={"city"} intensity={0.6}>
                <Space />
            </Stage>
            <PerspectiveCamera
                makeDefault
                position={[-0.4, 0.9, 1.8]}
                fov = {60}
                zoom = {1.5}
            />
            <OrbitControls enableZoom = {false} />
        </Canvas>
    )
}

export default WhoSpace;



