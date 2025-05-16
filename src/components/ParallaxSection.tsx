"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
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

  // useEffect(() => {
  //   const el = sectionRef.current;
  //   if (!el) return;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: el,
  //       start: "top top",
  //       end: "+=3500",
  //       // scrub: true,
  //       // pin: true,
  //       // pinSpacing: true,
  //       markers: true,
  //       // invalidateOnRefresh: true,
  //       // onEnter: () => {
  //       //   console.log("onEnter");
  //       //   setIsSection(1);
  //       // },
  //       // onLeaveBack: () => {
  //       //   console.log("onLeaveBack");
  //       //   setIsSection(0);
  //       // },
  //     },
  //   });

  //   // 설명 애니메이션
  //   // tl.fromTo(
  //   //   description.current,
  //   //   {
  //   //     opacity: 0,
  //   //     yPercent: 100,
  //   //   },
  //   //   {
  //   //     opacity: 1,
  //   //     yPercent: 0,
  //   //     duration: 0.5,
  //   //     scrollTrigger: {
  //   //       trigger: container.current,
  //   //       start: "top center",
  //   //       end: "center top",
  //   //       toggleActions: "play none none reset",
  //   //     },
  //   //   }
  //   // );

  //   // K - Value 애니메이션
  //   tl.fromTo(
  //     subtitle1.current,
  //     {
  //       opacity: 0,
  //       yPercent: 160,
  //     },
  //     {
  //       opacity: 1,
  //       yPercent: 0,
  //       duration: 0.5,
  //       scrollTrigger: {
  //         trigger: container.current,
  //         start: "60% top",
  //         end: "60% top",
  //         toggleActions: "play none none reset",
  //         // markers: true,
  //       },
  //     }
  //   );

  //   // K - Style 애니메이션
  //   tl.fromTo(
  //     subtitle2.current,
  //     {
  //       opacity: 0,
  //       yPercent: 50,
  //     },
  //     {
  //       opacity: 1,
  //       yPercent: 0,
  //       duration: 0.5,
  //       scrollTrigger: {
  //         trigger: container.current,
  //         start: "100% top",
  //         end: "100% top",
  //         toggleActions: "play none none reset",
  //       },
  //     }
  //   );

  //   // K - Knowledge 애니메이션
  //   tl.fromTo(
  //     subtitle3.current,
  //     {
  //       opacity: 0,
  //       yPercent: 50,
  //     },
  //     {
  //       opacity: 1,
  //       yPercent: 0,
  //       duration: 0.5,
  //       scrollTrigger: {
  //         trigger: container.current,
  //         start: "200% top",
  //         end: "230% top",
  //         toggleActions: "play none none reset",
  //       },
  //     }
  //   );

  //   // 이미지 애니메이션
  //   const imageTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container.current,
  //       start: "top center",
  //       end: "center center",
  //     },
  //   });

  //   imageTl
  //     .fromTo(
  //       ".image-obj-0, .image-obj-1, .image-obj-2, .image-obj-3",
  //       { opacity: 0, y: 20 },
  //       { opacity: 1, y: 0, duration: 2.4, ease: "power3.inOut" }
  //     )
  //     .fromTo(".text-obj-0", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 2, ease: "power3.inOut" }, "-=1.6")
  //     .fromTo(".text-obj-1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 2, ease: "power3.inOut" }, "-=1.6")
  //     .fromTo(".text-obj-2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 2, ease: "power3.inOut" }, "-=1.6")
  //     .fromTo(".text-obj-3", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 2, ease: "power3.inOut" }, "-=1.6")
  //     .fromTo(".text-obj-4", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 2, ease: "power3.inOut" }, "-=1.6");
  // }, []);

  const imagePaths = [
    { src: "/images/k-value1.png", width: 206, height: 308, direction: "top-[10.875rem] left-[6.375rem] z-10" },
    { src: "/images/k-value2.png", width: 255, height: 339, direction: "top-[23.313rem] left-[14.875rem]" },
    { src: "/images/k-value3.png", width: 241, height: 343, direction: "top-[35.375rem] left-[-8.625rem]" },
    { src: "/images/k-value4.png", width: 599, height: 425, direction: "top-[38.563rem] left-[7.65rem] " },
    { src: "/images/k-value5.png", width: 131, height: 209, direction: "bottom-[12.438rem] left-[27rem] " },
    { src: "/images/k-value6.png", width: 219, height: 282, direction: "top-[13.438rem] right-[9.125rem] " },
    { src: "/images/k-value7.png", width: 235, height: 383, direction: "top-[22.25rem] right-[20.125rem] " },
    { src: "/images/k-value8.png", width: 137, height: 218, direction: "bottom-[18.563rem] right-[16.875rem] " },
    { src: "/images/k-value9.png", width: 289, height: 362, direction: "bottom-[7rem] right-[-7.438rem] " },
  ];
  // const textPath = [
  //   { text: "문화", direction: "top-[43%] left-[29%]" },
  //   { text: "윤리", direction: "bottom-[27%] left-[11%]" },
  //   { text: "제도", direction: "!bg-black bottom-[18%] left-[23%]" },
  //   { text: "가치관", direction: "bottom-[9%] right-[12%]" },
  //   { text: "역사", direction: "bottom-[29%] right-[7%]" },
  // ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "+=3500",
        pin: true,
        pinSpacing: true,
        // scrub: 2,
      },
    });

    tl.fromTo(
      ".image-obj-0, .image-obj-1, .image-obj-2, .image-obj-3, .image-obj-4, .image-obj-5, .image-obj-6, .image-obj-7, .image-obj-8, .image-obj-9",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "center center",
        },
      }
    );

    tl.fromTo(
      subtitle1.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "70% 30%",
          end: "center 30%",
          scrub: true,
        },
      }
    )
      .fromTo(
        subtitle2.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "150% 30%",
            end: "center 30%",
            scrub: true,
          },
        }
      )
      .fromTo(
        subtitle3.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "230% 30%",
            end: "center 30%",
            scrub: true,
          },
        }
      );
  }, []);

  return (
    <div ref={sectionRef} className={`relative w-full h-screen bg-white overflow-hidden`}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-14">
        <div ref={container} className="w-full h-full flex flex-col items-center justify-center gap-6">
          <ul className="flex flex-col items-center gap-5 relative">
            <li ref={subtitle1} className="transition-all duration-1000 text-main-168 font-bold tracking-triple">
              K-Value
            </li>
            <li
              ref={subtitle2}
              className="transition-all duration-1000 absolute -top-24 -left-32 text-main-100 text-[#9e9ea6] font-bold tracking-triple"
            >
              K-Style
            </li>
            <li
              ref={subtitle3}
              className="transition-all duration-1000 absolute -top-44 -right-60 text-main-82 text-[#e6e6e6] font-bold tracking-triple"
            >
              K-Knowledge
            </li>
          </ul>
          <p
            ref={description}
            className="text-main-28 font-medium text-center leading-line-16 tracking-double transition-all duration-1000"
          >
            한국어와 한국적 정서를 가장 잘 이해하고,
            <br />
            한국의 사회, 문화, 역사 나아가 국가관을 담고
            <br />
            한국의 제도와 규제에 맞게 안전한 환경에서 사용할 수 있는 AI
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
          {/* <ul>
            {textPath.map((text, index) => (
              <li
                key={index}
                className={`text-obj-${index} absolute ${text.direction} text-main-32 font-bold leading-line-15 tracking-double text-white bg-gray-200 flex items-center justify-center px-7 py-2 rounded-full`}
              >
                <span>{text.text}</span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
