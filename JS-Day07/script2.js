document.addEventListener("DOMContentLoaded", () => {
    // 第二步，把移除拉到最上面寫，why???
    document.querySelector(".list").addEventListener("click", (e) => {
    // 當我點到的對象的class值是"closeBtn"時，我就移除我點擊對象的父層
      if (e.target.className === "closeBtn") {
        e.target.parentNode.remove()
      }
    })
    // 第一步
    document.querySelector("#productArea").addEventListener("click", (e) => {
      e.preventDefault()
      // link = e.target代表我點擊到的對象
      let link = e.target
      // data = 抓取我點擊到有寫data-的屬性的對象
      let data = link.dataset
      // id = 抓取 data-後面是product-id的屬性的值
      // id 會根據目前點到的對象 = u-123或u-456
      let id = data.productId
      let shoppingList = document.querySelector(".list")
      // 判斷id = data-product-id 的值的話就執行以下指令
      if (id) {
        // 創造 li 跟 button 標籤
        const el = document.createElement("li")
        const btn = document.createElement("button")
        // 在btn也就是button裡，更改內文為 "X"
        btn.textContent = "X"
        // 新增btn的class值為"closeBtn"，給第二步使用
        btn.className = "closeBtn"
        // 將el的內文更改成id
        el.textContent = id
        // 追加btn到el裡面，並顯示出來
        el.appendChild(btn)
        // 追加el到shoppingList裡面，並顯示出來，(在ul裡面的最後添加li標籤)
        shoppingList.appendChild(el)
      }
    })
  })