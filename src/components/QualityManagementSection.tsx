"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "AI 학습데이터 거버넌스 관리 체계",
    desc: [
      "데이터 리니지 관리로 통합 모델의 투명성 관리",
      "다양한 도메인의 데이터를 통한 모델의 편향성 최소화",
      "데이터 품질 검증 자동화",
    ],
    position: "top-[24.688rem] right-[45.688rem]",
    padding: "p-10",
  },
  {
    title: "체계화된 평가 프로세스",
    desc: ["다양한 평가지표에 대한 적용, 정성평가 진행\n (모델 개발 가치 → Task별 품질평가)"],
    position: "top-[45.563rem] left-[16.625rem]",
    padding: "pt-10 pb-10 pl-10 pr-[4.063rem]",
  },
  {
    title: "신뢰성 있는 평가",
    desc: ["데이터 보안 및 평가 일관성 체크"],
    position: "bottom-[11.938rem] left-[20.625rem]",
    padding: "py-[2.688rem] pl-10 pr-0",
  },
  {
    title: "확장성 있는 평가 Tool 제공",
    desc: ["Cloud / On-Premise 등", "다양한 환경에 맞춘 평가 Tool 제공"],
    position: "bottom-[11.938rem] right-[20.25rem]",
    padding: "py-[1.781rem] pl-10 pr-0",
  },
  {
    title: "한국 특화 벤치마크",
    desc: ["한국적인 AI에 맞춘 평가지표 & 벤치마크 구축"],
    position: "top-[45.563rem] right-[15.875rem]",
    padding: "py-[2.688rem] pl-10 pr-0",
  },
];

export default function QualityManagementSection() {
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const description = useRef<HTMLParagraphElement>(null);
  const polygon = useRef<HTMLDivElement>(null);
  const items = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=100%",
      },
    });

    tl.fromTo(
      title.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.inOut", stagger: 0.2 }
    )
      .fromTo(
        description.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.inOut", stagger: 0.2 },
        "-=0.8"
      )
      .fromTo(
        polygon.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.inOut", stagger: 0.2 }
      )
      .fromTo(
        items.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.inOut", stagger: 0.2 }
      );
  }, []);

  return (
    <section
      ref={container}
      className={`relative w-full bg-[linear-gradient(204deg,#FAFAFA_47.92%,#FFF_82.66%)] z-[3] transition-all duration-1000`}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
        <Image
          src="/images/sec4-01.png"
          alt="bg"
          width={826}
          height={517}
          className="object-cover self-end w-[51.625rem] h-[32.25rem]"
        />
        <Image
          src="/images/sec4-02.png"
          alt="bg"
          width={1207}
          height={730}
          className="object-cover self-start w-[75.438rem] h-[45.625rem]"
        />
      </div>

      <div className="flex flex-col items-center justify-start gap-[14.75rem] px-4 pt-[10.25rem] pb-[10.25rem] h-full relative z-10">
        <div className="flex flex-col items-center gap-2 mb-12">
          <h2 ref={title} className="text-main-88 font-bold text-center leading-line-15 tracking-double">
            품질관리체계
          </h2>
          <p ref={description} className="text-xl leading-line-15 tracking-double text-center">
            KT의 한국형 AI 품질 검증 프로세스
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* 중앙 육각형/로고 */}
          <div ref={polygon} className="relative flex flex-col items-center mb-8">
            <Image
              src="/images/sec4-03.png"
              alt="logo"
              width={513}
              height={488}
              className="w-[32.063rem] h-[30.5rem]"
            />
            <div className="text-2xl font-bold leading-line-142 tracking-double text-center ">
              KT AI 모델만의
              <br />
              차별화된 품질 관리
            </div>
          </div>
          {/* 카드 배치 */}
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => {
                  items.current[index] = el!;
                }}
                className={`absolute ${card.position}`}
              >
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, padding }: { title: string; desc: string[]; padding?: string }) {
  return (
    <div className={`min-w-[25.5rem] flex flex-col gap-3.5 bg-white rounded-xl shadow-shadow-card ${padding}`}>
      <h3 className="font-bold text-xl leading-line-135 tracking-double mb-2 whitespace-nowrap">{title}</h3>
      <ul className="text-gray-600 text-base leading-line-16 tracking-double space-y-1">
        {desc.map((d, i) => (
          <li key={i} className="flex  whitespace-pre-line before:content-['•'] before:text-[15px] before:mr-2">
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
