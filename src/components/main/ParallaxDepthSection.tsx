"use client";

import React, { useRef, useEffect, useState, useMemo, forwardRef } from "react";
// import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import AccordionMenu from "./ui/AccordionMenu";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ParallaxDepthSection = forwardRef<HTMLDivElement | null>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const kOn = useRef<HTMLDivElement>(null);
  const contentMenu = useRef<HTMLDivElement>(null);
  const cubeContainer = useRef<HTMLDivElement>(null);
  const cubeTitle = useRef<HTMLHeadingElement>(null);
  const cubeDescription = useRef<HTMLParagraphElement>(null);
  const [activeItem, setActiveItem] = useState<number>(0);

  const menuItems = [
    {
      title: "K on SPC",
      content: "AI 특화 고객 맞춤형\n보안 강화 클라우드 플랫폼",
      description:
        "한국에 위치한 데이터 센터를 통해 데이터 주권 보호,\n고객 소유 전용키로 데이터 이중 보호, 국내 법률/규제 준수",
    },
    {
      title: "K on Studio",
      content: "데이터 수집부터 AI 학습/\n배포/서빙 및 모니터링까지\n통합 제공하는 플랫폼",
      description: "SaaS형 Studio, On-premise(구축형) Studio 제공",
    },
    {
      title: "K on Model",
      content: "K-Data를 학습하여\n한국의 정체성을 담은 모델",
      description: "KT자체모델, 글로벌 협력모델, 오픈 소스 기반 모델",
    },
    {
      title: "K on RAG",
      content:
        "다양한 타입의 비정형 문서를\nAI가 이해할 수 있는 형태로\n변환하는 데이터 처리 및\n검색 기술",
      description: "Search AI, Document AI 제공",
    },
    {
      title: "K on Agent",
      content: "고객의 상황을 이해하고\n판단하여 스스로 결정하는\n에이전트",
      description: "고객 맞춤형 에이전트, KT 서비스 에이전트 제공",
    },
    {
      title: "K on RAI",
      content: "책임있는 AI를 실현하기 위한\nRAI 프레임워크",
      description:
        "Responsible AI Center(RAIC), AI 윤리원칙\n(ASTRI), AI 원칙, 정책, 기술을 수용한 개발\n프로세스 및 RAI 문화 조성",
    },
  ];

  const imagePaths = [
    {
      src: "/images/k-cube/k-spc.svg",
      activeSrc: "/images/k-cube/k-spc.svg",
      width: 778,
      height: 467,
      direction: "right-1/2 translate-y-[21.75rem] translate-x-[50.9%]",
      size: "w-[48.625rem] h-[29.188rem]",
    },
    {
      src: "/images/k-cube/k-studio.svg",
      activeSrc: "/images/k-cube/k-studio-act.svg",
      width: 509,
      height: 520,
      direction: "right-1/2",
      size: "w-[31.813rem] h-[32.5rem]",
    },
    {
      src: "/images/k-cube/k-model.svg",
      activeSrc: "/images/k-cube/k-model-act.svg",
      width: 258,
      height: 314,
      direction: "right-1/2",
      size: "w-[16.125rem] h-[20rem]",
    },
    {
      src: "/images/k-cube/k-rag.svg",
      activeSrc: "/images/k-cube/k-rag-act.svg",
      width: 258,
      height: 314,
      direction: "right-1/2",
      size: "w-[16.125rem] h-[20rem]",
    },
    {
      src: "/images/k-cube/k-agent.svg",
      activeSrc: "/images/k-cube/k-agent-act.svg",
      width: 258,
      height: 314,
      direction: "right-1/2",
      size: "w-[16.125rem] h-[20rem]",
    },
    {
      src: "/images/k-cube/k-rai.svg",
      activeSrc: "/images/k-cube/k-rai-act.svg",
      width: 755,
      height: 550,
      direction: "right-1/2 z-[-1]",
      size: "w-[47.388rem] h-[34.375rem]",
    },
    {
      src: "/images/k-cube/k-suite.svg",
      activeSrc: "/images/k-cube/k-suite.svg",
      width: 930,
      height: 947,
      direction: "z-[-2]",
      size: "w-[58.125rem] h-[59.188rem]",
    },
  ];

  useEffect(() => {
    // 왼쪽 컨텐츠 애니메이션
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: "bottom center",
      },
    });
    contentTl
      .fromTo(
        title.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          onComplete: () => {
            gsap.to(title.current, {
              opacity: 0,
              duration: 1,
              delay: 1,
            });
          },
        },
      )
      .fromTo(
        kOn.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          onComplete: () => {
            gsap.to(kOn.current, {
              opacity: 0,
              duration: 1,
              delay: 0.5,
            });
          },
        },
      )
      .fromTo(
        contentMenu.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        "+=1",
      )
      .to(".cube-object-1", {
        opacity: 1,
        duration: 0.5,
      });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: typeof ref === "object" && ref && "current" in ref ? ref.current : undefined,
        start: "top top",
        end: "+=13000",
        scrub: true,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    // 큐브 컨텐츠 애니메이션
    gsap.set(".cube-object-1", { opacity: 0 });
    gsap.set(".cube-object-2", { opacity: 0, yPercent: -300, xPercent: 50 });
    gsap.set(".cube-object-3", { opacity: 0, yPercent: -300, xPercent: 22 });
    gsap.set(".cube-object-4", { opacity: 0, yPercent: -300, xPercent: 50 });
    gsap.set(".cube-object-5", { opacity: 0, yPercent: -300, xPercent: 78 });
    gsap.set(".cube-object-6", { opacity: 0, yPercent: 300, xPercent: 50 });
    gsap.set(".cube-object-7", { opacity: 0, yPercent: 300 });
    gsap.set(cubeTitle.current, { opacity: 0 });
    gsap.set(cubeDescription.current, { opacity: 0 });
    tl.to(".cube-object-2", {
      opacity: 1,
      yPercent: 36,
      xPercent: 50,
      duration: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "+=1000",
        end: "+=1500",
        scrub: true,
        onLeave: () => {
          setActiveItem(1);
        },
        onEnterBack: () => {
          setActiveItem(0);
        },
      },
    })
      .to(".cube-object-3", {
        opacity: 1,
        yPercent: 76.4,
        xPercent: 22,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "+=3000",
          end: "+=1500",
          scrub: true,
          onLeave: () => {
            setActiveItem(2);
          },
          onEnterBack: () => {
            setActiveItem(1);
          },
        },
      })
      .to(".cube-object-4", {
        opacity: 1,
        yPercent: 90,
        xPercent: 50,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "+=4500",
          end: "+=1500",
          scrub: true,
          onLeave: () => {
            setActiveItem(3);
          },
          onEnterBack: () => {
            setActiveItem(2);
          },
        },
      })
      .to(".cube-object-5", {
        opacity: 1,
        yPercent: 102.4,
        xPercent: 78,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "+=6000",
          end: "+=1500",
          scrub: true,
          onLeave: () => {
            setActiveItem(4);
          },
          onEnterBack: () => {
            setActiveItem(3);
          },
        },
      })
      .to(".cube-object-6", {
        opacity: 1,
        yPercent: 69,
        xPercent: 50,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "+=7500",
          end: "+=1500",
          scrub: true,
          onLeave: () => {
            setActiveItem(5);
          },
          onEnterBack: () => {
            setActiveItem(4);
          },
        },
      })
      .to(".cube-object-7", {
        opacity: 1,
        yPercent: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "+=9000",
          end: "+=1500",
          scrub: true,
          onLeave: () => {
            setActiveItem(6);
            gsap.to(contentMenu.current, {
              opacity: 0,
              duration: 0.5,
            });
          },
          onEnterBack: () => {
            setActiveItem(5);
            gsap.to(contentMenu.current, {
              opacity: 1,
              duration: 0.5,
            });
          },
        },
      })
      .to(cubeContainer.current, {
        xPercent: 50,
        right: "50%",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "+=10500",
          end: "+=1500",
          scrub: true,
          onEnterBack: () => {
            gsap.to(cubeTitle.current, {
              opacity: 0,
              duration: 1,
            });
            gsap.to(cubeDescription.current, {
              opacity: 0,
              duration: 1,
            });
          },
          onLeave: () => {
            gsap.to(cubeTitle.current, {
              opacity: 1,
              duration: 1,
            });
            gsap.to(cubeDescription.current, {
              opacity: 1,
              duration: 1,
            });
          },
        },
      });
  }, [setActiveItem]);

  return (
    <div
      ref={ref}
      className={`relative w-full h-screen flex flex-col gap-[7.625rem] overflow-hidden bg-black py-24 px-60 z-[2]`}
    >
      <div ref={container} className="w-full flex flex-col items-center gap-[16.813rem]">
        <div ref={title} className="flex flex-col items-center gap-6">
          <h2 className="text-main-72 font-bold leading-line-14 tracking-triple text-white">
            구성요소
          </h2>
          <p className="text-main-40 font-semibold leading-line-152 tracking-triple text-[#E0E0E0]">
            신뢰도 높은 검증 데이터에 기반한 한국형 AI
          </p>
        </div>
        <div ref={kOn} className="flex flex-col items-center gap-7 text-center">
          <h3
            className={`text-main-68 font-bold leading-line-14 tracking-triple bg-gradient-to-r from-[#FC4C41] from-[5.99%] to-[#8A0F0E] to-[178.99%] bg-clip-text text-transparent transition-all duration-300`}
          >
            K on
          </h3>
          <p className="text-main-34 font-bold leading-line-152 text-white">
            ‘온(온)’은 순우리말로 ‘모든 것’을 의미합니다.
            <br />
            일상과 업무, 사람과 기술, 감정과 언어까지
            <br />K on은 우리 삶의 모든 순간을 이해하고 연결합니다.
          </p>
        </div>
      </div>

      {/* left 메뉴 컨텐츠 */}
      <div className="absolute top-[33%] left-[16.55rem] w-full h-full flex justify-between">
        <div ref={contentMenu} className="min-w-[28.063rem] min-h-[31.875rem]">
          {/* <AccordionMenu items={menuItems} /> */}
          <ul className={`relative flex flex-col gap-24 w-full h-full`}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`absolute top-0 left-0 flex flex-col gap-3 ${activeItem === index ? "opacity-100" : "opacity-0"} transition-all duration-800`}
              >
                <div className="flex flex-col gap-7 mb-6">
                  <h3
                    className={`text-main-68 font-bold leading-line-14 tracking-triple bg-gradient-to-r from-[#FC4C41] from-[5.99%] to-[#8A0F0E] to-[178.99%] bg-clip-text text-transparent transition-all duration-300`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-main-40 font-bold text-white leading-[1.44] whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
                <p className="text-main-22 font-extrabold text-[#555555] leading-line-152 whitespace-pre-line mb-[3.25rem]">
                  {item.description}
                </p>
                <button className="w-fit py-2.5 px-6 border border-white rounded-md text-base font-bold text-white leading-line-172">
                  더보기
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        ref={cubeContainer}
        className="absolute top-16 right-[10.75rem] w-[58.125rem] h-[59.188rem]"
      >
        <h3
          ref={cubeTitle}
          className="mt-11 text-main-68 font-bold leading-line-14 tracking-triple bg-gradient-to-r from-[#FC4C41] from-[5.99%] to-[#8A0F0E] to-[178.99%] bg-clip-text text-transparent text-center"
        >
          K on Suite
        </h3>
        <ul className="flex flex-col items-center justify-end w-full h-full">
          {imagePaths.map((path, index) => (
            <li
              key={index}
              className={`cube-object-${index + 1} absolute top-0 ${path.direction} ${path.size}`}
            >
              <Image
                src={activeItem === index ? (path.activeSrc ?? "") : (path.src ?? "")}
                alt="cube-data"
                width={path.width}
                height={path.height}
                className="w-full h-full"
              />
            </li>
          ))}
        </ul>
        <p
          ref={cubeDescription}
          className="text-main-40 font-bold text-white leading-[1.44] whitespace-pre text-center -mt-64"
        >
          Cloud, Model, RAG, Agent, Studio, RAI까지
          <br />
          KT는 AI 기술과 실무를 하나로 연결하는 AI 경험을 제공합니다.
        </p>
      </div>
      {/* <div className="absolute bottom-[4.75rem] left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center justify-center gap-7 w-full h-full">
          <h3 className="text-main-68 font-bold leading-line-14 tracking-triple bg-gradient-to-r from-[#FC4C41] from-[5.99%] to-[#8A0F0E] to-[178.99%] bg-clip-text text-transparent transition-all duration-300">
            K on Suite
          </h3>
          <p className="text-main-40 font-bold text-white leading-[1.44] whitespace-pre text-center">
            Cloud, Model, RAG, Agent, Studio, RAI까지
            <br />
            KT는 AI 기술과 실무를 하나로 연결하는 AI 경험을 제공합니다.
          </p>
        </div>
      </div> */}
    </div>
  );
});
ParallaxDepthSection.displayName = "ParallaxDepthSection";
export default ParallaxDepthSection;
