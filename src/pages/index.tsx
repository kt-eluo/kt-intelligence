import HeroSection from "../components/main/HeroSection";
import ParallaxSection from "@/components/main/ParallaxSection";
import ParallaxDepthSection from "@/components/main/ParallaxDepthSection";
import QualityManagementSection from "@/components/main/QualityManagementSection";
import KEcoSection from "@/components/main/KEcoSection";
import KUseCase from "@/components/main/KUseCase";

const Home = () => (
  <main>
    <HeroSection />
    <ParallaxSection />
    <ParallaxDepthSection />
    <QualityManagementSection />
    <KEcoSection />
    <KUseCase />
    {/* 필요시 다른 섹션 컴포넌트 추가 */}
  </main>
);

export default Home;
