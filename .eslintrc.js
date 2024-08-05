module.exports = {
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
  rules: {
    'no-unused-vars': ['warn', { ignoreRestSiblings: true }], // 미사용 변수 경고. https://eslint.org/docs/v8.x//rules/no-unused-vars
  },
};
