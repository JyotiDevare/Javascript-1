const element = document.querySelector('#selectme')
element.innerHTML = "This is from JS"

element.style.color = "cyan"
element.style.fontsize = "40px"
// element.style = "display:none"
console.log(element.classList)

const body = document.querySelector('body')
// console.log(body.classList.toggle('dark'))
const value = element.classList.contains('three')

console.log(value)