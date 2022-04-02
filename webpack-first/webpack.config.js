const path = require('path') //node module중 path module을 가져옴
const HtmlWebpackPlugin = require('html-webpack-plugin') //html은 plugin 형태라서 생성자함수를 가져와야됨
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports={
    mode:'development', //모드:개발모드
    entry:{
        main:'./src/app.js' //시작점을 표시
    },
    output:{//여러개의 모듈을 하나로 압축해서 저장시킬 위치 -> dist폴더에 main.js가 웹팩 결과물로 나옴
        path: path.resolve('./dist'),  //폴더이름 -> 절대경로
        filename:'[name].js' //파일이름 , name변수는 entry에서 설정한 key값이 들어옴
    },
    module: {
        rules: [
            {   //css파일 설정
                test: /\.css$/, //css 정규표현식
                use: ['style-loader', 'css-loader'] //style-loader:자바스크립트안에 있는 css코드를 브라우저가인식/css-loader:css파일 bundle
            },
            {   //image파일 설정
                test: /\.png$/, //img 정규표현식
                use: [{ //file-loader:img파일 bundle
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]?[hash]' //webpack변수중에 name과 ext는 원본파일의 이름과 확장자를 담고있음 // ?[hash]:파일을 호출할때 최신파일을 호출
                        //뒤에 해시값을 넣어줌으로써 브라우저가 가지고있는 이미지캐시를 사용x

                        //publicPath: '../dist' //img 경로설정
                    }
                }] 
            }
        ]
    },
    plugins:[ //플러그인 설정 : html 번들
        new HtmlWebpackPlugin({
            template: './src/index.html' //템플리파일의 위치를 지정 , index html도 webpack이 만들기떄문에 주소를 따로 설정하지않아도x
        }),
        new CleanWebpackPlugin() //호출하면 자동으로 기존에 있던 dist폴더를 삭제하고 webpack을 실행
    ]
}