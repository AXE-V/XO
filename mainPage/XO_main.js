alert(`Логин: 1, Пароль: 1`)
alert(`Для того чтобы сыграть нужно пригласить игрока на вкладке "Активыне игроки", потом перейти на игровое поле, подождать пока игрок присоединится, а затем нажать "Готов"`)

// авторизация

let people = {
  login: '1',
  password: '1',
  name: 'Еремин Илья Никитич',
  percent: '85% побед',
  player: 'o'
}

let authorization = document.querySelector('.authorization')
let wrapper = document.querySelector('.wrapper')

let players_fio = document.querySelectorAll('.players_fio')
let players_state = document.querySelectorAll('.players_state')

const myForm = document.forms.form_au
let myInput = myForm.loginInput
let myPassword = myForm.passwordInput
let txt = document.querySelectorAll('.txt_au')

myInput.oninput = () => (myInput.value && myPassword.value) ? 
button.style.backgroundColor = '#60C2AA' : 
button.style.backgroundColor = 'rgba(96, 194, 170, 0.3)'

myPassword.oninput = () => (myInput.value && myPassword.value) ? 
button.style.backgroundColor = '#60C2AA' : 
button.style.backgroundColor = 'rgba(96, 194, 170, 0.3)'

function handler(event) {
if (myInput.value && myPassword.value) {

  if ((myInput.value === people.login) && (myPassword.value === people.password)) {
    // window.location.href = '../mainPage/XO_main.html'
    authorization.style.display = 'none'
    wrapper.style.display = 'grid'
    document.body.style.display = 'block'

    players_fio[0].innerHTML = people.name
    players_state[0].innerHTML = people.percent
    player_name_msg[0].innerHTML = players_fio[0].textContent.split(' ').slice(0, 2).join(' ')
  }

  if (myInput.value && myPassword.value) {
    myInput.style.border = '1px solid #E93E3E'
    myPassword.style.border = '1px solid #E93E3E'
  }

  if ((myInput.value !== people.login) && (myPassword.value !== people.password)) {

    if (document.querySelectorAll('.invalid_value').length < 2) {
    var article = document.querySelectorAll('.input_full')[0]
    var div = document.createElement('div')
    div.className = 'invalid_value'
    div.textContent = `Неверный ${txt[0].textContent.toLowerCase()}`
    article.appendChild(div)
    
    article = document.querySelectorAll('.input_full')[1]
    div = document.createElement('div')
    div.className = 'invalid_value'
    div.textContent = `Неверный ${txt[1].textContent.toLowerCase()}`
    article.appendChild(div)
    }   

  }
}
}

button = document.getElementById('bth')
button.addEventListener('click', handler)

button.onmouseover = () => (myInput.value && myPassword.value) ? 
button.style.backgroundColor = '#429E89' :
button.style.backgroundColor = 'rgba(96, 194, 170, 0.3)'

button.onmouseout = () => (myInput.value && myPassword.value) ?
button.style.backgroundColor = '#60C2AA' :
button.style.backgroundColor = 'rgba(96, 194, 170, 0.3)'


// ТАБЫ (игровое поле)

const tabItems = Array.from(document.querySelectorAll('.tab-item'))
const contentItems = Array.from(document.querySelectorAll('.content-item'))

const clearActiveClass = (element, className = 'is-active') => {
  element.find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'is-active') => {
  element[index].classList.add(`${ className }`)
}

let player_name_msg = document.querySelectorAll('.player_name_msg')

let signal
const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
    
    if (item.classList.contains('is-active')) return
    console.log(item)
  
    clearActiveClass(tabItems)
    clearActiveClass(contentItems)
    
    setActiveClass(tabItems, index)
    setActiveClass(contentItems, index)

    if (document.querySelector('.play_window').classList.contains('is-active') && invited.length > 0) {
      setTimeout(() => {
        let ind = Math.floor(Math.random() * invited.length)
        invited[ind]
        invited_name = playerNames2[invited[ind]]
        invited_percent = Math.floor(Math.random() * (89 - 20) + 20)
      
        players_fio[1].innerHTML = invited_name
        players_state[1].innerHTML = `${invited_percent}% побед`

        player_name_msg[1].innerHTML = players_fio[1].textContent.split(' ').slice(0, 2).join(' ')

        signal = document.createElement('div')
        signal.className = 'players_signal'
        signal.classList.add('ready')
        document.querySelectorAll('.player')[1].append(signal)
      }, 2000);    
    }
  })
}

