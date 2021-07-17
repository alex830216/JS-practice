    // addEventListener(事件,做啥)
    document.addEventListener("DOMContentLoaded", () => {

    // 三秒後換字
    // 有點囉嗦，可以把function寫進去setTimeout就好
    // const h = document.querySelector("#hi")
    // function changenum(){
    //     h.innerHTML = "456"
    // }
    // 這樣比較好
    // setTimeout(() => {h.innerHTML = "456"}, 3000);

    // 按完按鈕換字
    const btn = document.querySelector("#btn")
    
    btn.addEventListener("click", () => {
        const h = document.querySelector("#hi")
        h.innerHTML = "被按了"
        // h.innerText = "被按了"
    })



})