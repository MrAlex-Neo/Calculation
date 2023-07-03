const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = C.width = innerWidth,
  H = C.height = innerHeight 
const str = "010010101010010100000110101001010100 010010 00 10 010 10 010 10010 010 100 10 10 010010 010 10 10 010 01 111 010 010 010 01 010010010 10 100 1",
  matrix = str.split('')

let font = 11,
  col = W / font
  arr = []

for(let i = 0; i < col; i++) arr[i] = 1

function draw() {
  $.fillStyle = "rgba(0, 0, 0, 0.1)"
    
  $.fillRect(0, 0, W, H)
    
  $.fillStyle = "#0f0"
    
  $.font = font + "px system-ui"
    
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)]
    $.fillText(txt, i * font, arr[i] * font)
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0
    arr[i]++
    }
}

setInterval(draw, 123)

window.addEventListener('resize', () => location.reload())

// this is background matrix. up the page
// __________________________________________

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const resultElement = document.getElementById('result')
const sign = document.querySelectorAll('.signs button')
let action = "+"

sign.forEach( btn => {btn.addEventListener('click', userSymbolForCalc)})

function userSymbolForCalc() {
  let btn = event.target
  action = btn.innerHTML
}
function computeNumbersWithAction(input1, input2, actionSymbol){
  const num1 = Number(input1.value)
  const num2 = Number(input2.value)
  return actionSymbol == '+' ? num1 + num2 : actionSymbol == '-' ? num1 - num2 : actionSymbol == '*' ? num1 * num2 :  num1 / num2  
}
submitBtn.onclick = function(){
  const result = computeNumbersWithAction(input1, input2, action)
  result < 0 ? resultElement.style.color = 'red' : resultElement.style.color = 'green'
  resultElement.textContent = result
}























// function calc(){
//   num1 = +(num1.value)
//   num2 = +(num2.value)
//   let resul
//   let action = "+"

//   sign.forEach( btn => {
//     btn.addEventListener('click', howToRecognizeTheSymbol)
//   })
//   function howToRecognizeTheSymbol() {
//     let btn = event.target
//     action = btn.innerHTML
//     action == '+' ? resul = num1 + num2 : action == '-' ? resul = num1 - num2 :action == '*' ? resul = num1 * num2 : resul = num1 / num2
//     // if (action == '+') {
//     //   return resul = num1 + num2
//     // }else if (action == '-') {
//     //   return resul = num1 - num2
//     // }else if (action == '*') {
//     //   return resul = num1 * num2
//     // }else if (action == '/') {
//     //   return resul = num1 / num2
//     // }
//     return resul
//   }

//   answer.onclick = function () {result.textContent = resul}
// }
// calc()

