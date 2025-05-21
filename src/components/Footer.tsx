import Image from "next/image";

const externalLinks = [
  { label: "KT", url: "#", icon: "/images/icons/arrow-up-right-white.svg" },
  { label: "Inside KT", url: "#", icon: "/images/icons/arrow-up-right-white.svg" },
  { label: "KT Enterprise", url: "#", icon: "/images/icons/arrow-up-right-white.svg" },
  { label: "About KT", url: "#", icon: "/images/icons/arrow-up-right-white.svg" },
];

const snsLinks = [
  { label: "Instagram", url: "#", icon: "/images/icons/insta_pc.svg" },
  { label: "YouTube", url: "#", icon: "/images/icons/youtube_pc.svg" },
  { label: "LinkedIn", url: "#", icon: "/images/icons/linkedin_pc.svg" },
];

const Footer = () => (
  <footer className="w-full bg-[#181818] text-white font-sans">
    <div className="max-w-[86.5rem] w-full mx-auto pt-12 pb-6 flex flex-col md:flex-row justify-between items-start gap-8 border-b border-[#333333]">
      {/* Left: Logo & Info */}
      <div className="flex flex-col gap-2 min-w-[320px]">
        <div className="text-sm font-bold leading-line-152 text-[#C5C5C5]">
          비즈니스 문의 : <a href="mailto:k-intelligence@kt.com">k-intelligence@kt.com</a>
        </div>
        <div className="flex items-center gap-3.5 text-sm text-[#C5C5C5]">
          <a href="#">이용약관</a>
          <span className="text-[#363636]">|</span>
          <a href="#" className="font-bold">
            개인정보처리방침
          </a>
        </div>
        <div className="text-sm text-[#C5C5C5] leading-line-152 mt-1">
          Copyright© KT Corp. All rights reserved.
        </div>
      </div>
      {/* Right: Logo only on desktop */}
      <div className="hidden md:block ml-auto">
        <Image
          src="/images/icons/footer_logo.svg"
          alt="KT 로고"
          width={60}
          height={40}
          className="w-[3.75rem] h-[2.5rem]"
        />
      </div>
    </div>

    {/* Bottom: Links & SNS */}
    <div className="max-w-[86.5rem] w-full mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-wrap gap-6 text-base font-bold leading-line-152">
        {externalLinks.map((item, index) => (
          <>
            <a
              key={item.label}
              href={item.url}
              className="flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.label} (새 창)`}
            >
              {item.label}
              <Image
                src={item.icon}
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                className="w-4 h-4"
              />
            </a>
            {externalLinks.length - 1 !== index && <span className="text-[#333333]">|</span>}
          </>
        ))}
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        {snsLinks.map((sns) => (
          <a
            key={sns.label}
            href={sns.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`KT ${sns.label} (새 창)`}
          >
            <Image src={sns.icon} alt={sns.label} width={28} height={28} className="w-7 h-7" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
