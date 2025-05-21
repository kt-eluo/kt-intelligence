import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SVGFill from "@/components/ui/SVGFill";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const logo = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLDivElement>(null);

  const title1CurrentRef = useRef<HTMLDivElement>(null);
  const title1NextRef = useRef<HTMLDivElement>(null);
  const title2CurrentRef = useRef<HTMLDivElement>(null);
  const title2NextRef = useRef<HTMLDivElement>(null);

  // 등장 애니메이션 (롤링용 타이틀 DOM에 적용)
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(logo.current, { opacity: 0, y: 30, duration: 1, ease: "power2.out" })
      .from(
        title1CurrentRef.current,
        { opacity: 0, y: 30, duration: 1, ease: "power2.out" },
        "-=0.8",
      )
      .from(
        title2CurrentRef.current,
        { opacity: 0, y: 30, duration: 1, ease: "power2.out" },
        "-=0.8",
      )
      .from(button.current, { opacity: 0, y: 30, duration: 1, ease: "power2.out" }, "-=0.8");
  }, []);

  useEffect(() => {
    // 롤링 애니메이션
    const rollingInterval = setInterval(() => {
      if (
        title1CurrentRef.current &&
        title1NextRef.current &&
        title2CurrentRef.current &&
        title2NextRef.current
      ) {
        // 첫 번째 텍스트 롤링
        title1CurrentRef.current.style.animation = "rollingCurrent 0.5s ease-in-out forwards";
        title1NextRef.current.style.animation = "rollingNext 0.5s ease-in-out forwards";

        // 첫 번째 텍스트 롤링이 절반 진행된 후 두 번째 텍스트 롤링 시작
        setTimeout(() => {
          if (title2CurrentRef.current && title2NextRef.current) {
            title2CurrentRef.current.style.animation = "rollingCurrent 0.5s ease-in-out forwards";
            title2NextRef.current.style.animation = "rollingNext 0.5s ease-in-out forwards";
          }
        }, 250);

        setTimeout(() => {
          if (title1CurrentRef.current && title1NextRef.current) {
            // 애니메이션 초기화
            title1CurrentRef.current.style.animation = "";
            title1NextRef.current.style.animation = "";

            // DOM 위치 변경
            const temp1 = title1CurrentRef.current.innerHTML;
            title1CurrentRef.current.innerHTML = title1NextRef.current.innerHTML;
            title1NextRef.current.innerHTML = temp1;
          }
        }, 500);
        setTimeout(() => {
          if (title2CurrentRef.current && title2NextRef.current) {
            // 애니메이션 초기화
            title2CurrentRef.current.style.animation = "";
            title2NextRef.current.style.animation = "";

            // DOM 위치 변경
            const temp2 = title2CurrentRef.current.innerHTML;
            title2CurrentRef.current.innerHTML = title2NextRef.current.innerHTML;
            title2NextRef.current.innerHTML = temp2;
          }
        }, 750);
      }
    }, 5000);

    return () => clearInterval(rollingInterval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 text-white">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="flex flex-col items-end justify-end w-full gap-0 translate-x-[6%]">
            <div className="flex items-end justify-end w-full gap-0">
              {Array.from({ length: 8 }).map((_, index) => (
                <SVGFill key={7 - index} duration="12s" repeatCount="indefinite" />
              ))}
            </div>
            <div className="flex items-end justify-end w-full gap-0 translate-x-[0.8%]">
              {Array.from({ length: 8 }).map((_, index) => (
                <SVGFill key={index} duration="12s" repeatCount="indefinite" />
              ))}
            </div>
            <div className="flex items-end justify-end w-full gap-0 translate-x-[1.5%]">
              {Array.from({ length: 10 }).map((_, index) => (
                <SVGFill key={index} duration="12s" repeatCount="indefinite" />
              ))}
            </div>
            <div className="flex items-end justify-end w-full gap-0 translate-x-[2.2%]">
              {Array.from({ length: 12 }).map((_, index) => (
                <SVGFill key={index} duration="12s" repeatCount="indefinite" />
              ))}
            </div>
            <div className="flex items-end justify-end w-full gap-0 translate-x-[2.9%]">
              {Array.from({ length: 10 }).map((_, index) => (
                <SVGFill key={index} duration="12s" repeatCount="indefinite" />
              ))}
            </div>
            <div className="flex items-end justify-end w-full gap-0 translate-x-[3.6%]">
              {Array.from({ length: 14 }).map((_, index) => (
                <SVGFill key={index} duration="12s" repeatCount="indefinite" />
              ))}
            </div>
            <div className="flex items-end justify-end w-full gap-0 translate-x-[4.3%]">
              {Array.from({ length: 17 }).map((_, index) => (
                <SVGFill key={index} duration="12s" repeatCount="indefinite" />
              ))}
            </div>
            <div className="flex items-end justify-end w-full gap-0 translate-x-[5%]">
              {Array.from({ length: 13 }).map((_, index) => (
                <SVGFill key={index} duration="12s" repeatCount="indefinite" />
              ))}
            </div>
            <div className="flex items-end justify-end w-full gap-0 translate-x-[5.7%]">
              {Array.from({ length: 10 }).map((_, index) => (
                <SVGFill key={index} duration="12s" repeatCount="indefinite" />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <div ref={logo} className="flex items-center justify-center mb-[4.25rem]">
          <Image
            src="/images/main_logo.png"
            alt="logo"
            width={138}
            height={140}
            className="w-[8.625rem] h-[8.75rem]"
          />
        </div>
        {/* 타이틀 애니메이션 루프 */}
        <div className="w-full">
          <div className="relative h-[6.4em] overflow-hidden w-full mb-2">
            <div ref={title1CurrentRef}>
              <h2 className="text-main-80 mb-0 p-0 text-center leading-tight tracking-triple select-none">
                한국을 안다는 건, 우리를 안다는 것
              </h2>
            </div>
            <div ref={title1NextRef}>
              <h2 className="text-main-80 mb-0 p-0 text-center leading-tight tracking-triple select-none">
                <strong>한국인</strong>의 일상을더
              </h2>
            </div>
          </div>
          <div className="relative h-[6.4em] overflow-hidden w-full">
            <div ref={title2CurrentRef}>
              <h2 className="text-main-80 mb-0 p-0 text-center leading-tight tracking-triple select-none">
                <strong>한국적 AI의 새로운 시작</strong>
              </h2>
            </div>
            <div ref={title2NextRef}>
              <h2 className="text-main-80 mb-0 p-0 text-center leading-tight tracking-triple select-none">
                깊이 이애하는 <strong>한국적 AI</strong>
              </h2>
            </div>
          </div>
        </div>
        {/* <p ref={paragraph} className="text-lg text-center mt-4">
          한국적 AI의 기준, 지금 KT에서 시작됩니다.
          <br />
          지식과 가치 그리고 기술이 하나 되는 AI 생태계로 모든 가능성을 연결합니다.
        </p> */}
        <div ref={button} className="py-4 px-10 bg-black rounded-full text-white mt-[5.575rem]">
          <button className="text-2xl font-medium">체험하기</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
