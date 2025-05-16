import React, { useState } from "react";
import clsx from "clsx";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionMenuProps {
  items?: AccordionItem[];
}

const defaultItems: AccordionItem[] = [
  {
    title: "Value",
    content: "한국형 AI의 가치와 신뢰성에 대한 설명이 들어갑니다.",
  },
  {
    title: "Style",
    content: "KT만의 스타일과 차별화된 기술력에 대한 설명이 들어갑니다.",
  },
  {
    title: "Knowledge",
    content: "지식, 데이터, 생태계에 대한 설명이 들어갑니다.",
  },
];

const AccordionMenu: React.FC<AccordionMenuProps> = ({ items = defaultItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <ul className="flex flex-col gap-4 w-[400px]">
      {items.map((item, idx) => (
        <li
          key={item.title}
          className={clsx("border-t border-[#626262] transition-all duration-300 last:border-b last:pb-4")}
        >
          <button
            className="w-full flex justify-between items-center pt-5 pb-2 text-xl font-bold leading-[1.3] tracking-[-0.01em] focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span>{item.title}</span>
            {openIndex === idx ? (
              <span className="transition-transform">-</span>
            ) : (
              <span className="transition-transform">+</span>
            )}
          </button>
          <div
            className={clsx(
              "overflow-hidden transition-all duration-300",
              openIndex === idx ? "max-h-40 py-2" : "max-h-0 py-0"
            )}
          >
            <p className="text-base text-[#75757f] leading-[1.5] tracking-[-0.01em]">{item.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AccordionMenu;
