//es2016
//module 
//하지만 모든 브라우저에서 module을 지원하지않는다 -> webpack이 나오는 계기
export default function sum(a,b){
    return a+b
}

//IIFE방식을 사용하면 밑에처럼 전역스코프가 오염되는것을 예방할 수 있다
//함수내에 있는 스코프는 외부로부터 독립적이기 때문에
// var math = math||{}

// (function() {
//     function sum(a, b) {
//       return a + b;
//     }
//     math.sum = sum //외부에서 sum함수 간접적으로 사용하기위해
//   })()


// function sum(a,b){
//     return a+b
// }