tabItems.forEach(checkoutTabs)


// Рейтинг

let playerNames = [
  'Андреева Софья Никитична',
  'Касаткин Михаил Павлович',
  'Лукьянов Николай Владимирович',
  'Шевцова Маргарита Артёмовна',
  'Иванов Савелий Глебович',
  'Трифонов Иван Егорович',
  'Шестакова Арина Владиславовна',
  'Крылова Юлия Данииловна',
  'Румянцева Аврора Михайловна',
  'Козлова Полина Максимовна',
  'Бобров Даниил Эминович',
  'Гаврилова Василиса Егоровна',
  'Потапова Юлия Демидовна'
]

function Players(fio, games, wins, loses, percent) {
  this.fio = fio
  this.games = games
  this.wins = wins
  this.loses = loses
  this.percent = percent
}

document.querySelector('.rating_players').innerHTML = `<table class="players_table"></table>`

var player = new Players()
let min = 10, max = 30000

let row = document.createElement('tr')
row.innerHTML = `
<th class="td_fio_cap">ФИО</th>
<th class="td_game_cap">Всего игр</th>
<th class="td_wins_cap">Победы</th>
<th class="td_loses_cap">Проигрыши</th>
<th class="td_percent_cap">Процент побед</th>`
document.querySelector('.players_table').append(row)

function RandomPlayerData(min, max, len) {

  for (let i = 0; i < len; i++) {

    player.fio = playerNames[i]
    player.games = Math.floor(Math.random() * (max - min) + min)

    let wins = Math.floor(Math.random() * (max - min) + min)

    while (wins > player.games) {
      wins = Math.floor(Math.random() * (max - min) + min)
    }
    
    player.wins = wins
    player.loses = player.games - player.wins
    player.percent = (player.wins * 100 / player.games).toFixed(0) + '%'

    row = document.createElement('tr')

    row.innerHTML = `
      <td class="td_fio">${player.fio}</td>
      <td class="td_game">${player.games}</td>
      <td class="td_wins">${player.wins}</td>
      <td class="td_loses">${player.loses}</td>
      <td class="td_percent">${player.percent}</td>`
    document.querySelector('.players_table').append(row)

  }  
}

RandomPlayerData(min, max, playerNames.length)

// Активные игроки

let playerNames2 = [
  'Сорокина Анна Фёдоровна',
  'Чернышева Алина Камильевна',
  'Лукьянов Николай Владимирович',
  'Ларин Давид Игоревич',
  'Ильин Иван Романович',
  'Кузнецов Андрей Тимофеевич',
  'Козлов Алексей Артёмович',
  'Кузнецова Дарина Артёмовна',
  'Романов Давид Даниилович'
]

function Players2(fio, status, call) {
  this.fio = fio
  this.status = status
  this.call = call
}

let player2 = new Players2()
document.querySelector('.activePlayers_content').innerHTML = `<table class="players_table2"></table>`

function RandomPlayerData2(len) {

  for (let i = 0; i < len; i++) {

    player2.fio = playerNames2[i]
    let status = Math.floor(Math.random() * (2 - 0) + 0)
    
    switch (status) {
      case 0:
        player2.status = 'Свободен'
        break;
      case 1:
        player2.status = 'В игре'
        break;
    }    
    player2.call = 'Позвать играть'
    
    row = document.createElement('tr')

    row.innerHTML = `
      <td class="td_fio">${player2.fio}</td>
      <td class="td_status">${player2.status}</td>
      <td class="td_call">${player2.call}</td>`
    document.querySelector('.players_table2').append(row)

  }  
}

