"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <div className="px-3 py-1.5 bg-white/30 backdrop-blur-[20px] rounded-full">
      <span className="text-sm font-medium leading-[1.58] tracking-[-0.01em] text-white">
        {text}
      </span>
    </div>
  );
};

interface CaseCardProps {
  image: string;
  title: string;
  date: string;
  tags: string[];
  gradient?: string;
}

const CaseCard = ({ image, title, date, tags, gradient }: CaseCardProps) => {
  return (
    <div className="relative w-full h-[34rem] rounded-2xl overflow-hidden group">
      <Image src={image} alt={title} width={420} height={548} className="object-cover" />
      {gradient && <div className={`absolute inset-x-0 bottom-0 h-full ${gradient}`} />}
      <div className="absolute inset-x-0 bottom-0 pl-8 pr-[2.813rem] pb-11">
        <p className="text-sm font-light leading-[1.32] text-white mb-6">{date}</p>
        <h3 className="text-26 font-semibold leading-[1.36] tracking-[-0.03em] text-white whitespace-pre-line mb-8">
          {title}
        </h3>
        <div className="flex gap-1.5">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function KUseCase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !descriptionRef.current || !buttonRef.current)
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "170% center",
      },
    });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 20,
    })
      .from(
        descriptionRef.current,
        {
          opacity: 0,
          y: 20,
        },
        "-=0.4",
      )
      .from(
        buttonRef.current,
        {
          opacity: 0,
          y: 20,
        },
        "-=0.4",
      )
      .from(
        cardsRef.current,
        {
          opacity: 0,
          xPercent: 100,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.4",
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const cases = [
    {
      image: "/images/k-usecase/image_1.jpg",
      title: "자연어의 뉘앙스를 이해하는\n온누리, 민원을 해결하다",
      date: "Apr 1, 2025",
      tags: ["# 한국어 특화", "# 민원자동화"],
      gradient:
        "rounded-b-2xl bg-gradient-to-b from-[rgba(36,86,191,0)] to-[#001643] bg-blend-darken !h-1/2",
    },
    {
      image: "/images/k-usecase/image_2.jpg",
      title: "이미지를 빠르게 분류하고 판단하는\n하늬, 의료영상 분석에 도전하다",
      date: "Mar 16, 2025",
      tags: ["# 의료 AI", "# 이미지 인식", "# 진단보조"],
      gradient:
        "rounded-2xl bg-[linear-gradient(153deg,rgba(142,142,142,0.10)_3.65%,rgba(59,59,59,0.10)_102.69%)] bg-blend-lighten",
    },
    {
      image: "/images/k-usecase/image_3.jpg",
      title: "회의는 다온에게 맡겨! 음성 인식\n회의 요약 AI",
      date: "Mar 28, 2025",
      tags: ["# 음성인식", "# 회의자동화", "# AI요약"],
      gradient:
        "rounded-2xl bg-[linear-gradient(195deg,rgba(0,0,0,0)_57.6%,rgba(0,0,0,0.20)_93.55%)] bg-blend-normal",
    },
    {
      image: "/images/k-usecase/image_1.jpg",
      title: "창의적인 콘텐츠 제작을 지원하는\n한국형 AI",
      date: "Feb 28, 2025",
      tags: ["# 콘텐츠AI", "# 창의성지원", "# AI글쓰기"],
    },
    {
      image: "/images/k-usecase/image_2.jpg",
      title: "사용자의 명령을 스스로 이해하고\n수행하는 AI 에이전트",
      date: "Mar 12, 2025",
      tags: ["# 지능형비서", "# AI에이전트", "# 자동화AI"],
    },
    {
      image: "/images/k-usecase/image_3.jpg",
      title: "한국형 AI로 고객 상담을 혁신하다\n온누리 기반 스마트 자동응대",
      date: "Feb 6, 2025",
      tags: ["# AI자동응대", "# 고객상담혁신", "# 한국형AI"],
      gradient:
        "rounded-2xl bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%)] bg-blend-normal",
    },
  ];

  return (
    <section ref={sectionRef} className="relative w-full pt-[3.75rem] pb-44 overflow-hidden">
      <div className="">
        <div className="relative">
          <div ref={cardsRef} className="relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={40}
              slidesPerView={2.8}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                type: "progressbar",
              }}
              className="use-case-swiper"
            >
              {cases.map((item) => (
                <SwiperSlide key={item.title}>
                  <CaseCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="absolute top-0 left-[15rem] z-10">
            <h2
              ref={titleRef}
              className="text-main-90 font-bold leading-line-088 tracking-default mb-10"
            >
              Use
              <br />
              case
            </h2>
            <p
              ref={descriptionRef}
              className="text-main-26 font-medium leading-line-16 tracking-double mb-[3.75rem]"
            >
              특화된 AI 모델이 문제에 도전하고
              <br />
              해결한 과정을 경험해 보세요
            </p>
            <button
              ref={buttonRef}
              className="flex items-center gap-2 px-7 py-4 bg-[#262626] text-white rounded-full text-lg font-bold"
            >
              전체보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
