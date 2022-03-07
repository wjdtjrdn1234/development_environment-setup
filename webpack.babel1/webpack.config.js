const path = require('path') //디렉토리 경로를 가져오거나 조합하는 path라이브러리 가져옴
module.exports ={//모듈을 정해주고
    context: __dirname, //context에 base directory를 정해준다//__dirname은 파일이 위치한 절대경로
    entry: './src/app.js', //코드의시작지점
    output:{ //컴파일한 코드를 내보낼 위치
        path:path.resolve(__dirname,'dist'),//파일이 위칠한 디렉토리를 절대경로로 정해주고
        filename:'app.js'
    },
    module:{ //웹팩이 사용할 플러그인 지정
        rules:[ //바벨설정
            {
                test: /\.js$/, //확장자가 js파일인 대상으로하고
                exclude:/node_modules/, //해당파일 제외하고
                loader:'babel-loader' //바벨로더를 적용한다
            }
        ]
    }
}