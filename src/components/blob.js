import { Canvas, useFrame } from "@react-three/fiber";
import {
  GradientTexture,
  Html,
  MeshDistortMaterial,
  MeshRefractionMaterial,
  Sphere,
  Text,
} from "@react-three/drei";
import React, { useRef } from "react";

import Metropolis from "../fonts/Metropolis-Semibold.otf";

export default function Blob3D({ children }) {
  const ref = useRef();

  return (
    <Canvas
      style={{
        height: "660px",
        overflow: "visible",
        width: "100vw",
        margin: "0 auto",
      }}
    >
      <mesh
        visible // object gets render if true
        userData={{ test: "hello" }} // An object that can be used to store custom data about the Object3d
        position={[3, 3, 0]} // The position on the canvas of the object [x,y,x]
        rotation={[0, 0, 0]} // The rotation of the object
        castShadow // Sets whether or not the object cats a shadow
        // There are many more props.....
      />
      {/*An ambient light that creates a soft light against the object */}
      <ambientLight intensity={1} />
      {/* <hemisphereLight args={["#fff", "#fff", 1]} /> */}
      {/*An directional light which aims form the given position */}
      <directionalLight position={[3, 10, 0]} intensity={1} />
      {/*An point light, basically the same as directional. This one points from under */}
      {/* <pointLight position={[3, 10, 0]} intensity={1} /> */}
      {/* This sphere has a distort material attached to it */}
      <Sphere position={[4, -1, 0]} args={[1, 4, 400]} scale={1.8}>
        <MeshDistortMaterial
          attach="material"
          distort={0.5} // Strength, 0 disables the effect (default=1)
          speed={1} // Speed (default=1)
          roughness={0}
          color="beige"
        >
          {/* <MeshRefractionMaterial /> */}
          {/* <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={["yellow", "mediumSpringGreen"]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
            opacity={0.5}
          /> */}
        </MeshDistortMaterial>
      </Sphere>
      {/* <Text
        scale={[2.8, 2.8, 2.8]}
        color="black" // default
        anchorX="right" // default
        anchorY="middle" // default
        maxWidth={2.12}
        lineHeight={1.5}
        font={Metropolis}
      >
        Hey! I'm Diana, a UX designer with frontend superpowers. I love
        brainstorming ideas and bringing them to life.
      </Text> */}
    </Canvas>
  );
}
