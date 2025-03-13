import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export interface LogoProps {
  position: [number, number, number];
  rate: number;
  logo: string;
}

export const LogosAnimated: React.FC<LogoProps> = (props) => {
  const { position, rate, logo } = props;
  const ref = useRef<THREE.Group>(null); // Specify the type of ref
  const [visible, setVisible] = useState(false);
  const texture = useLoader(THREE.TextureLoader, logo);

  const handleClick = () => {
    const mesh = ref.current;

    if (mesh) {
      gsap.to(mesh.rotation, {
        x: `+=${gsap.utils.random(0, 2)}`,
        y: `+=${gsap.utils.random(0, 2)}`,
        z: `+=${gsap.utils.random(0, 2)}`,
        duration: 1.3,
        ease: "elastic.out(1, 0.3)",
        yoyo: true,
      });
    }
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      setVisible(true);
      const mesh = ref.current;

      if (mesh) {
        gsap.from(mesh.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: gsap.utils.random(0.8, 1.2),
          ease: "elastic.out(1,0.3)",
          delay: gsap.utils.random(0, 0.5),
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={ref}>
      <Float
        speed={5 * rate}
        rotationIntensity={6 * rate}
        floatIntensity={5 * rate}
      >
        <mesh
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
        >
          <planeGeometry args={[1.5, 1.5]} />

          <meshStandardMaterial map={texture} transparent />
        </mesh>
      </Float>
    </group>
  );
};
