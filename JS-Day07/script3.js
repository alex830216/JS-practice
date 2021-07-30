  // 第3.7步:回傳所有.list內所有li，
  // 用function statement去寫可以讓他在相互呼叫時不會出錯
  function itemList() {
    return document.querySelectorAll(".list li")
  }
  // 第3.6步:回傳itemList()長度
  function itemCount() {
    return itemList().length
  }
  // 第3.5步:更新購物車旁邊數字以及顯示有無商品在購物車
  function updateState() {
    let stateLabel = document.querySelector("#state")
    let countLabel = document.querySelector("#count")
    // 計算購物清單(li)的個數也就是取他的長度
    let count = itemCount()
    // 更改countLabel的值
    countLabel.textContent = count
    // 如果沒有清單就顯示"目前沒有任何商品"，有就不顯示
    if (count === 0) {
      stateLabel.textContent = "目前沒有任何商品"
    } else {
      stateLabel.textContent = ""
    }
  }
  // 第三步:把點擊到的商品加進來，參數item = 新創造出來的li 
  const addToCart = (item) => {
    // 先選到大區塊  
    let shoppingList = document.querySelector(".list")
    // 把新創造出來的li加到大區塊裡面，讓他顯示出來
    shoppingList.appendChild(item)
    // 加進來後要更新狀態
    updateState()
  }
  // 第一步:對DOM文件加監聽器
  document.addEventListener("DOMContentLoaded", () => {
    // 第四步:可以一鍵清空購物清單  
    document.querySelector("#emptyCart").addEventListener("click", (e) => {
      // allItems=選到所有清單
      const allItems = itemList()
      // 如果有購物清單就把全部刪掉  
      if (allItems.length > 0) {
        allItems.forEach(item => {
          item.remove()
        })
      }
      // 更新購物車旁邊數字
      updateState()
    })
    // 第2.5步:點x刪除購物清單
    document.querySelector(".list").addEventListener("click", (e) => {
      // 如果點到的物件的class是"closeBtn"就把他的父層刪除，
      // 並更新狀態
      if (e.target.className === "closeBtn") {
        e.target.parentNode.remove()
        updateState()
      }
    })
    // 第二步:點擊後創造購物清單
    document.querySelector("#productArea").addEventListener("click", (e) => {
      // 阻止 a 標籤做預設動作(切換頁面)   
      e.preventDefault()
      // link = e.target代表我點擊到的對象  
      let link = e.target
      // data = 抓取我點擊到有寫data-的屬性的對象
      let data = link.dataset
      // id = 抓取 data-後面是product-id的屬性的值
      let id = data.productId
      // 判斷id = data-product-id 的值的話就執行以下指令  
      if (id) {
        // 創造 li 跟 button 標籤  
        const el = document.createElement("li")
        const btn = document.createElement("button")
        // 在btn也就是button裡，更改內文為 "X"
        btn.textContent = "X"
        // 新增btn的class值為"closeBtn"，給第2.5步使用
        btn.className = "closeBtn"
        // 將el的內文更改成id值
        el.textContent = id
        // 追加btn到el裡面，並顯示出來
        el.appendChild(btn)
        
        // 把shoppingList抽到外面用addToCart函式做
        // 丟li進去當addToCart的參數
        addToCart(el)
      }
    })
  })