RandomPlayerData2(playerNames2.length)

let inGame
inGame = document.querySelectorAll('.td_status')

inGame.forEach(e => {
  if (e.textContent == 'В игре') {
    e.style.backgroundColor = 'rgba(135, 202, 232, 1)'
  }
});

let call_check = false
let invited = []
let invited_name
let invited_percent
let CallPlayer = (item, ind) => {
  item.addEventListener('click', () => {
    if (!call_check) {
      call_check = true
      item.style.backgroundColor = 'rgba(247, 247, 247, 1)'
      invited.push(ind)
    }
    setTimeout(() => {
      item.style.backgroundColor = '#60C2AA'
      if (document.querySelector('.activePlayers_window').classList.contains('is-active')) {
        invited.splice(0, invited.length)    
      }       
    }, 60000);
    call_check = false

  })
}

let bth_call = document.querySelectorAll('.td_call')
bth_call.forEach(CallPlayer)

let signal1, signal2, current_move
function PlayerIsReady() {
  signal1 = document.querySelectorAll('.players_signal')[0]
  signal1.classList.add('ready')
  signal2 = document.querySelectorAll('.players_signal')[1]
  current_move = document.querySelector('.current_move')

  if (signal1.classList.contains('ready') && signal2.classList.contains('ready')) {
    setTimeout(() => {
      signal1.style.display = 'none'
      signal2.style.display = 'none'
      play.style.display = 'none'
      current_move.style.display = 'grid'
      Timer()
      game_grid.addEventListener('click', CellListener);
    }, 500);
  }
}

let play = document.querySelector('.play')
play.addEventListener('click', PlayerIsReady)


// Таймер

let time = document.querySelector('time'),
stopTimer,
resetTimer,
second = 0, minute = 0,
t

function Tick(){
    second++;
    if (second >= 60) {
        second = 0;
        minute++;
        if (minute >= 60) {
            minute = 0;  
        }
    }
}
function AddTick() {
    Tick();
    time.textContent = (minute > 9 ? minute : "0" + minute)
       		 + ":" + (second > 9 ? second : "0" + second);
    Timer();
}
function Timer() {
    t = setTimeout(AddTick, 1000);
}

stopTimer = () => {
  clearTimeout(t)
}
resetTimer = () => {
  time.textContent = '00:00'
  second = 0, minute = 0
}

// Игра

let game_grid = document.querySelector('.game_grid'),
// res = document.querySelector('.res'),
newGameBth = document.querySelector('.newGameBth'),
cells = document.querySelectorAll('.cell'),
check_step = false,

x = `             <svg width="155" height="163" viewBox="0 0 155 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_di_9_273)">
<path d="M138.194 15.5872C134.375 11.5624 128.206 11.5624 124.386 15.5872L79.4018 62.8971C77.8239 64.5565 75.1776 64.5552 73.6014 62.8941L28.6137 15.484C24.7946 11.4592 18.6252 11.4592 14.806 15.484C10.9869 19.5088 10.9869 26.0104 14.806 30.0352L60.0797 77.7467C61.5443 79.2901 61.5443 81.7099 60.0797 83.2533L14.806 130.965C10.9869 134.99 10.9869 141.491 14.806 145.516C18.6252 149.541 24.7946 149.541 28.6137 145.516L73.5985 98.109C75.1758 96.4468 77.8243 96.4468 79.4016 98.109L124.386 145.516C128.206 149.541 134.375 149.541 138.194 145.516C142.013 141.491 142.013 134.99 138.194 130.965L92.9204 83.2533C91.4559 81.7099 91.4559 79.2901 92.9204 77.7467L138.194 30.0352C141.915 26.1136 141.915 19.5088 138.194 15.5872Z" fill="#60C2AA"/>
<path d="M138.448 15.3463C134.491 11.176 128.09 11.176 124.132 15.3463L79.1481 62.6559C77.7083 64.1702 75.2936 64.1689 73.8553 62.6532L28.8676 15.2431C24.9105 11.0728 18.5093 11.0728 14.5521 15.2431C10.6048 19.4029 10.6048 26.1163 14.5521 30.2761L59.8258 77.9876C61.1622 79.396 61.1622 81.6041 59.8258 83.0124L14.5521 130.724C10.6048 134.884 10.6048 141.597 14.5521 145.757C18.5093 149.927 24.9105 149.927 28.8676 145.757L73.8524 98.35C75.2916 96.8332 77.7085 96.8332 79.1478 98.35L124.132 145.757C128.09 149.927 134.491 149.927 138.448 145.757C142.395 141.597 142.395 134.884 138.448 130.724L93.1743 83.0124C91.8379 81.6041 91.8379 79.396 93.1743 77.9876L138.448 30.2761C142.297 26.2195 142.297 19.4029 138.448 15.3463Z" stroke="white" stroke-width="0.7"/>
</g>
<defs>
<filter id="filter0_di_9_273" x="0.241699" y="0.765381" width="154.517" height="161.469" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feGaussianBlur stdDeviation="6"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.420718 0 0 0 0 0.290978 0 0 0 0 0.338156 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_273"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_273" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2" dy="2"/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.311889 0 0 0 0 0.612384 0 0 0 0 0.54168 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_9_273"/>
</filter>
</defs>
</svg>                                                             `,

