const path = require('path')//node path module
module.exports ={ //es6가아닌 node가 사용할 모듈시스템
    mode: 'development', //개발환경
    entry:{
        main:'./src/app.js'//모듈의 시작점
    },
    output:{
        filename: '[name].js', //결과 파일이름
        path:path.resolve('./dist') //절대경로계산해주는 resolve
    },
    module:{
        rules:[
          {
            test: /\.js$/, //로더가 처리해야될 파일들의 패턴(정규표현식) , js파일을 로더로 돌림
            use:[ //패턴에 걸린파일은 use에 설정한 loader함수를 적용
                path.resolve('./my-webpack-loader.js') //여러번 실행되는데 그이유는 js파일수만큼 실행됨
            ]
          }
        ]
    }
}