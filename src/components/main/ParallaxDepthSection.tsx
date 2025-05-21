"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
// import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import AccordionMenu from "./ui/AccordionMenu";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ParallaxDepthSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const accordionMenu = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<number>(0);

  const menuItems = [
    {
      title: "K on Suite",
      content: "저작권을 확보한 고품질의 신뢰 가능한 한국어 데이터",
      description: "국립국어원, 공공데이터, 민족문화연구원, 한국학중앙연구원, 교육기관 등",
    },
    {
      title: "K on SPC",
      content: "K-Data를 학습하여 한국의 정체성을 담은 모델",
    },
    {
      title: "K on STUDIO",
      content:
        "다양한 타입의 비정형 문서를 AI가 이해할 수 있는\n 형태로 변환하는 데이터 처리 및 검색 기술",
    },
    {
      title: "K on Data",
      content: "고객의 상황을 이해하고 판단하여 스스로 결정하는 에이전트",
    },
    {
      title: "K on Model",
      content: "책임있는 AI를 실현하기 위한 RAI 프레임워크",
    },
    {
      title: "K on RAG",
      content: "AI 특화 고객 맞춤형 보안 강화 클라우드 플랫폼",
    },
    {
      title: "K on Agent",
      content: "AI 특화 고객 맞춤형 보안 강화 클라우드 플랫폼",
    },
    {
      title: "K on RAI",
      content: "AI 특화 고객 맞춤형 보안 강화 클라우드 플랫폼",
    },
  ];

  const imagePaths = [
    { src: "/images/k-ai-cube01.svg", width: 1127, height: 1071, direction: "bottom-0 right-0" },
    {
      src: "/images/k-ai-cube02.svg",
      width: 833,
      height: 506,
      direction: "bottom-[5.813rem] right-[9rem]",
    },
    {
      src: "/images/k-ai-cube03.svg",
      width: 616,
      height: 693,
      direction: "bottom-[11.813rem] right-[15.75rem]",
    },
    {
      src: "/images/k-ai-cube04.svg",
      width: 428,
      height: 389,
      direction: "bottom-[19rem] right-[21.688rem]",
    },
    {
      src: "/images/k-ai-cube05.svg",
      width: 265,
      height: 225,
      direction: "bottom-[33.188rem] right-[31.25rem]",
    },
    {
      src: "/images/k-ai-cube06.svg",
      width: 265,
      height: 226,
      direction: "bottom-[30.438rem] right-[26.813rem]",
    },
    {
      src: "/images/k-ai-cube07.svg",
      width: 265,
      height: 226,
      direction: "bottom-[27.563rem] right-[22.25rem]",
    },
    {
      src: "/images/k-ai-cube08.svg",
      width: 171,
      height: 312,
      direction: "bottom-[23rem] right-[3.25rem]",
    },
  ];

  const menuPosition = useMemo(() => {
    const style = [
      "translate-y-0",
      "translate-y-[-13rem]",
      "translate-y-[-25rem]",
      "translate-y-[-38rem]",
      "translate-y-[-50rem]",
      "translate-y-[-64rem]",
      "translate-y-[-76rem]",
      "translate-y-[-88rem]",
    ];
    return style[activeItem];
  }, [activeItem]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "+=16000",
        scrub: true,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    // 왼쪽 컨텐츠 애니메이션
    const leftTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "bottom center",
      },
    });
    leftTl
      .from(title.current, {
        opacity: 0,
        y: 100,
        duration: 0.5,
      })
      .from(accordionMenu.current, {
        opacity: 0,
        y: 100,
        duration: 0.5,
      });

    // 큐브 컨텐츠 애니메이션
    tl.fromTo(
      ".cube-object-1",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "+=1500",
          scrub: true,
          onEnter: () => {
            setActiveItem(0);
          },
        },
      },
    )
      .fromTo(
        ".cube-object-2",
        {
          opacity: 0,
          yPercent: -300,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "+=2000",
            end: "+=1500",
            scrub: true,
            onLeave: () => {
              setActiveItem(1);
            },
            onEnterBack: () => {
              setActiveItem(0);
            },
          },
        },
      )
      .fromTo(
        ".cube-object-3",
        {
          opacity: 0,
          yPercent: -300,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "+=4000",
            end: "+=1500",
            scrub: true,
            onLeave: () => {
              setActiveItem(2);
            },
            onEnterBack: () => {
              setActiveItem(1);
            },
          },
        },
      )
      .fromTo(
        ".cube-object-4",
        {
          opacity: 0,
          yPercent: -300,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "+=6000",
            end: "+=1500",
            scrub: true,
            onLeave: () => {
              setActiveItem(3);
            },
            onEnterBack: () => {
              setActiveItem(2);
            },
          },
        },
      )
      .fromTo(
        ".cube-object-5",
        {
          opacity: 0,
          yPercent: -300,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "+=8000",
            end: "+=1500",
            scrub: true,
            onLeave: () => {
              setActiveItem(4);
            },
            onEnterBack: () => {
              setActiveItem(3);
            },
          },
        },
      )
      .fromTo(
        ".cube-object-6",
        {
          opacity: 0,
          yPercent: -300,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "+=10000",
            end: "+=1500",
            scrub: true,
            onLeave: () => {
              setActiveItem(5);
            },
            onEnterBack: () => {
              setActiveItem(4);
            },
          },
        },
      )
      .fromTo(
        ".cube-object-7",
        {
          opacity: 0,
          yPercent: -300,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "+=12000",
            end: "+=1500",
            scrub: true,
            onLeave: () => {
              setActiveItem(6);
            },
            onEnterBack: () => {
              setActiveItem(5);
            },
          },
        },
      )
      .fromTo(
        ".cube-object-8",
        {
          opacity: 0,
          yPercent: -300,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "+=14000",
            end: "+=1500",
            scrub: true,
            onLeave: () => {
              setActiveItem(7);
            },
            onEnterBack: () => {
              setActiveItem(6);
            },
          },
        },
      );

    // K on RAI 컨텐츠 애니메이션
    gsap.fromTo(
      ".cube-object-8",
      {
        yPercent: 0,
      },
      {
        yPercent: -20,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: container.current,
          start: "+=12000",
          end: "+=1500",
        },
      },
    );
  }, [setActiveItem]);

  return (
    <div
      ref={ref}
      className={`relative w-full h-screen flex flex-col gap-[7.625rem] overflow-hidden bg-black py-24 px-60 z-[2]`}
    >
      test
      <div ref={container} className="w-full flex flex-col items-start">
        <div ref={title} className="flex flex-col items-start gap-2">
          <h2 className="text-6xl font-bold mb-3 leading-[1.3] tracking-double text-white">
            KT intelligence 구성요소
          </h2>
          <p className="text-xl leading-[1.5] tracking-[-0.01em] text-white">
            신뢰도 높은 검증 데이터에 기반한 한국형 AI
          </p>
        </div>
      </div>
      <div className="w-full max-h-[36.563rem] flex justify-between overflow-hidden">
        <div ref={accordionMenu}>
          {/* <AccordionMenu items={menuItems} /> */}
          <ul className={`flex flex-col gap-24 ${menuPosition} transition-all duration-300`}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex flex-col gap-3 ${activeItem === index ? "active" : ""}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3
                    className={`text-main-72 font-semibold leading-[1.5] tracking-[-0.01em] transition-all duration-300 ${
                      activeItem === index
                        ? "bg-gradient-to-r from-[#FC4C41] from-[5.99%] to-[#8A0F0E] to-[178.99%] bg-clip-text text-transparent"
                        : "text-[#1f1f22]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-xl text-white font-medium leading-[1.4] whitespace-pre-line">
                  {item.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <ul className="flex flex-col items-center justify-end w-full h-full">
          {imagePaths.map((path, index) => (
            <li
              key={index}
              className={`cube-object-${index + 1} absolute opacity-0 ${path.direction}`}
            >
              <Image src={path.src} alt="cube-data" width={path.width} height={path.height} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParallaxDepthSection;
