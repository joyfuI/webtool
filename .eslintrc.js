module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }], // 미사용 변수 경고. https://typescript-eslint.io/rules/no-unused-vars
  },
};
