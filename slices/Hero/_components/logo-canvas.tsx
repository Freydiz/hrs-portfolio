import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import { Logos } from "./logos";

export const LogoCanvas: React.FC = () => {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 20], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Logos />

          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />

          <Environment preset="lobby" />
        </Suspense>
      </Canvas>
    </div>
  );
};
