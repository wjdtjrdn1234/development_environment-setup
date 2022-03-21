module.exports = {
    presets: [
      [
        "@babel/preset-env", //목적에 맞게 여러가지 플러그인을 세트로모아둔것(let->var , => 함수 변환 등등)
        {
          targets: {
            chrome: "79", //크롬 79까지 지원하는 코드
            ie: "11" //ie11까지 지원하는 코드 // npm i regenerator-runtime 필요함
          },
          useBuiltIns: "usage", // 폴리필 사용 방식 지정 , 플러그인은 es2015+ ->es5 변환할수 있는거만 변환하고,나머지는 폴리필을 통해 해결(예:promsise)
          corejs: {// 폴리필 버전 지정
            version: 2
          }
        }
      ]
    ]
  };