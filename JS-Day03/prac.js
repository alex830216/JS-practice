for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
 
  // 注意有兩個參數!!!
  // 第一個參數 () => console.log(i)
  // 第二個參數 1


 for (var i = 0; i < 3; i++) {
   const setTimeout = () => {
   console.log(i);
   }, 1);  
 }