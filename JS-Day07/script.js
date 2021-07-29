// 未完成

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#productArea").addEventListener("click", (e) => {
      e.preventDefault()
      const tar = e.target
      const data = tar.dataset
      const id = dataProductId
      const list = document.querySelector(".list")
      if (id = true) {
          console.log(id)
          const element = document.createElement("li")
          element.textContent = id
          list.appendChild(element)
      }
    })
  })