debugger
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#start-btn")
    btn.addEventListener("click", () => {
        let i = 0
        setInterval(() => {
            const changetime = document.querySelector("#timer")
            i = i + 1
            changetime.innerText = i
        }, 1000)
    })
})