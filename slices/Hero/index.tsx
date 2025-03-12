"use client";

import { useEffect, useRef } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { Container } from "@/components";
import { LogoCanvas } from "./_components";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: React.FC<HeroProps> = ({ slice }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".text-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1, 0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: { each: 0.1, from: "random" },
        },
      );

      tl.fromTo(
        ".tag-line",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
          duration: 1,
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const renderLetters = (text: KeyTextField, key: string) => {
    if (!text) return;

    return text.split("").map((letter, index) => (
      <span
        key={index}
        className={`text-animation text-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={ref}
      className="h-dvh"
    >
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <LogoCanvas />

        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,12vmin,20rem)] leading-none font-extrabold tracking-tighter"
            aria-label={`${slice.primary.firstname} ${slice.primary.middelname} ${slice.primary.lastname}`}
          >
            <span className="inline-flex gap-2 whitespace-nowrap">
              <span>{renderLetters(slice.primary.firstname, "first")}</span>
              <span>{renderLetters(slice.primary.middelname, "middle")}</span>
            </span>
            <span className="-mt-[.2em] block whitespace-nowrap text-[var(--primary)]">
              {renderLetters(slice.primary.lastname, "last")}
            </span>
          </h1>

          <span className="tag-line block bg-gradient-to-tr from-[var(--secondary)] via-[var(--accent)] to-[var(--secondary)] bg-clip-text text-2xl font-bold tracking-[.2em] text-transparent uppercase md:text-4xl">
            {slice.primary.tag_line}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
