import React, { useRef } from "react";
import HeroSection from "../components/main/HeroSection";
import ParallaxSection from "@/components/main/ParallaxSection";
import ParallaxDepthSection from "../components/main/ParallaxDepthSection";
import QualityManagementSection from "@/components/main/QualityManagementSection";
import KEcoSection from "@/components/main/KEcoSection";
import KUseCase from "@/components/main/KUseCase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* <HeroSection />
        <ParallaxSection /> */}
        <ParallaxDepthSection ref={parallaxRef} />
        {/* <QualityManagementSection />
        <KEcoSection />
        <KUseCase /> */}
        {/* 필요시 다른 섹션 컴포넌트 추가 */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
