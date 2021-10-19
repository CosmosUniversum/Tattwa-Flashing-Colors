/*----------------- Constants -----------------*/

let whtTheme = []
let blkTheme = []
let mainCard = []
let timerIntervalId
let min, sec, seconds = 0
/*------------- Variables (state) -------------*/

/*--------- Cached Element References ---------*/
whtThemeCardEl = document.getElementById('whtThemeCard')
blkThemeCardEl = document.getElementById('blkThemeCard')
mainCardEl = document.getElementById('mainCard')
cardGridEl = document.getElementById('cardGrid')
cardsEl = document.getElementById('card')
startBtnEl = document.getElementById('startBtn')
resetBtnEl = document.getElementById('resetBtn')
timerEl = document.getElementById('timer')

/*-------------- Event Listeners --------------*/

whtThemeCardEl.addEventListener('click',() => {
  document.querySelectorAll('#card').forEach((card) => {
    card.classList.replace('blk', 'wht')
  })})

blkThemeCardEl.addEventListener('click',() => {
  document.querySelectorAll('#card').forEach((card) => {
    card.classList.replace('wht', 'blk')
  })})

cardGridEl.addEventListener('click',(evt) => {
  if (evt.target.id === 'card') {
    mainCardEl.classList.value = evt.target.classList.value.replace('small', 'mainCard')
  }
})

mainCardEl.addEventListener('click',() => {
  console.log('clicked main card')})

startBtnEl.addEventListener('click',() => {
  startBtnEl.textContent = (startBtnEl.textContent === 'Start') ? 'Stop' : 'Start'
  if (timerIntervalId) {
    clearInterval(timerIntervalId)
    timerIntervalId = null
  } else {
  startTimer();
  }
})

resetBtnEl.addEventListener('click',() => {
  startBtnEl.textContent = 'Start'
  clearInterval(timerIntervalId)
  seconds = 0
  timerIntervalId = null
  render()
})
/*----------------- Functions -----------------*/





init ()

function tick() {
  seconds++
  render()
}

function startTimer(){
  timerIntervalId = setInterval(tick, 1000)
}

function init() {
  whtDeck = ['w00','w01','w02','w03','w04','w10','w11','w12','w13','w14','w20','w21','w22','w23','w24','w30','w31','w32','w33','w34','w40','w41','w42','w43','w44']
  blkDeck = ['b00','b01','b02','b03','b04','b10','b11','b12','b13','b14','b20','b21','b22','b23','b24','b30','b31','b32','b33','b34','b40','b41','b42','b43','b44']
}

function render() {
  min = Math.floor(seconds / 60);
  hr = Math.floor(seconds / 3600);
  sec = seconds % 60;
  min = min % 60;
  (sec < 10) ? timerEl.innerText = `${min}:0${sec}` : timerEl.innerText = `${min}:${sec}`
}
