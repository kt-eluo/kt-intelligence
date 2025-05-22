"use client";

import React, { useRef, useState, forwardRef, useLayoutEffect, useEffect } from "react";
// import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import AccordionMenu from "./ui/AccordionMenu";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ParallaxDepthSection = forwardRef<HTMLDivElement | null>(() => {
  const ref = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const kOn = useRef<HTMLDivElement>(null);
  const contentMenu = useRef<HTMLDivElement>(null);
  const cubeContainer = useRef<HTMLDivElement>(null);
  const cubeTitle = useRef<HTMLHeadingElement>(null);
  const cubeDescription = useRef<HTMLParagraphElement>(null);
  const [activeItem, setActiveItem] = useState<number>(0);
  const activeItemRef = useRef(activeItem);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isCubeAnimationDone, setIsCubeAnimationDone] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(false);

  const menuItems = [
    {
      title: "K on Cloud",
      content: "AI 특화 고객 맞춤형\n보안 강화 클라우드 플랫폼",
      description:
        "한국에 위치한 데이터 센터를 통해 데이터 주권 보호,\n고객 소유 전용키로 데이터 이중 보호, 국내 법률/규제\n준수",
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
      activeSrc: "/images/k-cube/k-spc-act.svg",
      width: 755,
      height: 444,
      direction: "right-1/2 translate-y-[21.75rem] translate-x-[50.9%]",
      size: "w-[47.188rem] h-[27.75rem]",
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
      size: "w-[44.8rem] h-[34.375rem]",
    },
    {
      src: "/images/k-cube/k-suite.svg",
      activeSrc: "/images/k-cube/k-suite.svg",
      width: 930,
      height: 905,
      direction: "z-[-2]",
      size: "w-[58.125rem] h-[56.563rem]",
    },
  ];

  useEffect(() => {
    activeItemRef.current = activeItem;
  }, [activeItem]);

  const handleCube = () => {
    setActiveItem((prev) => (prev === 5 ? 0 : prev + 1));
  };

  const startCubeInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleCube();
    }, 4000);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    // 0~5까지만 동작
    if (activeItem < 0 || activeItem > 5) return;

    // 이전 큐브 이미지를 원래대로 되돌림
    const prevIndex = activeItem === 0 ? 5 : activeItem - 1;
    const prevCubeImage = document.querySelector(`.cube-object-${prevIndex + 1} img`);
    if (prevCubeImage) {
      (prevCubeImage as HTMLImageElement).src = imagePaths[prevIndex].src;
    }

    // 현재 큐브 이미지를 활성화 이미지로 변경
    const currentCubeImage = document.querySelector(`.cube-object-${activeItem + 1} img`);
    if (currentCubeImage) {
      (currentCubeImage as HTMLImageElement).src = imagePaths[activeItem].activeSrc;
    }
  }, [activeItem]);

  const resetAllCubeImages = () => {
    for (let i = 0; i < 6; i++) {
      const img = document.querySelector(`.cube-object-${i + 1} img`) as HTMLImageElement | null;
      if (img) img.src = imagePaths[i].src;
    }
  };

  const handleCubeMouseEnter = (index: number) => {
    if (!isCubeAnimationDone) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveItem(index);
    // 해당 큐브만 활성화 이미지로
    for (let i = 0; i < 6; i++) {
      const img = document.querySelector(`.cube-object-${i + 1} img`) as HTMLImageElement | null;
      if (img) img.src = i === index ? imagePaths[i].activeSrc : imagePaths[i].src;
    }
  };

  const handleCubeMouseLeave = () => {
    if (!isCubeAnimationDone) return;
    resetAllCubeImages();
    startCubeInterval();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsScrollTop(true), 0);
  }, []);

  useLayoutEffect(() => {
    if (!isScrollTop) return;
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      end: "+=4000",
      pin: true,
      pinSpacing: true,
    });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=1000",
        toggleActions: "play none none reset",
        onLeave: () => {
          gsap.to(title.current, {
            opacity: 0,
            duration: 0.3,
          });
          gsap.to(kOn.current, {
            opacity: 0,
            duration: 0.3,
          });
        },
        onEnterBack: () => {
          gsap.to(title.current, {
            opacity: 1,
            duration: 0.3,
          });
          gsap.to(kOn.current, {
            opacity: 1,
            duration: 0.3,
          });
        },
      },
    });
    const menuTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "+=1000",
        // end: "+=1000",
        toggleActions: "play none none reset",
      },
    });

    gsap.set(title.current, { opacity: 0, y: 30 });
    gsap.set(kOn.current, { opacity: 0, y: 30 });
    gsap.set(contentMenu.current, { opacity: 0 });
    gsap.set(".cube-object-1", { opacity: 0 });
    titleTl
      .to(title.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
      })
      .to(kOn.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
      });

    menuTl
      .to(contentMenu.current, {
        opacity: 1,
        duration: 0.3,
      })
      .to(".cube-object-1", {
        opacity: 1,
        duration: 0.3,
      });

    const cubeTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "+=2000",
        // end: "+=600",
        toggleActions: "play none none reverse",
      },
    });
    const cubeTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "+=2600",
        // end: "+=600",
        toggleActions: "play none none reverse",
      },
    });
    // 큐브 컨텐츠 애니메이션
    gsap.set(".cube-object-2", { yPercent: -200, xPercent: 50 });
    gsap.set(".cube-object-3", { yPercent: -200, xPercent: 22 });
    gsap.set(".cube-object-4", { yPercent: -200, xPercent: 50 });
    gsap.set(".cube-object-5", { yPercent: -200, xPercent: 78 });
    gsap.set(".cube-object-6", { yPercent: 250, xPercent: 50 });
    gsap.set(".cube-object-7", { opacity: 0 });
    gsap.set(cubeTitle.current, { opacity: 0 });
    gsap.set(cubeDescription.current, { opacity: 0 });
    cubeTl
      .to(".cube-object-2", {
        opacity: 1,
        yPercent: 36,
        xPercent: 50,
        duration: 0.3,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      })
      .to(
        ".cube-object-3",
        {
          opacity: 1,
          yPercent: 76.4,
          xPercent: 22,
          duration: 0.3,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.2",
      )
      .to(
        ".cube-object-4",
        {
          opacity: 1,
          yPercent: 90,
          xPercent: 50,
          duration: 0.3,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.2",
      )
      .to(
        ".cube-object-5",
        {
          opacity: 1,
          yPercent: 102.4,
          xPercent: 78,
          duration: 0.3,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "-=0.2",
      )
      .to(
        ".cube-object-6",
        {
          opacity: 1,
          yPercent: 66,
          xPercent: 50,
          duration: 0.3,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          onComplete: () => {
            handleCube();
            startCubeInterval();
            setIsCubeAnimationDone(true);
          },
          onReverseComplete: () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setActiveItem(0);
            resetAllCubeImages();
            setIsCubeAnimationDone(false);
          },
        },
        "-=0.2",
      );

    cubeTl2
      .to(cubeContainer.current, {
        xPercent: 50,
        right: "50%",
        duration: 0.5,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        onComplete: () => {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setActiveItem(7);
          resetAllCubeImages();
          setIsCubeAnimationDone(false);
        },
        onReverseComplete: () => {
          console.log("onReverseComplete");
          setActiveItem(0);
          startCubeInterval();
          setIsCubeAnimationDone(true);
        },
      })
      .to(
        contentMenu.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        },
        "<",
      )
      .to(".cube-object-7", {
        opacity: 1,
        duration: 0.5,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      })
      .to(cubeTitle.current, {
        opacity: 1,
        duration: 0.5,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      })
      .to(cubeDescription.current, {
        opacity: 1,
        duration: 0.5,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isScrollTop]);

  return (
    <section className="w-full h-full bg-black">
      <div
        ref={ref}
        className={`relative max-w-[1920px] mx-auto w-full h-screen flex flex-col gap-[7.625rem] overflow-hidden bg-black py-24 px-60 z-[2]`}
      >
        <div ref={container} className="w-full h-full flex flex-col items-center gap-[30%]">
          <div
            ref={title}
            className="flex flex-col items-center gap-6 ease-[cubic-bezier(.215,.61,.355,1)]"
          >
            <h2 className="text-main-72 font-bold leading-line-14 tracking-triple text-white">
              K intelligence 구성요소
            </h2>
            <p className="text-main-40 font-semibold leading-line-152 tracking-triple text-[#E0E0E0]">
              신뢰도 높은 검증 데이터에 기반한 한국형 AI
            </p>
          </div>
          <div
            ref={kOn}
            className="flex flex-col items-center gap-7 text-center ease-[cubic-bezier(.215,.61,.355,1)]"
          >
            <h3
              className={`text-main-68 font-bold leading-line-14 tracking-triple bg-gradient-to-r from-[#FC4C41] from-[5.99%] to-[#8A0F0E] to-[178.99%] bg-clip-text text-transparent transition-all duration-300`}
            >
              K on
            </h3>
            <p className="text-main-34 font-bold leading-line-152 text-white">
              '온(온)'은 순우리말로 '모든 것'을 의미합니다.
              <br />
              일상과 업무, 사람과 기술, 감정과 언어까지
              <br />K on은 우리 삶의 모든 순간을 이해하고 연결합니다.
            </p>
          </div>
        </div>
        {/* left 메뉴 컨텐츠 */}
        <div className="absolute top-[50%] left-[16.55rem] -translate-y-1/2 w-full flex justify-between">
          <div ref={contentMenu} className="min-w-[28.063rem] min-h-[31.875rem]">
            {/* <AccordionMenu items={menuItems} /> */}
            <ul className={`relative flex flex-col gap-24 w-full h-full`}>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`absolute top-0 left-0 flex flex-col gap-3 ${activeItem === index ? "opacity-100" : "opacity-0"} transition-all duration-800`}
                >
                  {`${activeItem} ${index}`}
                  <div className="flex flex-col gap-7 mb-6">
                    <h3
                      className={`text-main-68 font-bold leading-line-14 tracking-triple bg-gradient-to-r from-[#FC4C41] from-[5.99%] to-[#8A0F0E] to-[178.99%] bg-clip-text text-transparent transition-all duration-300`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-main-40 font-bold text-white leading-[1.44] whitespace-pre">
                      {item.content}
                    </p>
                  </div>
                  <p className="text-main-22 font-extrabold text-[#555555] leading-line-152 whitespace-pre mb-[3.25rem]">
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
          className="absolute top-[50%] right-[10.75rem] -translate-y-1/2 min-w-[58.125rem] h-[56.563rem]"
        >
          <h3
            ref={cubeTitle}
            className="mt-11 text-main-68 font-bold leading-line-14 tracking-triple bg-gradient-to-r from-[#FC4C41] from-[5.99%] to-[#8A0F0E] to-[178.99%] bg-clip-text text-transparent text-center"
          >
            K on Suite
          </h3>
          <ul className="relative z-[-1] flex flex-col items-center justify-end w-full h-full scale-80 -mt-[20%]">
            {imagePaths.slice(0, 6).map((path, index) => (
              <li
                key={index}
                className={`cube-object cube-object-${index + 1} absolute top-0 ${path.direction} ${path.size} ease-[cubic-bezier(.215,.61,.355,1)]`}
                onMouseEnter={() => handleCubeMouseEnter(index)}
                onMouseLeave={handleCubeMouseLeave}
              >
                <Image
                  src={path.src}
                  alt="cube-data"
                  width={path.width}
                  height={path.height}
                  className="w-full h-full"
                />
              </li>
            ))}
            <li className="cube-object cube-object-7 absolute top-0 w-[58.125rem] h-[56.563rem] z-[-2]">
              <Image
                src="/images/k-cube/k-suite.svg"
                alt="cube-data"
                width={930}
                height={905}
                className="w-full h-full"
              />
            </li>
          </ul>
          <p
            ref={cubeDescription}
            className="text-main-40 font-bold text-white leading-[1.44] text-center whitespace-pre -mt-[8%]"
          >
            Cloud, Model, RAG, Agent, Studio, RAI까지
            <br />
            KT는 AI 기술과 실무를 하나로 연결하는 AI 경험을 제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
});
ParallaxDepthSection.displayName = "ParallaxDepthSection";
export default ParallaxDepthSection;
