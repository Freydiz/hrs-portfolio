import { LogoProps, LogosAnimated } from "./logos-animated";

export const Logos: React.FC = () => {
  const logos: LogoProps[] = [
    {
      position: [0, 0, 0],
      rate: 0.5,
      logo: "/logos/javascript.png",
    },
    {
      position: [1, -0.75, 4],
      rate: 0.4,
      logo: "/logos/react.png",
    },
    {
      position: [-1.4, 2, -4],
      rate: 0.6,
      logo: "/logos/typescript.png",
    },
    {
      position: [-0.8, -0.75, 5],
      rate: 0.5,
      logo: "/logos/tailwind.png",
    },
    {
      position: [1.6, 1.6, -4],
      rate: 0.7,
      logo: "/logos/next-logo.png",
    },
  ];

  return logos.map(({ position, rate, logo }) => (
    <LogosAnimated
      key={logo}
      position={position.map((p) => p * 2) as [number, number, number]}
      logo={logo}
      rate={rate}
    />
  ));
};
