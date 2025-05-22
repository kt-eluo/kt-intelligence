import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

// 네비게이션 항목 (드롭다운 확장 대비 children 포함)
const navItems = [
  {
    label: "Solution",
    href: "#",
    children: [
      { label: "K On Model", href: "#" },
      { label: "K On RAG", href: "#" },
      { label: "K On Agent", href: "#" },
      { label: "K On RAI", href: "#" },
      { label: "K On Studio", href: "#" },
      { label: "K On Cloud", href: "#" },
    ],
  },
  { label: "Use Case", href: "#" },
  { label: "Tech&", href: "#" },
];

const rightLinks = [
  { label: "Inside KT", href: "#", icon: "/images/icons/arrow-up-right-black.svg" },
];

type HeaderProps = {
  parallaxRef?: React.RefObject<HTMLDivElement | null>;
};

const Header: React.FC<HeaderProps> = ({ parallaxRef }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("KR");
  const languageRef = useRef<HTMLDivElement>(null);
  const [isOnParallax, setIsOnParallax] = useState(false);

  useEffect(() => {
    console.log(parallaxRef);
    if (!parallaxRef || !parallaxRef.current) return;
    const handleScroll = () => {
      const rect = parallaxRef.current?.getBoundingClientRect();
      if (!rect) return;
      setIsOnParallax(rect.top <= 80 && rect.bottom > 80); // 80: header height
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallaxRef]);

  const textColor = isOnParallax ? "text-white" : "text-black";
  const navText = isOnParallax ? "text-white" : "text-black";
  const iconDropdown = isOnParallax
    ? "/images/icons/dropdown_white.svg"
    : "/images/icons/dropdown.svg";
  const iconSrc = isOnParallax
    ? "/images/icons/arrow-up-right-white.svg"
    : "/images/icons/arrow-up-right-black.svg";
  const iconGlobe = isOnParallax ? "/images/icons/globe_white.svg" : "/images/icons/globe.svg";

  const handleMouseEnter = (label: string) => setOpenDropdown(label);
  const handleMouseLeave = () => setOpenDropdown(null);
  const handleClick = (item: any) => {
    if (item.children) {
      setOpenDropdown((prev) => (prev === item.label ? null : item.label));
    } else {
      setOpenDropdown(null);
    }
  };

  // 바깥 클릭 시 언어 드롭다운 닫힘
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    };
    if (languageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [languageOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full flex items-center justify-center gap-20 px-4 md:px-8 md:py-5 z-50 transition-colors duration-300`}
    >
      <div className="max-w-[86.5rem] w-full flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center mr-[4.375rem]">
          <Image
            src="/images/icons/logo.svg"
            alt="logo"
            width={162}
            height={32}
            className="w-[10.125rem] h-[2rem]"
          />
        </div>
        {/* Center: Navigation (Desktop) */}
        <nav className={`hidden lg:flex items-center gap-10 pt-2 ${navText}`}>
          {navItems.map((item) => (
            <div key={item.label} className="relative" onClick={() => handleClick(item)}>
              <a
                href={item.href}
                className={`flex items-center gap-1 text-base font-bold leading-line-15 hover:text-[#FF0000] transition ${navText}`}
                aria-haspopup={!!item.children}
                aria-expanded={openDropdown === item.label}
                tabIndex={0}
              >
                {item.label}
                {item.children && (
                  <Image
                    src={iconDropdown}
                    alt="dropdown"
                    width={8}
                    height={8}
                    className={`w-auto h-auto ${openDropdown === item.label ? "" : "rotate-180"} transition-all duration-200 ease-in-out w-2 h-2`}
                  />
                )}
              </a>
              {item.children && (
                <ul
                  className={`absolute -left-5 top-full translate-y-5 min-w-[180px] flex flex-col gap-1.5 bg-white shadow-dropdown rounded-md py-4 pl-5 pr-12 z-50 border border-[#333333] transition-all duration-200 ease-in-out
                    ${
                      openDropdown === item.label
                        ? "opacity-100 pointer-events-auto visible translate-y-0"
                        : "opacity-0 pointer-events-none invisible -translate-y-2"
                    }
                    `}
                  aria-hidden={openDropdown !== item.label}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="py-2 block text-base text-[#333333] font-medium leading-line-10 hover:text-[#FF0000] transition"
                        tabIndex={0}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
        {/* Right: Links, Language, Login (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-6">
            {rightLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-start gap-1 text-base font-medium leading-line-15 tracking-default hover:text-[#FF0000] transition ${textColor}`}
              >
                {item.label}
                <Image src={iconSrc} alt="" width={16} height={28} className="-mt-[2px] w-4 h-7" />
              </a>
            ))}
          </div>
          {/* Login */}
          <button
            className={`rounded-md px-6 py-[0.563rem] text-base font-bold leading-line-172 ml-2 ${isOnParallax ? "text-black bg-white" : "text-white bg-black"}`}
          >
            K on Model 체험하기
          </button>

          {/* Language */}
          <div className="relative ml-2" ref={languageRef}>
            <button
              className="flex items-center gap-1 pl-2 py-1 rounded cursor-pointer"
              aria-label="언어 변경"
              aria-haspopup="listbox"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((prev) => !prev)}
              tabIndex={0}
              type="button"
            >
              <Image src={iconGlobe} alt="globe" width={28} height={28} className="w-7 h-7" />
              <div
                className={`flex items-center gap-1 text-base font-bold leading-line-172 ${isOnParallax ? "text-white" : "text-black"}`}
              >
                {language}
                <Image
                  src={iconDropdown}
                  alt="dropdown"
                  width={8}
                  height={8}
                  className={`${languageOpen ? "" : "rotate-180"} transition-all duration-200 ease-in-out`}
                />
              </div>
            </button>
            <ul
              className={`flex flex-col gap-1.5 absolute right-0 py-2.5 px-3 mt-2 bg-white border border-[#e8e8e8] rounded-md shadow-language z-50 transition-all duration-200 ease-in-out
                ${languageOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
              `}
              role="listbox"
              aria-label="언어 선택"
            >
              <li className="flex items-center justify-center leading-line-10">
                <button
                  className="w-full text-[#333333] text-main-12 font-medium leading-line-10 hover:text-[#FF0000] cursor-pointer"
                  role="option"
                  aria-selected="true"
                  tabIndex={0}
                  onClick={() => {
                    setLanguage("KR");
                    setLanguageOpen(false);
                  }}
                  type="button"
                >
                  KR
                </button>
              </li>
              <li className="flex items-center justify-center leading-line-10">
                <button
                  className="w-full text-[#333333] text-main-12 font-medium leading-line-10 hover:text-[#FF0000] cursor-pointer"
                  role="option"
                  aria-selected="false"
                  tabIndex={0}
                  onClick={() => {
                    setLanguage("EN");
                    setLanguageOpen(false);
                  }}
                  type="button"
                >
                  EN
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="모바일 메뉴 열기"
        >
          {/* 햄버거 아이콘 (SVG) */}
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
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
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
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
                <button className="bg-black text-white rounded-full px-4 py-2 text-[15px] font-medium mt-2">
                  K on Model 체험하기
                </button>
                <button
                  className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 mt-2"
                  aria-label="언어 변경"
                >
                  <Image src="/icons/globe.svg" alt="globe" width={16} height={16} />
                  <span className="text-[15px] text-[#696971]">언어변경</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
