/* eslint-disable no-undef */
const path = require("path"); //node path module
const webpack = require("webpack");
const childProcess = require("child_process"); //깃 명령어가능
const HtmlWebpackPlugin = require("html-webpack-plugin"); //html도 빌드가능
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //build시 이전 build 결과물 삭제
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//es6가아닌 node가 사용할 모듈시스템
module.exports = {
  mode: "development", //개발환경
  entry: {
    main: "./src/app.js" //모듈의 시작점
  },
  output: {
    filename: "[name].js", //결과 파일이름
    path: path.resolve("./dist") //절대경로계산해주는 resolve
  },

  // eslint-disable-next-line prettier/prettier
  devServer: {
    //webpack dev server 세팅 -> 실행명령어는 npm start(package.json에서 설정)
    overlay: true, //웹팩으로 빌드시  에러,경고문구를 브라우저에 표시
    stats: "errors-only", //메시지수준(5가지중 하나인 erros-only)
    // before: (app, server, compiler) => {
    //   app.use(apiMocker('/api', 'mocks/api'));
    // },

    before: app => {
      //before함수는 server객체를 받는다. 즉 웹팩개발서버를 받음,
      app.get("/api/users", (_req, res) => {
        res.json([
          { id: 1, name: "Alice" },
          { id: 2, name: "Zimmy" }
        ]);
      });
    },
    proxy: {
      //api 서버 프록싱 설정을 추가하세요
      "/api": "http://localhost:8081"
    },
    hot: true
  },
  module: {
    //로더 js뿐만아닌 다른파일도 모듈로처리해서 번들해줌
    rules: [
      {
        test: /\.(scss|css)$/, //로더가 처리해야될 파일들의 패턴(정규표현식)
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader", //style-loader:자바스크립트파일에서 css파일을 불러올수 있음(html파일에서 css직접불러오기 안해도됨)
          "css-loader", //css파일을 만나면 css-loader가 처리함
          "sass-loader" //sass,scss파일 처리
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader", //이미지파일도 번들 (파일복사: file-loader,특정크기미만 js문자열처리: url-loader)
        options: {
          publicPath: "./dist/", //파일로더가 처리하는파일을 모듈로 사용했을때 경로를추가(index.html파일이 dist에 있는경우 사용x)
          name: "[name].[ext]?[hash]", //파일로더가 파일을 아웃풋에 복사할때 사용되는 파일명 [원본파일명].[파일확장자][캐쉬무력화를 위해 매번다른 해쉬값 적용]
          limit: 10000 //파일용량 10kb // 10kb미만은 url-loader로 처리->자바스크립트 문자열로 처리 , 이상이면 file-loader가 처리->파일복사
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader" // 바벨이 통합할수 있도록 해주는 로더 // use:["babel-loader"] 이런식도 가능
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      //빌드된파일에 주석을 추가해주는 플러그인
      banner: `Build Data:${new Date().toLocaleDateString()} 
        Commit Version:${childProcess.execSync(
          "git rev-parse --short HEAD"
        )}//childProcess로 터미널 명령어 실행가능(깃 커밋 버젼)
        Author: ${childProcess.execSync("git config user.name")}
        `
    }),
    new webpack.DefinePlugin({
      //개발환경,운영환경의 환경정보를 제공해줌
    }),
    new HtmlWebpackPlugin({
      //html도 빌드가능 (따로설치해야됨)
      template: "./src/index.html", //template 경로
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "production" //템플릿에 넣어줄 변수값
      },
      minify:
        process.env.NODE_ENV === "development" //디버깅위해 개발모드에서만 적용
          ? {
              collapseWhitespace: true, //빈칸제거
              removeComments: true //주석제거
            }
          : false
    }),
    new CleanWebpackPlugin(), //build시 이전 build 결과물 삭제 (따로설치해야됨)
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: "[name].css" })] //스트일시트 코드만 뽑아서 별도의 CSS 파일로 만들어 역할에 따라 파일을 분리
      : []) //브라우져에서 큰 파일 하나를 내려받는 것 보다, 여러 개의 작은 파일을 동시에 다운로드하는 것이 더 빠르다. //다른 플러그인 설정과 다르게 로더설정도 해줘야함
  ]
};
