import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ),
  {
    plugins: ["jsx-a11y", "tailwindcss"],
    rules: {
      // 웹 접근성
      // 이미지에는 alt 속성 필수
      "jsx-a11y/alt-text": "error",
      // <a> 태그는 href, aria-label 등 유효성 필수
      "jsx-a11y/anchor-is-valid": "error",
      // 역할(role) 속성 오타 방지
      "jsx-a11y/aria-role": "error",
      // 대화형 요소에는 키보드 이벤트/role 필수
      "jsx-a11y/no-static-element-interactions": "error",
      // label에는 htmlFor 필수
      "jsx-a11y/label-has-associated-control": "error",
      // heading 순서, landmark 중복 등
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/no-noninteractive-element-interactions": "error",
      // 웹 표준/코드 스타일
      "react/jsx-boolean-value": ["warn", "never"],
      "react/self-closing-comp": "warn",
      // Tailwind
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off", // 필요시 on
      // 기타
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
