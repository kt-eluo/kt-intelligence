// src/components/KEcoSection.tsx
import React from "react";

const allianceLogos = [
  { name: "Data Bricks", desc: "AI를 활용한 인프라 운영과 CT 서비스의 혁신", icon: "/logos/databricks.png" },
  { name: "Palantir", desc: "", icon: "/logos/palantir.png" },
  { name: "리벨리온", desc: "필요한 만큼 클라우드처럼 사용할 수 있는 HAC* 서비스 제공", icon: "/logos/rebellion.png" },
  { name: "모레", desc: "", icon: "/logos/more.png" },
  { name: "Microsoft", desc: "", icon: "/logos/microsoft.png" },
];

const openModels = [{ name: "Mi:dm 2.0 Mini" }, { name: "Base" }];

const coResearchLogos = [
  { name: "MS Research", icon: "/logos/msresearch.png" },
  { name: "Vector Institute", icon: "/logos/vector.png" },
  { name: "KAIST", icon: "/logos/kaist.png" },
  { name: "고려대", icon: "/logos/koreauniv.png" },
];

export default function KEcoSection() {
  return (
    <section className="relative w-full h-screen pt-[10.25rem] py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">K-ECO</h2>
        <p className="text-center text-gray-600 mb-10">함께 성장하는 AI 생태계를 통해 KT가 ‘같이’의 가치를 만듭니다</p>
        {/* K-Alliance */}
        <div className="border-t border-gray-200 py-8">
          <h3 className="text-xl font-bold mb-1">K-Alliance</h3>
          <p className="text-gray-600 mb-4">업계를 선도하는 국내외 대표 기업들과 AI 기술 개발 협력</p>
          <div className="flex flex-wrap gap-4 items-center">
            {allianceLogos.map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-50 rounded-lg px-4 py-2 min-w-[100px]">
                <div className="w-10 h-10 mb-1 flex items-center justify-center">
                  {/* 실제로는 <img src={item.icon} ... /> */}
                  <span className="text-xs font-bold">{item.name}</span>
                </div>
                {item.desc && <div className="text-xs text-gray-500 text-center">{item.desc}</div>}
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-400 mt-2">* Hyper-scale AI Computing</div>
        </div>
        {/* 오픈 모델 공개 */}
        <div className="border-t border-gray-200 py-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1">오픈 모델 공개</h3>
            <p className="text-gray-600">누구나 쓸 수 있는 KT 자체 개발 모델 Mi:dm 공개</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            {openModels.map((m, i) => (
              <div key={i} className="bg-gray-100 rounded-lg px-8 py-4 font-bold text-lg">
                {m.name}
              </div>
            ))}
          </div>
        </div>
        {/* K-Innovation */}
        <div className="border-t border-gray-200 py-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1">K-Innovation</h3>
            <p className="text-gray-600">스타트업들의 기술 개발 및 사업화 지원</p>
          </div>
          <div className="font-bold text-lg mt-4 md:mt-0">KT Open Innovation Center</div>
        </div>
        {/* K-CoResearch */}
        <div className="border-t border-gray-200 py-8">
          <h3 className="text-xl font-bold mb-1">K-CoResearch</h3>
          <p className="text-gray-600 mb-4">학계와 글로벌을 대표하는 연구 기관과 리서치 협력</p>
          <div className="flex flex-wrap gap-4 items-center">
            {coResearchLogos.map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-50 rounded-lg px-4 py-2 min-w-[100px]">
                <div className="w-10 h-10 mb-1 flex items-center justify-center">
                  {/* 실제로는 <img src={item.icon} ... /> */}
                  <span className="text-xs font-bold">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
