// 不用處理this
// const hi = () => {
//     console.log("hello")
// }

// 要處理this用這個
setTimeout (function() {
    console.log("hello")
} ,2000);


// setTimeout(() => {console.log("hello")},2000)