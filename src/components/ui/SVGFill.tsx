"use client";

import React, { useEffect, useState } from "react";

interface SVGFillProps {
  duration: string;
  repeatCount?: string;
  delay?: string;
}

const baseValues = [
  "#FFFFFF",
  "#FCFCFC",
  "#FBFAFA",
  "#FAFAFA",
  "#F9F8F8",
  "#F9F7F7",
  "#F9F7F7",
  "#F8F7F7",
  "#F7F7F7",
  "#F7F5F5",
  "#F5F5F5",
  "#F4F2F2",
  "#F3F1F1",
  "#F2F2F2",
  "#F2F0F0",
  "#F1EFEF",
  "#EDEBEB",
  "#E9E6E6",
];

function shuffle(array: string[]): string[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function calcKeyTimes(length: number) {
  // 0 ~ 1까지 length-1 등분
  return Array.from({ length }, (_, i) => (i / (length - 1)).toFixed(4)).join(";");
}

const SVGFill = ({ duration, repeatCount = "indefinite", delay = "0s" }: SVGFillProps) => {
  const [values, setValues] = useState(baseValues);
  const [currentDuration, setCurrentDuration] = useState("10s");

  useEffect(() => {
    setValues(["#FFFFFF", ...shuffle(baseValues.slice(1))]);
    setCurrentDuration(duration);
  }, [duration]);

  const keyTimes = calcKeyTimes(values.length + 1); // +1 for looping back to start

  // Height: 1/9 of viewport height, Width: keep aspect ratio (157/113)
  const height = "11.111vh";
  const width = `calc(11.111vh * 157 / 113)`;
  const ml = `calc(-1 * 11.222vh * 76 / 113)`; // 76 is about half of 157, for centering

  return (
    <div style={{ marginLeft: ml }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 157 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width, height }}
      >
        <path
          d="M80.8918 127.285H0.851562L76.9392 0.802002H156.979L80.8918 127.285Z"
          className={`animate-[fillChange_${duration}_ease-in-out_infinite]`}
        >
          <animate
            attributeName="fill"
            values={[...values, values[0]].join(";")}
            keyTimes={keyTimes}
            dur={currentDuration}
            repeatCount={repeatCount}
            begin={delay}
          />
        </path>
      </svg>
    </div>
  );
};

export default SVGFill;
