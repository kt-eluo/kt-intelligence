"use client";

import ParallaxSection from "@/components/ParallaxSection";
import HeroSection from "../components/HeroSection";
import ParallaxDepthSection from "@/components/ParallaxDepthSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Header from "@/components/Header";
import QualityManagementSection from "@/components/QualityManagementSection";
import KEcoSection from "@/components/KEcoSection";
import KUseCase from "@/components/KUseCase";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // const [currentScroll, setCurrentScroll] = useState(0);
  // const [isScrolling, setIsScrolling] = useState(false);
  const outerDivRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   let lastScrollTime = Date.now();
  //   const scrollThreshold = 50; // 휠 이벤트 감지 임계값
  //   const scrollDelay = 920; // 스크롤 딜레이

  //   const wheelHandler = (e: WheelEvent) => {
  //     if (currentScroll === 1) return;
  //     e.preventDefault();

  //     const currentTime = Date.now();
  //     const timeDiff = currentTime - lastScrollTime;

  //     if (!isScrolling && timeDiff > scrollDelay) {
  //       const { deltaY } = e;

  //       // 임계값보다 큰 스크롤만 처리
  //       if (Math.abs(deltaY) < scrollThreshold) {
  //         return;
  //       }

  //       setIsScrolling(true);
  //       lastScrollTime = currentTime;

  //       if (deltaY > 0) {
  //         // 아래로 스크롤
  //         if (currentScroll < 6) {
  //           setCurrentScroll((prev) => prev + 1);
  //         }
  //       } else {
  //         // 위로 스크롤
  //         if (currentScroll > 0) {
  //           setCurrentScroll((prev) => prev - 1);
  //         }
  //       }

  //       setTimeout(() => setIsScrolling(false), scrollDelay);
  //     }
  //   };

  //   if (currentScroll === 1) {
  //     document.documentElement.style.overflow = "hidden";
  //   } else {
  //     document.documentElement.style.overflow = "auto";
  //   }

  //   const outerDivRefCurrent = outerDivRef.current;
  //   outerDivRefCurrent?.addEventListener("wheel", wheelHandler, { passive: false });

  //   return () => {
  //     outerDivRefCurrent?.removeEventListener("wheel", wheelHandler);
  //   };
  // }, [currentScroll, isScrolling]);

  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     if (currentScroll === 1 && window.scrollY >= window.innerHeight) {
  //       return; // 기본 동작 허용
  //     }

  //     if (isScrolling) return;

  //     e.preventDefault(); // 기본 동작 방지를 스크롤 체크 후로 이동

  //     const direction = e.deltaY > 0 ? 1 : -1;
  //     const windowHeight = window.innerHeight;
  //     const windowY = window.scrollY;

  //     if (currentScroll === 0 && direction === 1) {
  //       setIsScrolling(true);
  //       window.scrollTo({
  //         top: windowHeight,
  //         behavior: "smooth",
  //       });
  //       setCurrentScroll(1);
  //       setTimeout(() => setIsScrolling(false), 800);
  //     }
  //     if (currentScroll === 1 && direction === -1 && windowY <= windowHeight) {
  //       setIsScrolling(true);
  //       window.scrollTo({
  //         top: 0,
  //         behavior: "smooth",
  //       });
  //       setCurrentScroll(0);
  //       setTimeout(() => setIsScrolling(false), 800);
  //     }
  //   };

  //   // 터치 이벤트 처리
  //   let startY = 0;
  //   let endY = 0;

  //   const handleTouchStart = (e: TouchEvent) => {
  //     if (currentScroll === 1 && startY < endY) {
  //       return; // 기본 동작 허용
  //     }
  //     e.preventDefault(); // 그 외의 경우 기본 동작 방지
  //     startY = e.touches[0].clientY;
  //   };

  //   const handleTouchMove = (e: TouchEvent) => {
  //     if (currentScroll === 1 && startY < endY) {
  //       return; // 기본 동작 허용
  //     }
  //     e.preventDefault(); // 그 외의 경우 기본 동작 방지
  //     endY = e.touches[0].clientY;
  //   };

  //   const handleTouchEnd = (e: TouchEvent) => {
  //     if (currentScroll === 1 && startY < endY) {
  //       return; // 기본 동작 허용
  //     }
  //     e.preventDefault(); // 그 외의 경우 기본 동작 방지

  //     if (isScrolling) return;

  //     const diff = startY - endY;
  //     const windowHeight = window.innerHeight;
  //     const windowY = window.scrollY;

  //     if (Math.abs(diff) > 50) {
  //       const direction = diff > 0 ? 1 : -1;

  //       if (currentScroll === 0 && direction === 1) {
  //         setIsScrolling(true);
  //         window.scrollTo({
  //           top: windowHeight,
  //           behavior: "smooth",
  //         });
  //         setCurrentScroll(1);
  //         setTimeout(() => setIsScrolling(false), 800);
  //       }
  //       if (currentScroll === 1 && direction === -1 && windowY <= windowHeight) {
  //         setIsScrolling(true);
  //         window.scrollTo({
  //           top: 0,
  //           behavior: "smooth",
  //         });
  //         setCurrentScroll(0);
  //         setTimeout(() => setIsScrolling(false), 800);
  //       }
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   window.addEventListener("touchstart", handleTouchStart, { passive: false });
  //   window.addEventListener("touchmove", handleTouchMove, { passive: false });
  //   window.addEventListener("touchend", handleTouchEnd, { passive: false });

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //     window.removeEventListener("touchstart", handleTouchStart);
  //     window.removeEventListener("touchmove", handleTouchMove);
  //     window.removeEventListener("touchend", handleTouchEnd);
  //   };
  // }, [currentScroll, isScrolling]);

  return (
    <>
      <Header />
      <main ref={outerDivRef} className="flex flex-col items-center justify-items-center min-h-screen overflow-hidden">
        <HeroSection />
        <ParallaxSection />
        <ParallaxDepthSection />
        <QualityManagementSection />
        <KEcoSection />
        <KUseCase />
      </main>
    </>
  );
}
