function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

/**
 * 바깥에서 안쪽으로 이동하는 원형 경로를 생성하는 함수
 * @param cx - 원의 중심 x좌표
 * @param cy - 원의 중심 y좌표
 * @param rStart - 시작 반지름 (바깥쪽)
 * @param rEnd - 종료 반지름 (안쪽)
 * @param startAngle - 시작 각도 (라디안)
 * @param endAngle - 종료 각도 (라디안)
 * @param segments - 경로를 구성하는 선분의 수
 * @returns 원형 경로의 좌표 배열 [{x, y}, ...]
 */
export function createCirclePathFromOutside(
  cx: number,
  cy: number,
  rStart: number,
  rEnd: number,
  startAngle: number,
  endAngle: number,
  segments: number
) {
  const path = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const r = rStart + (rEnd - rStart) * t;
    const angle = startAngle + (endAngle - startAngle) * t;
    path.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    });
  }
  return path;
}

// 타원 경로 (바깥에서 안으로) 원의 크기가 줄어듬
export function createEllipsePathFromOutside(
  cx: number,
  cy: number,
  rxStart: number,
  rxEnd: number,
  ryStart: number,
  ryEnd: number,
  startAngle: number,
  endAngle: number,
  segments: number
) {
  const path = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = startAngle + (endAngle - startAngle) * t;
    const rx = rxStart + (rxEnd - rxStart) * t;
    const ry = ryStart + (ryEnd - ryStart) * t;
    path.push({
      x: cx + rx * Math.cos(angle),
      y: cy + ry * Math.sin(angle),
    });
  }
  return path;
}

export function createSpiralPath(
  cx: number,
  cy: number,
  rStart: number,
  rEnd: number,
  angleStart: number,
  angleEnd: number,
  segments: number
) {
  const path = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = angleStart + (angleEnd - angleStart) * t;
    const r = rStart + (rEnd - rStart) * t;
    path.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    });
  }
  return path;
}

export function createEllipsePathFixedRadius(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  startAngle: number,
  endAngle: number,
  segments: number
) {
  const path = [];
  for (let i = 0; i <= segments; i++) {
    const angle = startAngle + ((endAngle - startAngle) * i) / segments;
    path.push({
      x: cx + rx * Math.cos(angle),
      y: cy + ry * Math.sin(angle),
    });
  }
  return path;
}

/**
 * 3D 입체감이 느껴지는 원 궤적(기울어진 원)을 생성하는 함수
 * @param cx - 중심 x좌표
 * @param cy - 중심 y좌표
 * @param r - 반지름
 * @param tilt - 기울기(라디안, 0=정면, PI/6~PI/3 추천)
 * @param startAngle - 시작 각도(라디안)
 * @param endAngle - 종료 각도(라디안)
 * @param segments - 경로를 구성하는 점 개수
 * @returns 3D 원 궤적의 좌표 배열
 */
export function create3DCirclePath(
  cx: number,
  cy: number,
  r: number,
  tilt: number,
  startAngle: number,
  endAngle: number,
  segments: number
) {
  const path = [];
  const cosTilt = Math.cos(tilt);
  for (let i = 0; i <= segments; i++) {
    const angle = startAngle + ((endAngle - startAngle) * i) / segments;
    path.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle) * cosTilt,
    });
  }
  return path;
}

export const circlePaths = [
  // 타원 경로 (바깥에서 안으로)
  "M 0 0 C 9 -1 3283 -170 3425 490 C 3238 1069 2311 1060 216 249",
  "M 7 -2 C 1125 -130 994 205 862 452 C 290 846 -831 862 -1186 599",
  createEllipsePathFromOutside(0, 0, 1400, 1100, 700, 500, toRad(-90), toRad(90), 40),
  createEllipsePathFromOutside(0, 0, 1300, 1000, 600, 400, toRad(0), toRad(180), 40),
  // createEllipsePathFromOutside(0, 0, 1200, 900, 500, 300, toRad(90), toRad(270), 40),

  // createEllipsePathFromOutside(0, 0, 1100, 800, 600, 400, toRad(0), toRad(360), 40),
  // createEllipsePathFromOutside(0, 0, 1000, 700, 500, 300, toRad(-90), toRad(90), 40),

  // 추가: 고정 반지름 타원 경로 (항상 큰 타원 위를 이동)
  createEllipsePathFixedRadius(0, 0, 1500, 800, toRad(-120), toRad(60), 40),
  createEllipsePathFixedRadius(0, 0, 1400, 700, toRad(0), toRad(180), 40),
  createEllipsePathFixedRadius(0, 0, 1300, 900, toRad(90), toRad(270), 40),
  createEllipsePathFixedRadius(0, 0, 1200, 600, toRad(-90), toRad(90), 40),

  // 3D 입체 원 궤적 (기울기 적용)
  create3DCirclePath(-1000, 1000, 1200, Math.PI / 2.5, 0, Math.PI * 2, 40),
  create3DCirclePath(0, 0, 1200, Math.PI / 2.5, Math.PI / 2, Math.PI * 2.5, 40),
  // create3DCirclePath(0, 0, 1200, Math.PI / 2.5, Math.PI, Math.PI * 3, 40),
];
