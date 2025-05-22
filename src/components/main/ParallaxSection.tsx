"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const ParallaxSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const subtitle1 = useRef<HTMLLIElement>(null);
  const subtitle2 = useRef<HTMLLIElement>(null);
  const subtitle3 = useRef<HTMLLIElement>(null);
  const description = useRef<HTMLParagraphElement>(null);

  const imagePaths = [
    {
      src: "/images/k-value1.png",
      width: 206,
      height: 308,
      direction: "w-[12.875rem] h-[19.25rem] top-[3.688rem] -left-[1.125rem] z-10",
    },
    {
      src: "/images/k-value2.png",
      width: 300,
      height: 398,
      direction: "w-[18.75rem] h-[24.875rem] top-[10.563rem] left-[6.813rem]",
    },
    {
      src: "/images/k-value3.png",
      width: 239,
      height: 260,
      direction: "w-[14.938rem] h-[16.25rem] bottom-[7.625rem] left-[-1.625rem]",
    },
    {
      src: "/images/k-value4.png",
      width: 158,
      height: 174,
      direction: "w-[9.875rem] h-[10.875rem] bottom-[16.063rem] left-[10rem] ",
    },
    {
      src: "/images/k-value6.png",
      width: 198,
      height: 239,
      direction: "w-[12.375rem] h-[14.938rem] top-[11rem] right-[-2.606rem] ",
    },
    {
      src: "/images/k-value7.png",
      width: 271,
      height: 320,
      direction: "w-[16.938rem] h-[19.375rem] top-[20.188rem] right-[7.25rem] z-[-1]",
    },
    {
      src: "/images/k-value8.png",
      width: 290,
      height: 362,
      direction: "w-[18.125rem] h-[22.625rem] top-[37.438rem] right-[-7.938rem] ",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 20%",
        end: "bottom top",
        // pin: true,
        // pinSpacing: true,
        // scrub: 2,
      },
    });

    tl.fromTo(
      subtitle3.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      },
      "-=0.4",
    )
      .fromTo(
        subtitle2.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.4",
      )
      .fromTo(
        subtitle1.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.4",
      )
      .fromTo(
        ".image-obj-1",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "<",
      )
      .fromTo(
        ".image-obj-5",
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "<",
      )
      .fromTo(
        ".image-obj-0",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.4",
      )
      .fromTo(
        ".image-obj-3",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.4",
      )
      .fromTo(
        ".image-obj-6",
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "<",
      )
      .fromTo(
        ".image-obj-4",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.4",
      )
      .fromTo(
        description.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "<",
      )
      .fromTo(
        ".image-obj-2",
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.4",
      );
  }, []);

  return (
    <div ref={sectionRef} className={`w-full h-screen`}>
      <div className="relative max-w-[1920px] mx-auto w-full h-full overflow-hidden flex flex-col items-center justify-center gap-14">
        <div
          ref={container}
          className="w-full h-full flex flex-col items-center justify-center gap-8"
        >
          <ul className="flex flex-col items-center relative">
            <li ref={subtitle3} className="text-main-50 text-[#e3e3e3] font-bold tracking-triple">
              K-Knowledge
            </li>
            <li ref={subtitle2} className="text-main-134 text-[#aaaaaa] font-extrabold -mb-6">
              K-Style
            </li>
            <li ref={subtitle1} className="text-main-170 font-bold tracking-default">
              K-Value
            </li>
          </ul>
          <p
            ref={description}
            className="text-main-30 font-bold text-center leading-line-172 tracking-triple"
          >
            우리 정서를 가장 잘 이해하고 한국 사회의 문화와 역사를 반영하며
            <br />
            제도와 규제를 준수하는 안전하고 신뢰할 수 있는 <strong>K inelligence</strong>
          </p>
        </div>
        {/* fade-in 이미지 */}
        <div className="absolute top-0 left-0 w-full h-screen">
          <div>
            {imagePaths.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt="fade-in"
                width={image.width}
                height={image.height}
                className={`image-obj-${index} absolute ${image.direction} object-cover`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
