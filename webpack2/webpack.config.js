const path = require("path");//node에서 제공되는 path모듈사용
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js", //시작파일
  output: {
    filename: "main.js",//파일명
    path: path.resolve(__dirname, "dist"),//폴더명
  },
  module: {
    rules: [
      {
        test: /\.css$/, //css파일 bundle되게
        // use: ["style-loader", "css-loader"], //css-loader:css파일을 읽어줌 , style-loader: css를 스타일태그로 만들어 head내부에 넣어줌
        use: [MiniCssExtractPlugin.loader, "css-loader"], //external 방식으로 css파일을 추가하는방식
      },
      {
        test: /\.png$/, //img파일 bundle되게
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ //html파일도 build되게 설정해주는 플러그인
      template: "./index.html", //template: 기존에 만들어진 파일을 이용해 html을 만듬
    }),
    new MiniCssExtractPlugin({ ///external 방식으로 css파일을 추가해주는 플러그인
      filename: "common.css", //파일명
    }),
    new CleanWebpackPlugin(), //build를 새로할때 이전 build파일을 제거해주는 플러그인
  ],
  devServer: { //devserver 설정->개발서버가 dist파일 제공
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
  },
};
