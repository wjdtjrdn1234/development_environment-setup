const path = require('path')

module.exports = { //es6 x node module system

    mode: "development",
    entry:{
        main:'./src/app.js'//시작파일
    },
    output:{
        path: path.resolve('./dist'),//아웃풋 디렉토리명(절대경로)
        filename: '[name].js'//엔트리가 여러개일경우 output이름을 동적으로 만들어내는 역활을함 
    }

}