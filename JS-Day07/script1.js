document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#c-123 button").addEventListener("click", (e) => {
    //  參數 e 是事件物件(Event Object)，裡面包含了所有與這個事件有關的屬性，並以參數形式傳進來
    // e.target代表我點擊到的對象
    // 移除我點擊到的對象的父層
      e.target.parentNode.remove()
    })
  
    document.querySelector("#c-777 button").addEventListener("click", (e) => {
      e.target.parentNode.remove()
    })
  
    document.querySelector("#productArea").addEventListener("click", (e) => {
      e.preventDefault()
      // link = e.target代表我點擊到的對象
      let link = e.target
      // data = 抓取我點擊到有寫data-的屬性的對象
      let data = link.dataset
      // id = 抓取 data-後面是product-id的屬性的值
      let id = data.productId
      let shoppingList = document.querySelector(".list")
      // 如果id是true
      if (id) {
        // 創造 li 跟 button 標籤
        const el = document.createElement("li")
        const btn = document.createElement("button")
        // 在btn也就是button裡，更改內文為 "X"
        btn.textContent = "X"
        
        el.textContent = id
        // 追加btn到el裡面，並顯示出來
        el.appendChild(btn)
        // e.target代表我點擊到的對象
        // 移除我點擊到的對象的父層
        el.addEventListener("click", (e) => {
          e.target.parentNode.remove()
        })
        // 追加el到shoppingList裡面，並顯示出來，(在ul裡面的最後添加li標籤)
        shoppingList.appendChild(el)
      }
    })
  })