/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  // eslint의 동작환경을 지정
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 기본적인 룰셋을 지정
  extends: ["eslint:recommended", "plugin:functional/recommended"],
  plugins: ["functional"],
  // 특정 파일에만 다른 룰을 지정
  overrides: [],
  // 사용환경을 최신 자바스트립트로 가정
  parserOptions: {
    ecmaVersion: "latest",
  },

  // extends 옵션으로 지정한 룰셋을 덮어씌운다
  rules: {
    // var는 사용할 수 없다
    "no-var": ["error"],
    // 선언한 표현식은 반드시 사용해야 한다
    "no-unused-expressions": ["error"],

    // 선언하지 않은 코드를 사용할 수 없다
    "no-use-before-define": ["error"],

    // if ~ else 중첩은 허용하지 않는다
    "max-depth": [
      "error",
      {
        max: 1,
      },
    ],
    // 문자열 선언에는 홑따옴표를 사용한다
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
      },
    ],
  },
};
