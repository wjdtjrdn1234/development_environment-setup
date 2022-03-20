module.exports = {
    presets: [
      [
        "@babel/preset-env", //목적에 맞게 여러가지 플러그인을 세트로모아둔것(let->var , => 함수 변환 등등)
        {
          targets: {
            chrome: "79",
            ie: "11" // npm i regenerator-runtime 필요함
          },
          useBuiltIns: "usage", // 폴리필 사용 방식 지정
          corejs: {
            // 폴리필 버전 지정
            version: 2
          }
        }
      ]
    ]
  };