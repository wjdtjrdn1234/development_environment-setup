const path = require('path')//node path module
module.exports ={ //es6가아닌 node가 사용할 모듈시스템
    mode: 'development', //개발환경
    entry:{
        main:'./src/app.js'//모듈의 시작점
    },
    output:{
        filename: '[name].js', //결과 파일이름
        path:path.resolve('./dist') //절대경로계산해주는 resolve
    }
}