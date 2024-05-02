const saveEl = document.querySelector("#save-el")
const countEl = document.querySelector("#count-el")
const saveBtn = document.querySelector("#save-btn")
const incBtn = document.querySelector("#increment-btn")

let count = 0

incBtn.addEventListener('click', () => {
    count += 1
    countEl.textContent = count
})

saveBtn.addEventListener('click', () => {
    let countStr = `${count} - `
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
})