o = ` <svg width="177" height="177" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_9_251)">
<circle cx="87.5" cy="87.5" r="66.5" stroke="url(#paint0_radial_9_251)" stroke-width="20"/>
</g>
<defs>
<filter id="filter0_d_9_251" x="0" y="0" width="177" height="177" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="1"/>
<feGaussianBlur stdDeviation="6"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.420718 0 0 0 0 0.290978 0 0 0 0 0.338156 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_251"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_251" result="shape"/>
</filter>
<radialGradient id="paint0_radial_9_251" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87.5 87.5) rotate(90) scale(66.5)">
<stop stop-color="#EB0057"/>
<stop offset="1" stop-color="#E38BAC"/>
</radialGradient>
</defs>
</svg>                                                      `,

count = 0,

Oplayer = `  <svg class="move_part2" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="12" stroke="url(#paint0_radial_17_243)" stroke-width="6"/>
<defs>
<radialGradient id="paint0_radial_17_243" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 15) rotate(90) scale(12)">
<stop stop-color="#EB0057"/>
<stop offset="1" stop-color="#E38BAC"/>
</radialGradient>
</defs>
</svg>`,

Xplayer = ` <svg class="move_part2" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_17_179)">
<path d="M25.1747 0.843519C24.0743 -0.256903 22.2943 -0.256903 21.1939 0.843519L13.7078 8.3143C13.3172 8.70414 12.6846 8.70382 12.2943 8.31357L4.80608 0.825316C3.70566 -0.275105 1.92574 -0.275105 0.825316 0.825316C-0.275105 1.92574 -0.275105 3.70566 0.825316 4.80608L8.31213 12.2929C8.70265 12.6834 8.70265 13.3166 8.31213 13.7071L0.825317 21.1939C-0.275105 22.2943 -0.275105 24.0743 0.825316 25.1747C1.92574 26.2751 3.70566 26.2751 4.80608 25.1747L12.2929 17.6879C12.6834 17.2973 13.3166 17.2973 13.7071 17.6879L21.1939 25.1747C22.2943 26.2751 24.0743 26.2751 25.1747 25.1747C26.2751 24.0743 26.2751 22.2943 25.1747 21.1939L17.6879 13.7071C17.2973 13.3166 17.2973 12.6834 17.6879 12.2929L25.1747 4.80608C26.2569 3.72386 26.2569 1.92574 25.1747 0.843519Z" fill="#60C2AA"/>
</g>
<defs>
<filter id="filter0_i_17_179" x="0" y="0" width="27" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.311889 0 0 0 0 0.612384 0 0 0 0 0.54168 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_17_179"/>
</filter>
</defs>
</svg>   `

