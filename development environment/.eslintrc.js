module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended","plugin:prettier/recommended"],//rules를 수동으로 입력x,recommended규칙대로 //eslint,prettier동시에 실행
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
  //    "no-unexpected-multiline":"error", //함수간 따음표 처리
  //    "no-extra-semi":"error" // 여러개 따음표 에러처리
   }
};


