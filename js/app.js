// Declare Deck Variables

let whtDeck = []
let blkDeck = []
let mainCard = []

let whtDeckEl = document.getElementById('whtDeck')
let blkDeckEl = document.getElementById('blkDeck')
let mainCardEl = document.getElementById('mainCard')

document.getElementById('whtDeck').addEventListener('click',() => {
  document.querySelectorAll('cardSet')})
document.getElementById('blkDeck').addEventListener('click',() => {
  console.log('clicked black deck')})
document.getElementById('mainCard').addEventListener('click',() => {
  console.log('clicked main card')})
document.getElementById('startBtn').addEventListener('click',() => {
  console.log('clicked start button')})
document.getElementById('stopBtn').addEventListener('click',() => {
  console.log('clicked stop button')})


init ()

function init() {
  whtDeck = ['w00','w01','w02','w03','w04','w10','w11','w12','w13','w14','w20','w21','w22','w23','w24','w30','w31','w32','w33','w34','w40','w41','w42','w43','w44']
  blkDeck = ['b00','b01','b02','b03','b04','b10','b11','b12','b13','b14','b20','b21','b22','b23','b24','b30','b31','b32','b33','b34','b40','b41','b42','b43','b44']
}
// function render(themePicked) {
//   if (whtDeckEl)
// }