function Step_X(target) {
    if (target.innerHTML === '') {
        target.innerHTML = x;
        target.classList.add('x');
        count++;
        check_step = !check_step;
    }
}


function Step_O(target) {
    if (target.innerHTML === '') {
        target.innerHTML = o;
        target.classList.add('o');
        count++;

        check_step = !check_step;
    }
}

let move_part2 = document.querySelector('.move_part2')
let move_part3 = document.querySelector('.move_part3')


function CellListener(e) {
    if(!check_step) {
      Step_O(e.target);
      move_part2.innerHTML = Xplayer
      move_part3.innerHTML = players_fio[1].textContent.split(' ').slice(0, 2).join(' ')
    }
    else {
      Step_X(e.target);
      move_part2.innerHTML = Oplayer
      move_part3.innerHTML = players_fio[0].textContent.split(' ').slice(0, 2).join(' ')
    } 
    Win();   
    console.log(check_step);
}



// const setActiveClass = (element, index, className = 'is-active') => {
//   element[index].classList.add(`${ className }`)
// }


function NewGame() {
    check_step = false
    count = 0
    Win_window.style.display = 'none'
    wrapper.classList.remove('blurred')
    resetTimer()
    Timer()
    game_grid.addEventListener('click', CellListener)
    cells.forEach(item => {
        item.innerHTML = ''
        item.classList.remove('x', 'o', 'x_filled', 'o_filled');
    })   
}

let Win_window = document.querySelector('.Win_window')
function Win() {
  
  let win_name = document.querySelector('.win_name')
  let win_txt1 = players_fio[0].textContent.split(' ').slice(0, 2).join(' ') + ' победил!'
  let win_txt2 = players_fio[1].textContent.split(' ').slice(0, 2).join(' ') + ' победил!'

    let combs = [
        [0,1,2], 
        [3,4,5], 
        [6,7,8],

        [0,3,6], 
        [1,4,7], 
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ]

    for (let i = 0; i < combs.length; i++) {

        if(cells[combs[i][0]].classList.contains('x') && 
        cells[combs[i][1]].classList.contains('x') && 
        cells[combs[i][2]].classList.contains('x')) {
            setTimeout(() => {
              cells[combs[i][0]].classList.add('x_filled');
                cells[combs[i][1]].classList.add('x_filled');
                cells[combs[i][2]].classList.add('x_filled');
          
                Win_window.style.display = 'grid'
                wrapper.classList.add('blurred')
                win_name.textContent = win_txt2
                stopTimer()
            }, 1000);     
            game_grid.removeEventListener('click', CellListener)     
        }

        else if(cells[combs[i][0]].classList.contains('o') && 
        cells[combs[i][1]].classList.contains('o') && 
        cells[combs[i][2]].classList.contains('o')) {
            setTimeout(() => {
              cells[combs[i][0]].classList.add('o_filled');
              cells[combs[i][1]].classList.add('o_filled');
              cells[combs[i][2]].classList.add('o_filled');

                Win_window.style.display = 'grid'
                wrapper.classList.add('blurred')
                win_name.textContent = win_txt1
                stopTimer()
            }, 1000);     
            game_grid.removeEventListener('click', CellListener)     
        }

        else if (count == 9) {
            wrapper.classList.add('blurred')
            alert('Ничья');
            game_grid.removeEventListener('click', CellListener)  
        }
    }
}

newGameBth.addEventListener('click', NewGame);

function InMenu() {
    check_step = false
    play.style.display = 'grid'
    signal1.style.display = 'grid'
    count = 0
    Win_window.style.display = 'none'
    wrapper.classList.remove('blurred')
    current_move.style.display = 'none'
    // signal.classList.remove('.ready')
    signal1.classList.remove('ready')
    signal2.style.display = 'grid'
    resetTimer()
    game_grid.removeEventListener('click', CellListener)
    cells.forEach(item => {
        item.innerHTML = ''
        item.classList.remove('x', 'o', 'x_filled', 'o_filled');
    })  
}

let menuBth = document.querySelector('.menuBth')
menuBth.addEventListener('click', InMenu)