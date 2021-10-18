// Declare Deck Variables

let whtDeck = []
let blkDeck = []
let mainCard = []

let whtDeckEl = document.getElementById('whtDeck')
let blkDeckEl = document.getElementById('blkDeck')
let mainCardEl = document.getElementById('mainCard')

document.getElementById('whtDeck').addEventListener('click',() => {
  console.log('clicked white deck')})
document.getElementById('blkDeck').addEventListener('click',() => {
  console.log('clicked black deck')})
document.getElementById('mainCard').addEventListener('click',() => {
  console.log('clicked main card')})
document.getElementById('startBtn').addEventListener('click',() => {
  console.log('clicked start button')})
document.getElementById('stopBtn').addEventListener('click',() => {
  console.log('clicked stop button')})
