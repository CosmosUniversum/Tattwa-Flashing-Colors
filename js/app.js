/*----------------- Constants -----------------*/
let whtTheme = []
let blkTheme = []
let mainCard = []
let timerIntervalId
let min, sec, seconds = 0
createColorResultsLi = document.createElement('li')
createTimeResultsLi = document.createElement('li')
createCardLogLi = document.createElement('li')
// let logs = document.querySelectorAll('log')
let loggedCard = [null]

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
timeLimitEl = document.getElementById('timeSelect')
checkMainCard = mainCardEl.classList.value.includes('outline')
logBtnEl = document.getElementById('logBtn')
userColorInputEl = document.getElementById('userColor')
colorResultsEl = document.getElementById('colorResults')
timeResultsEl = document.getElementById('timeResults')
cardLogEl = document.getElementById('cardElement')
clearLogBtnEl = document.getElementById('clearLogBtn')
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
    mainCardEl.classList.value = evt.target.classList.value.replace('small', 'mainCard');
    loggedCard = evt.target.classList.value;
  }
})

mainCardEl.addEventListener('click',() => {
  console.log('clicked main card')})

timeLimitEl.addEventListener('click', (evt) =>{
  if (evt.target.value === '') {
  }else if(evt.target.value < 10) {
    timerEl.innerText = `${evt.target.value}:00`;
    seconds = 60
  } else{
    timerEl.innerText = `0:${evt.target.value}`;
    sec, seconds = evt.target.value
  }
})

startBtnEl.addEventListener('click',() => {
  if (timerEl.innerText === '0:00' || mainCardEl.classList.value.includes('outline')){
  } else{
  startBtnEl.textContent = (startBtnEl.textContent === 'Start') ? 'Stop' : 'Start';
  if (timerEl.value === 0){
    console.log('its zero')
  } else{
  if (timerIntervalId) {
    clearInterval(timerIntervalId)
    timerIntervalId = null
  } else {
  startTimer();
  }}}
})

resetBtnEl.addEventListener('click',() => {
  startBtnEl.textContent = 'Start'
  clearInterval(timerIntervalId)
  timerIntervalId = null
  if (timeLimitEl.value === null){
    seconds = 0
  } else {
    timeLimitEl.value < 10 ? console.log(timerEl.innerText = `${timeLimitEl.value}:00`)  : seconds = timeLimitEl.value;
  }
  resetCard()
  render()
  loggedCard = [null]
})

logBtnEl.addEventListener('click',() => {
  if (userColorInputEl.value === '' || mainCardEl.classList.value.includes('outline') || timerEl.innerText === '0:00') {
  }else{
    
    let newUserInput = document.createElement('li');

    newUserInput.textContent = userColorInputEl.value;
    colorResultsEl.appendChild(newUserInput);

    let newTime = document.createElement('li');

    newTime.textContent = timerEl.innerText;
    timeResultsEl.appendChild(newTime);

    let newCard = document.createElement('li');
    
    newCard.classList = loggedCard.replace('small', 'xsmall');
    cardLogEl.appendChild(newCard);
  }
})

// clearLogBtnEl.addEventListener('click', () =>{
//   let logs = document.querySelectorAll('log')
//   while (logs.firstchild) {
//     logs.removeChild(logs.firstchild);
//   }
// })


/*----------------- Functions -----------------*/





init ()
function resetCard () {
  mainCardEl.classList.value = "card outline mainCard"
}
function removeMainCard () {
  if (mainCardEl.classList.value.includes('outline')) {}
    else {
      if (seconds === 0){
        mainCardEl.classList.value.includes('wht') ? mainCardEl.classList.value = "card wht plain mainCard shadow" : mainCardEl.classList.value = "card blk plain mainCard shadow"
        }
    }
  }

function tick() {
  mainCardEl.classList.value.includes('plain') ? seconds++ : seconds--
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
  removeMainCard ()
  min = Math.floor(seconds / 60);
  sec = seconds % 60;
  min = min % 60;
  if (sec < 0) {
  } else if (sec < 10) {
    timerEl.innerText = `${min}:0${sec}`
  } else {
    timerEl.innerText = `${min}:${sec}`;
  } 
}
