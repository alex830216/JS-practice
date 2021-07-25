const lists = [2, 4, 1, 8, 7, 3, 5]

// for ... of 
for (xx of lists) {
  console.log(xx);
}

// 傳統 for
for (let i = 0; i < lists.length; i++) {
  console.log(lists[i]);
}

// HOF for
lists.forEach( (el) => {
  console.log(el);
})