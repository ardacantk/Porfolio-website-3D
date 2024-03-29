/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 pearlface.gltf --transform
Author: Stev_3D (https://sketchfab.com/Stev_3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/girl-with-a-pearl-earring-5898c09d78b0400b8a566f5369ef3dc0
Title: Girl with a pearl earring
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./public/img/pearlface-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene" >
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 8]} >
          <group name="918b914c20674e8c8d43a496740e5cf0fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature001" position={[2498.8, -5915.75, 1819.62]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_176">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh name="Object_179" geometry={nodes.Object_179.geometry} material={materials.Skin} skeleton={nodes.Object_179.skeleton} />
                    <skinnedMesh name="Object_181" geometry={nodes.Object_181.geometry} material={materials.Skin} skeleton={nodes.Object_181.skeleton} />
                    <skinnedMesh name="Object_183" geometry={nodes.Object_183.geometry} material={materials.Skin} skeleton={nodes.Object_183.skeleton} />
                    <skinnedMesh name="Object_185" geometry={nodes.Object_185.geometry} material={materials.Skin} skeleton={nodes.Object_185.skeleton} />
                    <skinnedMesh name="Object_187" geometry={nodes.Object_187.geometry} material={materials.Skin} skeleton={nodes.Object_187.skeleton} />
                    <skinnedMesh name="Object_189" geometry={nodes.Object_189.geometry} material={materials.Skin} skeleton={nodes.Object_189.skeleton} />
                    <skinnedMesh name="Object_191" geometry={nodes.Object_191.geometry} material={materials.Skin} skeleton={nodes.Object_191.skeleton} />
                    <skinnedMesh name="Object_193" geometry={nodes.Object_193.geometry} material={materials.Skin} skeleton={nodes.Object_193.skeleton} />
                    <skinnedMesh name="Object_195" geometry={nodes.Object_195.geometry} material={materials.Skin} skeleton={nodes.Object_195.skeleton} />
                    <skinnedMesh name="Object_197" geometry={nodes.Object_197.geometry} material={materials.Skin} skeleton={nodes.Object_197.skeleton} />
                    <skinnedMesh name="Object_199" geometry={nodes.Object_199.geometry} material={materials.Skin} skeleton={nodes.Object_199.skeleton} />
                    <skinnedMesh name="Object_201" geometry={nodes.Object_201.geometry} material={materials.Skin} skeleton={nodes.Object_201.skeleton} />
                    <skinnedMesh name="Object_203" geometry={nodes.Object_203.geometry} material={materials.Skin} skeleton={nodes.Object_203.skeleton} />
                    <skinnedMesh name="Object_205" geometry={nodes.Object_205.geometry} material={materials.Skin} skeleton={nodes.Object_205.skeleton} />
                    <skinnedMesh name="Object_207" geometry={nodes.Object_207.geometry} material={materials.Skin} skeleton={nodes.Object_207.skeleton} />
                    <skinnedMesh name="Object_209" geometry={nodes.Object_209.geometry} material={materials.Skin} skeleton={nodes.Object_209.skeleton} />
                    <skinnedMesh name="Object_211" geometry={nodes.Object_211.geometry} material={materials.Skin} skeleton={nodes.Object_211.skeleton} />
                    <skinnedMesh name="Object_213" geometry={nodes.Object_213.geometry} material={materials.Skin} skeleton={nodes.Object_213.skeleton} />
                    <skinnedMesh name="Object_215" geometry={nodes.Object_215.geometry} material={materials.Skin} skeleton={nodes.Object_215.skeleton} />
                    <skinnedMesh name="Object_217" geometry={nodes.Object_217.geometry} material={materials.Skin} skeleton={nodes.Object_217.skeleton} />
                    <skinnedMesh name="Object_219" geometry={nodes.Object_219.geometry} material={materials.Skin} skeleton={nodes.Object_219.skeleton} />
                    <skinnedMesh name="Object_221" geometry={nodes.Object_221.geometry} material={materials.Skin} skeleton={nodes.Object_221.skeleton} />
                    <skinnedMesh name="Object_223" geometry={nodes.Object_223.geometry} material={materials.Skin} skeleton={nodes.Object_223.skeleton} />
                    <skinnedMesh name="Object_225" geometry={nodes.Object_225.geometry} material={materials.BlackRubber} skeleton={nodes.Object_225.skeleton} />
                    <skinnedMesh name="Object_227" geometry={nodes.Object_227.geometry} material={materials.Skin} skeleton={nodes.Object_227.skeleton} />
                    <skinnedMesh name="Object_229" geometry={nodes.Object_229.geometry} material={materials.BlackRubber} skeleton={nodes.Object_229.skeleton} />
                    <skinnedMesh name="Object_230" geometry={nodes.Object_230.geometry} material={materials.Skin} skeleton={nodes.Object_230.skeleton} />
                    <skinnedMesh name="Object_232" geometry={nodes.Object_232.geometry} material={materials.BlackRubber} skeleton={nodes.Object_232.skeleton} />
                    <skinnedMesh name="Object_233" geometry={nodes.Object_233.geometry} material={materials.Skin} skeleton={nodes.Object_233.skeleton} />
                    <skinnedMesh name="Object_235" geometry={nodes.Object_235.geometry} material={materials.BlackRubber} skeleton={nodes.Object_235.skeleton} />
                    <skinnedMesh name="Object_236" geometry={nodes.Object_236.geometry} material={materials.Lips} skeleton={nodes.Object_236.skeleton} />
                    <skinnedMesh name="Object_237" geometry={nodes.Object_237.geometry} material={materials.Skin} skeleton={nodes.Object_237.skeleton} />
                    <skinnedMesh name="Object_239" geometry={nodes.Object_239.geometry} material={materials.BlackRubber} skeleton={nodes.Object_239.skeleton} />
                    <skinnedMesh name="Object_241" geometry={nodes.Object_241.geometry} material={materials.BlackRubber} skeleton={nodes.Object_241.skeleton} />
                    <skinnedMesh name="Object_243" geometry={nodes.Object_243.geometry} material={materials.BlueCables} skeleton={nodes.Object_243.skeleton} />
                    <skinnedMesh name="Object_245" geometry={nodes.Object_245.geometry} material={materials.BlackRubber} skeleton={nodes.Object_245.skeleton} />
                    <skinnedMesh name="Object_247" geometry={nodes.Object_247.geometry} material={materials.Skin} skeleton={nodes.Object_247.skeleton} />
                    <skinnedMesh name="Object_249" geometry={nodes.Object_249.geometry} material={materials.BlackRubber} skeleton={nodes.Object_249.skeleton} />
                    <skinnedMesh name="Object_251" geometry={nodes.Object_251.geometry} material={materials.Skin} skeleton={nodes.Object_251.skeleton} />
                    <skinnedMesh name="Object_253" geometry={nodes.Object_253.geometry} material={materials.BlackRubber} skeleton={nodes.Object_253.skeleton} />
                    <skinnedMesh name="Object_255" geometry={nodes.Object_255.geometry} material={materials.Skin} skeleton={nodes.Object_255.skeleton} />
                    <skinnedMesh name="Object_257" geometry={nodes.Object_257.geometry} material={materials.BlackRubber} skeleton={nodes.Object_257.skeleton} />
                    <skinnedMesh name="Object_259" geometry={nodes.Object_259.geometry} material={materials.Skin} skeleton={nodes.Object_259.skeleton} />
                    <skinnedMesh name="Object_261" geometry={nodes.Object_261.geometry} material={materials.BlackRubber} skeleton={nodes.Object_261.skeleton} />
                    <skinnedMesh name="Object_263" geometry={nodes.Object_263.geometry} material={materials.Skin} skeleton={nodes.Object_263.skeleton} />
                    <skinnedMesh name="Object_265" geometry={nodes.Object_265.geometry} material={materials.BlueCables} skeleton={nodes.Object_265.skeleton} />
                    <skinnedMesh name="Object_267" geometry={nodes.Object_267.geometry} material={materials.Lips} skeleton={nodes.Object_267.skeleton} />
                    <skinnedMesh name="Object_269" geometry={nodes.Object_269.geometry} material={materials.BlueCables} skeleton={nodes.Object_269.skeleton} />
                    <skinnedMesh name="Object_271" geometry={nodes.Object_271.geometry} material={materials.Lips} skeleton={nodes.Object_271.skeleton} />
                    <skinnedMesh name="Object_273" geometry={nodes.Object_273.geometry} material={materials.BlueCables} skeleton={nodes.Object_273.skeleton} />
                    <skinnedMesh name="Object_275" geometry={nodes.Object_275.geometry} material={materials.Lips} skeleton={nodes.Object_275.skeleton} />
                    <skinnedMesh name="Object_277" geometry={nodes.Object_277.geometry} material={materials.BlueCables} skeleton={nodes.Object_277.skeleton} />
                    <skinnedMesh name="Object_279" geometry={nodes.Object_279.geometry} material={materials.Lips} skeleton={nodes.Object_279.skeleton} />
                    <skinnedMesh name="Object_281" geometry={nodes.Object_281.geometry} material={materials.BlueCables} skeleton={nodes.Object_281.skeleton} />
                    <skinnedMesh name="Object_283" geometry={nodes.Object_283.geometry} material={materials.Lips} skeleton={nodes.Object_283.skeleton} />
                    <skinnedMesh name="Object_285" geometry={nodes.Object_285.geometry} material={materials.BlueCables} skeleton={nodes.Object_285.skeleton} />
                    <skinnedMesh name="Object_287" geometry={nodes.Object_287.geometry} material={materials.Lips} skeleton={nodes.Object_287.skeleton} />
                    <skinnedMesh name="Object_289" geometry={nodes.Object_289.geometry} material={materials.BlueCables} skeleton={nodes.Object_289.skeleton} />
                    <skinnedMesh name="Object_291" geometry={nodes.Object_291.geometry} material={materials.Lips} skeleton={nodes.Object_291.skeleton} />
                    <skinnedMesh name="Object_293" geometry={nodes.Object_293.geometry} material={materials.BlueCables} skeleton={nodes.Object_293.skeleton} />
                    <skinnedMesh name="Object_295" geometry={nodes.Object_295.geometry} material={materials.Lips} skeleton={nodes.Object_295.skeleton} />
                    <skinnedMesh name="Object_297" geometry={nodes.Object_297.geometry} material={materials.BlueCables} skeleton={nodes.Object_297.skeleton} />
                    <skinnedMesh name="Object_299" geometry={nodes.Object_299.geometry} material={materials.Lips} skeleton={nodes.Object_299.skeleton} />
                    <skinnedMesh name="Object_301" geometry={nodes.Object_301.geometry} material={materials.BlueCables} skeleton={nodes.Object_301.skeleton} />
                    <skinnedMesh name="Object_303" geometry={nodes.Object_303.geometry} material={materials.Lips} skeleton={nodes.Object_303.skeleton} />
                    <skinnedMesh name="Object_305" geometry={nodes.Object_305.geometry} material={materials.Metal} skeleton={nodes.Object_305.skeleton} />
                    <skinnedMesh name="Object_307" geometry={nodes.Object_307.geometry} material={materials.BlackRubber} skeleton={nodes.Object_307.skeleton} />
                    <skinnedMesh name="Object_309" geometry={nodes.Object_309.geometry} material={materials.Metal} skeleton={nodes.Object_309.skeleton} />
                    <skinnedMesh name="Object_311" geometry={nodes.Object_311.geometry} material={materials.BlackRubber} skeleton={nodes.Object_311.skeleton} />
                    <skinnedMesh name="Object_313" geometry={nodes.Object_313.geometry} material={materials.Metal} skeleton={nodes.Object_313.skeleton} />
                    <skinnedMesh name="Object_315" geometry={nodes.Object_315.geometry} material={materials.BlackRubber} skeleton={nodes.Object_315.skeleton} />
                    <skinnedMesh name="Object_317" geometry={nodes.Object_317.geometry} material={materials.Metal} skeleton={nodes.Object_317.skeleton} />
                    <skinnedMesh name="Object_319" geometry={nodes.Object_319.geometry} material={materials.BlackRubber} skeleton={nodes.Object_319.skeleton} />
                    <skinnedMesh name="Object_321" geometry={nodes.Object_321.geometry} material={materials.Metal} skeleton={nodes.Object_321.skeleton} />
                    <skinnedMesh name="Object_323" geometry={nodes.Object_323.geometry} material={materials.BlackRubber} skeleton={nodes.Object_323.skeleton} />
                    <skinnedMesh name="Object_325" geometry={nodes.Object_325.geometry} material={materials.Metal} skeleton={nodes.Object_325.skeleton} />
                    <skinnedMesh name="Object_327" geometry={nodes.Object_327.geometry} material={materials.Metal} skeleton={nodes.Object_327.skeleton} />
                    <skinnedMesh name="Object_329" geometry={nodes.Object_329.geometry} material={materials.Metal} skeleton={nodes.Object_329.skeleton} />
                    <skinnedMesh name="Object_331" geometry={nodes.Object_331.geometry} material={materials.Metal} skeleton={nodes.Object_331.skeleton} />
                    <skinnedMesh name="Object_333" geometry={nodes.Object_333.geometry} material={materials.Metal} skeleton={nodes.Object_333.skeleton} />
                    <skinnedMesh name="Object_335" geometry={nodes.Object_335.geometry} material={materials.Metal} skeleton={nodes.Object_335.skeleton} />
                    <skinnedMesh name="Object_337" geometry={nodes.Object_337.geometry} material={materials.Metal} skeleton={nodes.Object_337.skeleton} />
                    <skinnedMesh name="Object_339" geometry={nodes.Object_339.geometry} material={materials.Metal} skeleton={nodes.Object_339.skeleton} />
                    <skinnedMesh name="Object_341" geometry={nodes.Object_341.geometry} material={materials.Metal} skeleton={nodes.Object_341.skeleton} />
                    <skinnedMesh name="Object_343" geometry={nodes.Object_343.geometry} material={materials.Metal} skeleton={nodes.Object_343.skeleton} />
                    <skinnedMesh name="Object_345" geometry={nodes.Object_345.geometry} material={materials.Metal} skeleton={nodes.Object_345.skeleton} />
                    <skinnedMesh name="Object_347" geometry={nodes.Object_347.geometry} material={materials.Metal} skeleton={nodes.Object_347.skeleton} />
                    <skinnedMesh name="Object_349" geometry={nodes.Object_349.geometry} material={materials.BeigeCables} skeleton={nodes.Object_349.skeleton} />
                    <skinnedMesh name="Object_351" geometry={nodes.Object_351.geometry} material={materials.Metal} skeleton={nodes.Object_351.skeleton} />
                    <skinnedMesh name="Object_353" geometry={nodes.Object_353.geometry} material={materials.BlackRubber} skeleton={nodes.Object_353.skeleton} />
                    <skinnedMesh name="Object_355" geometry={nodes.Object_355.geometry} material={materials.BeigeCables} skeleton={nodes.Object_355.skeleton} />
                    <skinnedMesh name="Object_357" geometry={nodes.Object_357.geometry} material={materials.Metal} skeleton={nodes.Object_357.skeleton} />
                    <skinnedMesh name="Object_359" geometry={nodes.Object_359.geometry} material={materials.BlackRubber} skeleton={nodes.Object_359.skeleton} />
                    <skinnedMesh name="Object_361" geometry={nodes.Object_361.geometry} material={materials.BeigeCables} skeleton={nodes.Object_361.skeleton} />
                    <skinnedMesh name="Object_363" geometry={nodes.Object_363.geometry} material={materials.Metal} skeleton={nodes.Object_363.skeleton} />
                    <skinnedMesh name="Object_365" geometry={nodes.Object_365.geometry} material={materials.BlackRubber} skeleton={nodes.Object_365.skeleton} />
                    <skinnedMesh name="Object_367" geometry={nodes.Object_367.geometry} material={materials.BeigeCables} skeleton={nodes.Object_367.skeleton} />
                    <skinnedMesh name="Object_369" geometry={nodes.Object_369.geometry} material={materials.Metal} skeleton={nodes.Object_369.skeleton} />
                    <skinnedMesh name="Object_371" geometry={nodes.Object_371.geometry} material={materials.BlackRubber} skeleton={nodes.Object_371.skeleton} />
                    <skinnedMesh name="Object_373" geometry={nodes.Object_373.geometry} material={materials.BeigeCables} skeleton={nodes.Object_373.skeleton} />
                    <skinnedMesh name="Object_375" geometry={nodes.Object_375.geometry} material={materials.Metal} skeleton={nodes.Object_375.skeleton} />
                    <skinnedMesh name="Object_377" geometry={nodes.Object_377.geometry} material={materials.BlackRubber} skeleton={nodes.Object_377.skeleton} />
                    <skinnedMesh name="Object_379" geometry={nodes.Object_379.geometry} material={materials.BeigeCables} skeleton={nodes.Object_379.skeleton} />
                    <skinnedMesh name="Object_381" geometry={nodes.Object_381.geometry} material={materials.Metal} skeleton={nodes.Object_381.skeleton} />
                    <skinnedMesh name="Object_383" geometry={nodes.Object_383.geometry} material={materials.BlackRubber} skeleton={nodes.Object_383.skeleton} />
                    <skinnedMesh name="Object_385" geometry={nodes.Object_385.geometry} material={materials.BeigeCables} skeleton={nodes.Object_385.skeleton} />
                    <skinnedMesh name="Object_387" geometry={nodes.Object_387.geometry} material={materials.Metal} skeleton={nodes.Object_387.skeleton} />
                    <skinnedMesh name="Object_389" geometry={nodes.Object_389.geometry} material={materials.BlackRubber} skeleton={nodes.Object_389.skeleton} />
                    <skinnedMesh name="Object_391" geometry={nodes.Object_391.geometry} material={materials.BeigeCables} skeleton={nodes.Object_391.skeleton} />
                    <skinnedMesh name="Object_393" geometry={nodes.Object_393.geometry} material={materials.material} skeleton={nodes.Object_393.skeleton} />
                    <skinnedMesh name="Object_395" geometry={nodes.Object_395.geometry} material={materials.BlackRubber} skeleton={nodes.Object_395.skeleton} />
                    <skinnedMesh name="Object_397" geometry={nodes.Object_397.geometry} material={materials.BlackRubber} skeleton={nodes.Object_397.skeleton} />
                    <skinnedMesh name="Object_399" geometry={nodes.Object_399.geometry} material={materials.Skin} skeleton={nodes.Object_399.skeleton} />
                    <skinnedMesh name="Object_400" geometry={nodes.Object_400.geometry} material={materials.BlackRubber} skeleton={nodes.Object_400.skeleton} />
                    <skinnedMesh name="Object_401" geometry={nodes.Object_401.geometry} material={materials.Refraction} skeleton={nodes.Object_401.skeleton} />
                    <skinnedMesh name="Object_402" geometry={nodes.Object_402.geometry} material={materials.Emission} skeleton={nodes.Object_402.skeleton} />
                    <skinnedMesh name="Object_404" geometry={nodes.Object_404.geometry} material={materials.BlackRubber} skeleton={nodes.Object_404.skeleton} />
                    <skinnedMesh name="Object_405" geometry={nodes.Object_405.geometry} material={materials.Skin} skeleton={nodes.Object_405.skeleton} />
                    <skinnedMesh name="Object_406" geometry={nodes.Object_406.geometry} material={materials.Emission} skeleton={nodes.Object_406.skeleton} />
                    <skinnedMesh name="Object_407" geometry={nodes.Object_407.geometry} material={materials.Refraction} skeleton={nodes.Object_407.skeleton} />
                    <skinnedMesh name="Object_409" geometry={nodes.Object_409.geometry} material={materials.BlackRubber} skeleton={nodes.Object_409.skeleton} />
                    <skinnedMesh name="Object_411" geometry={nodes.Object_411.geometry} material={materials.Skin} skeleton={nodes.Object_411.skeleton} />
                    <skinnedMesh name="Object_413" geometry={nodes.Object_413.geometry} material={materials.BlueCables} skeleton={nodes.Object_413.skeleton} />
                    <skinnedMesh name="Object_415" geometry={nodes.Object_415.geometry} material={materials.BlueCables} skeleton={nodes.Object_415.skeleton} />
                    <skinnedMesh name="Object_417" geometry={nodes.Object_417.geometry} material={materials.BlueCables} skeleton={nodes.Object_417.skeleton} />
                    <skinnedMesh name="Object_419" geometry={nodes.Object_419.geometry} material={materials.BeigeCables} skeleton={nodes.Object_419.skeleton} />
                    <skinnedMesh name="Object_420" geometry={nodes.Object_420.geometry} material={materials.BlackRubber} skeleton={nodes.Object_420.skeleton} />
                    <skinnedMesh name="Object_421" geometry={nodes.Object_421.geometry} material={materials.Metal} skeleton={nodes.Object_421.skeleton} />
                    <skinnedMesh name="Object_423" geometry={nodes.Object_423.geometry} material={materials.BeigeCables} skeleton={nodes.Object_423.skeleton} />
                    <skinnedMesh name="Object_424" geometry={nodes.Object_424.geometry} material={materials.BlackRubber} skeleton={nodes.Object_424.skeleton} />
                    <skinnedMesh name="Object_425" geometry={nodes.Object_425.geometry} material={materials.Metal} skeleton={nodes.Object_425.skeleton} />
                    <skinnedMesh name="Object_427" geometry={nodes.Object_427.geometry} material={materials.BeigeCables} skeleton={nodes.Object_427.skeleton} />
                    <skinnedMesh name="Object_428" geometry={nodes.Object_428.geometry} material={materials.BlackRubber} skeleton={nodes.Object_428.skeleton} />
                    <skinnedMesh name="Object_429" geometry={nodes.Object_429.geometry} material={materials.Metal} skeleton={nodes.Object_429.skeleton} />
                    <skinnedMesh name="Object_431" geometry={nodes.Object_431.geometry} material={materials.BeigeCables} skeleton={nodes.Object_431.skeleton} />
                    <skinnedMesh name="Object_432" geometry={nodes.Object_432.geometry} material={materials.BlackRubber} skeleton={nodes.Object_432.skeleton} />
                    <skinnedMesh name="Object_433" geometry={nodes.Object_433.geometry} material={materials.Metal} skeleton={nodes.Object_433.skeleton} />
                    <skinnedMesh name="Object_435" geometry={nodes.Object_435.geometry} material={materials.BlueCables} skeleton={nodes.Object_435.skeleton} />
                    <skinnedMesh name="Object_437" geometry={nodes.Object_437.geometry} material={materials.BlueCables} skeleton={nodes.Object_437.skeleton} />
                    <skinnedMesh name="Object_439" geometry={nodes.Object_439.geometry} material={materials.BlueCables} skeleton={nodes.Object_439.skeleton} />
                    <skinnedMesh name="Object_441" geometry={nodes.Object_441.geometry} material={materials.BeigeCables} skeleton={nodes.Object_441.skeleton} />
                    <skinnedMesh name="Object_443" geometry={nodes.Object_443.geometry} material={materials.BlueCables} skeleton={nodes.Object_443.skeleton} />
                    <skinnedMesh name="Object_445" geometry={nodes.Object_445.geometry} material={materials.BlueCables} skeleton={nodes.Object_445.skeleton} />
                    <skinnedMesh name="Object_447" geometry={nodes.Object_447.geometry} material={materials.BeigeCables} skeleton={nodes.Object_447.skeleton} />
                    <skinnedMesh name="Object_449" geometry={nodes.Object_449.geometry} material={materials.BlueCables} skeleton={nodes.Object_449.skeleton} />
                    <skinnedMesh name="Object_451" geometry={nodes.Object_451.geometry} material={materials.BeigeCables} skeleton={nodes.Object_451.skeleton} />
                    <skinnedMesh name="Object_453" geometry={nodes.Object_453.geometry} material={materials.BlueCables} skeleton={nodes.Object_453.skeleton} />
                    <skinnedMesh name="Object_455" geometry={nodes.Object_455.geometry} material={materials.BlueCables} skeleton={nodes.Object_455.skeleton} />
                    <skinnedMesh name="Object_457" geometry={nodes.Object_457.geometry} material={materials.BlueCables} skeleton={nodes.Object_457.skeleton} />
                    <skinnedMesh name="Object_459" geometry={nodes.Object_459.geometry} material={materials.Pearl} skeleton={nodes.Object_459.skeleton} />
                    <skinnedMesh name="Object_460" geometry={nodes.Object_460.geometry} material={materials.Metal} skeleton={nodes.Object_460.skeleton} />
                    <skinnedMesh name="Object_461" geometry={nodes.Object_461.geometry} material={materials.Skin} skeleton={nodes.Object_461.skeleton} />
                    <skinnedMesh name="Object_463" geometry={nodes.Object_463.geometry} material={materials.BlackRubber} skeleton={nodes.Object_463.skeleton} />
                    <skinnedMesh name="Object_464" geometry={nodes.Object_464.geometry} material={materials.Skin} skeleton={nodes.Object_464.skeleton} />
                    <skinnedMesh name="Object_466" geometry={nodes.Object_466.geometry} material={materials.BlackRubber} skeleton={nodes.Object_466.skeleton} />
                    <skinnedMesh name="Object_468" geometry={nodes.Object_468.geometry} material={materials.BlackRubber} skeleton={nodes.Object_468.skeleton} />
                    <skinnedMesh name="Object_470" geometry={nodes.Object_470.geometry} material={materials.BlackRubber} skeleton={nodes.Object_470.skeleton} />
                    <skinnedMesh name="Object_472" geometry={nodes.Object_472.geometry} material={materials.Metal} skeleton={nodes.Object_472.skeleton} />
                    <skinnedMesh name="Object_474" geometry={nodes.Object_474.geometry} material={materials.BlackRubber} skeleton={nodes.Object_474.skeleton} />
                    <skinnedMesh name="Object_476" geometry={nodes.Object_476.geometry} material={materials.Metal} skeleton={nodes.Object_476.skeleton} />
                    <skinnedMesh name="Object_478" geometry={nodes.Object_478.geometry} material={materials.BlackRubber} skeleton={nodes.Object_478.skeleton} />
                    <skinnedMesh name="Object_480" geometry={nodes.Object_480.geometry} material={materials.Metal} skeleton={nodes.Object_480.skeleton} />
                    <skinnedMesh name="Object_482" geometry={nodes.Object_482.geometry} material={materials.Metal} skeleton={nodes.Object_482.skeleton} />
                    <skinnedMesh name="Object_484" geometry={nodes.Object_484.geometry} material={materials.BlackRubber} skeleton={nodes.Object_484.skeleton} />
                    <skinnedMesh name="Object_485" geometry={nodes.Object_485.geometry} material={materials.BeigeCables} skeleton={nodes.Object_485.skeleton} />
                    <skinnedMesh name="Object_487" geometry={nodes.Object_487.geometry} material={materials.BlackRubber} skeleton={nodes.Object_487.skeleton} />
                    <skinnedMesh name="Object_489" geometry={nodes.Object_489.geometry} material={materials.Metal} skeleton={nodes.Object_489.skeleton} />
                    <skinnedMesh name="Object_491" geometry={nodes.Object_491.geometry} material={materials.BlackRubber} skeleton={nodes.Object_491.skeleton} />
                    <skinnedMesh name="Object_492" geometry={nodes.Object_492.geometry} material={materials.BlueCables} skeleton={nodes.Object_492.skeleton} />
                    <skinnedMesh name="Object_494" geometry={nodes.Object_494.geometry} material={materials.Metal} skeleton={nodes.Object_494.skeleton} />
                    <skinnedMesh name="Object_496" geometry={nodes.Object_496.geometry} material={materials.Metal} skeleton={nodes.Object_496.skeleton} />
                    <skinnedMesh name="Object_498" geometry={nodes.Object_498.geometry} material={materials.BlackRubber} skeleton={nodes.Object_498.skeleton} />
                    <skinnedMesh name="Object_500" geometry={nodes.Object_500.geometry} material={materials.BeigeCables} skeleton={nodes.Object_500.skeleton} />
                    <skinnedMesh name="Object_502" geometry={nodes.Object_502.geometry} material={materials.BeigeCables} skeleton={nodes.Object_502.skeleton} />
                    <skinnedMesh name="Object_504" geometry={nodes.Object_504.geometry} material={materials.BeigeCables} skeleton={nodes.Object_504.skeleton} />
                    <skinnedMesh name="Object_506" geometry={nodes.Object_506.geometry} material={materials.BeigeCables} skeleton={nodes.Object_506.skeleton} />
                    <skinnedMesh name="Object_508" geometry={nodes.Object_508.geometry} material={materials.BeigeCables} skeleton={nodes.Object_508.skeleton} />
                    <skinnedMesh name="Object_510" geometry={nodes.Object_510.geometry} material={materials.BeigeCables} skeleton={nodes.Object_510.skeleton} />
                    <skinnedMesh name="Object_512" geometry={nodes.Object_512.geometry} material={materials.BlackRubber} skeleton={nodes.Object_512.skeleton} />
                    <skinnedMesh name="Object_514" geometry={nodes.Object_514.geometry} material={materials.Skin} skeleton={nodes.Object_514.skeleton} />
                    <skinnedMesh name="Object_516" geometry={nodes.Object_516.geometry} material={materials.BlackRubber} skeleton={nodes.Object_516.skeleton} />
                    <skinnedMesh name="Object_517" geometry={nodes.Object_517.geometry} material={materials.Emission} skeleton={nodes.Object_517.skeleton} />
                    <skinnedMesh name="Object_519" geometry={nodes.Object_519.geometry} material={materials.Emission} skeleton={nodes.Object_519.skeleton} />
                    <skinnedMesh name="Object_521" geometry={nodes.Object_521.geometry} material={materials.BlackRubber} skeleton={nodes.Object_521.skeleton} />
                    <skinnedMesh name="Object_523" geometry={nodes.Object_523.geometry} material={materials.BeigeCables} skeleton={nodes.Object_523.skeleton} />
                    <skinnedMesh name="Object_525" geometry={nodes.Object_525.geometry} material={materials.BeigeCables} skeleton={nodes.Object_525.skeleton} />
                    <skinnedMesh name="Object_527" geometry={nodes.Object_527.geometry} material={materials.Emission} skeleton={nodes.Object_527.skeleton} />
                    <skinnedMesh name="Object_528" geometry={nodes.Object_528.geometry} material={materials.Skin} skeleton={nodes.Object_528.skeleton} />
                    <skinnedMesh name="Object_530" geometry={nodes.Object_530.geometry} material={materials.Skin} skeleton={nodes.Object_530.skeleton} />
                    <skinnedMesh name="Object_531" geometry={nodes.Object_531.geometry} material={materials.Emission} skeleton={nodes.Object_531.skeleton} />
                    <skinnedMesh name="Object_533" geometry={nodes.Object_533.geometry} material={materials.BlackRubber} skeleton={nodes.Object_533.skeleton} />
                    <skinnedMesh name="Object_534" geometry={nodes.Object_534.geometry} material={materials.Skin} skeleton={nodes.Object_534.skeleton} />
                    <skinnedMesh name="Object_536" geometry={nodes.Object_536.geometry} material={materials.BlueCables} skeleton={nodes.Object_536.skeleton} />
                    <skinnedMesh name="Object_538" geometry={nodes.Object_538.geometry} material={materials.BlueCables} skeleton={nodes.Object_538.skeleton} />
                    <skinnedMesh name="Object_540" geometry={nodes.Object_540.geometry} material={materials.BlackRubber} skeleton={nodes.Object_540.skeleton} />
                    <skinnedMesh name="Object_541" geometry={nodes.Object_541.geometry} material={materials.Emission} skeleton={nodes.Object_541.skeleton} />
                    <skinnedMesh name="Object_543" geometry={nodes.Object_543.geometry} material={materials.BlueCables} skeleton={nodes.Object_543.skeleton} />
                    <skinnedMesh name="Object_544" geometry={nodes.Object_544.geometry} material={materials.Metal} skeleton={nodes.Object_544.skeleton} />
                    <skinnedMesh name="Object_545" geometry={nodes.Object_545.geometry} material={materials.BlackRubber} skeleton={nodes.Object_545.skeleton} />
                    <skinnedMesh name="Object_547" geometry={nodes.Object_547.geometry} material={materials.BlueCables} skeleton={nodes.Object_547.skeleton} />
                    <skinnedMesh name="Object_548" geometry={nodes.Object_548.geometry} material={materials.Metal} skeleton={nodes.Object_548.skeleton} />
                    <skinnedMesh name="Object_549" geometry={nodes.Object_549.geometry} material={materials.BlackRubber} skeleton={nodes.Object_549.skeleton} />
                    <skinnedMesh name="Object_551" geometry={nodes.Object_551.geometry} material={materials.Skin} skeleton={nodes.Object_551.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/pearlface-transformed.glb')
