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
    module:{//로더 js뿐만아닌 다른파일도 모듈로처리해서 번들해줌
        rules:[
          { 
            test: /\.css$/, //로더가 처리해야될 파일들의 패턴(정규표현식)
            use:[ 
                'style-loader',//style-loader:자바스크립트파일에서 css파일을 불러올수 있음(html파일에서 css직접불러오기 안해도됨)
                'css-loader' //css파일을 만나면 css-loader가 처리함
            ]
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader:'url-loader',//이미지파일도 번들 (파일복사: file-loader,특정크기미만 js문자열처리: url-loader)
            options:{
                publicPath:'./dist/',//파일로더가 처리하는파일을 모듈로 사용했을때 경로를추가
                name: '[name].[ext]?[hash]',//파일로더가 파일을 아웃풋에 복사할때 사용되는 파일명 [원본파일명].[파일확장자][캐쉬무력화를 위해 매번다른 해쉬값 적용]
                limit:10000, //파일용량 10kb // 10kb미만은 url-loader로 처리->자바스크립트 문자열로 처리 , 이상이면 file-loader가 처리->파일복사
            }
          }
        ]
  },
  plugins:[
    
  ]
    
}