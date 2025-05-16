import React, { useState } from "react";
import Image from "next/image";

// 네비게이션 항목 (드롭다운 확장 대비 children 포함)
const navItems = [
  { label: "Model", href: "#" },
  { label: "RAG", href: "#" },
  { label: "Agent", href: "#" },
  { label: "RAI", href: "#" },
  { label: "Use Case", href: "#" },
  { label: "Research", href: "#" },
];

const rightLinks = [
  { label: "KAI Studio", href: "#", icon: "/images/icons/arrow-up-right.svg" },
  { label: "INSIDE KT", href: "#", icon: "/images/icons/arrow-up-right.svg" },
  { label: "KT AI 시작하기", href: "#", icon: "/images/icons/arrow-up-right.svg" },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[72px] flex items-center justify-start gap-20 px-4 md:px-8 z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <Image src="/images/icons/logo.svg" alt="logo" width={162} height={32} />
      </div>
      {/* Center: Navigation (Desktop) */}
      <nav className="hidden lg:flex items-center gap-10 pt-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-base font-bold leading-line-15 hover:text-[#FF0000] transition"
          >
            {item.label}
          </a>
        ))}
      </nav>
      {/* Right: Links, Language, Login (Desktop) */}
      <div className="hidden lg:flex items-center gap-4 ml-auto">
        <div className="flex items-center gap-6">
          {rightLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-start gap-1 text-main-13 font-medium leading-line-15 tracking-default text-[#696971] hover:text-[#FF0000] transition"
            >
              {item.label}
              <Image src={item.icon} alt="" width={16} height={16} />
            </a>
          ))}
        </div>
        {/* Language */}
        <button className="flex items-center gap-1 pl-2 py-1 rounded hover:bg-gray-100" aria-label="언어 변경">
          <Image src="/images/icons/globe.svg" alt="globe" width={24} height={24} />
        </button>
        {/* Login */}
        <button className="bg-black text-white rounded-full px-4 py-2 text-main-13 font-medium leading-line-13 tracking-default  ml-2">
          로그인
        </button>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10"
        onClick={() => setMobileMenuOpen((v) => !v)}
        aria-label="모바일 메뉴 열기"
      >
        {/* 햄버거 아이콘 (SVG) */}
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
        </svg>
      </button>
      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex flex-col">
          <div className="bg-white shadow w-full p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <Image src="/images/main_logo.png" alt="logo" width={40} height={40} />
              <button onClick={() => setMobileMenuOpen(false)} aria-label="모바일 메뉴 닫기">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[18px] font-bold text-black hover:text-[#FF0000] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-4">
              {rightLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 text-[15px] font-medium text-[#696971] hover:text-[#FF0000] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  <Image src={item.icon} alt="" width={16} height={16} />
                </a>
              ))}
              <button
                className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 mt-2"
                aria-label="언어 변경"
              >
                <Image src="/icons/globe.svg" alt="globe" width={16} height={16} />
                <span className="text-[15px] text-[#696971]">언어변경</span>
              </button>
              <button className="bg-black text-white rounded-full px-4 py-2 text-[15px] font-medium mt-2">
                로그인
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
