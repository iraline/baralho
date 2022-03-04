const hearts =['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','Jh','Qh','Kh']
const clubs = ['1c','2c','3c','4c','5c','6c','7c','8c','9c','10c','Jc','Qc','Kc']
const spades = ['1s','2s','3s','4s','5s','6s','7s','8s','9s','10s','Js','Qs','Ks']
const diamonds = ['1d','2d','3d','4d','5d','6d','7d','8d','9d','10d','Jd','Qd','Kd']
const deck = hearts.concat(clubs,spades,diamonds)
const main = document.getElementById('elements')
let state = 'de' 

createListSuit = deck =>{
  return deck.map(number => {
    const element = document.createElement('div')
    element.textContent = number
    return element;
  })
}

const nodeList = createListSuit(deck)

nodeList.forEach(node => {
  main.appendChild(node);
})

//Buttons
const clubsButton = document.querySelector('#clubs')
const diamondsButton = document.querySelector('#diamonds')
const heartsButton = document.querySelector('#hearts')
const spadesButton = document.querySelector('#spades')
const deckButton = document.querySelector('#deck')
const shuffleButton = document.querySelector('#shuffle')

//Events
clubsButton.addEventListener('click',() => {
  state = 'cl' 
  const newListSuit = createListSuit(clubs);
  main.replaceChildren(...newListSuit);
})

diamondsButton.addEventListener('click',() => {
  state = 'di' 
  const newListSuit = createListSuit(diamonds);
  main.replaceChildren(...newListSuit);
})

heartsButton.addEventListener('click',() => {
  state = 'he' 
  const newListSuit = createListSuit(hearts);
  main.replaceChildren(...newListSuit);
})

spadesButton.addEventListener('click',() => {
  state = 'sp' 
  const newListSuit = createListSuit(spades);
  main.replaceChildren(...newListSuit);
})

deckButton.addEventListener('click',() => {
  state = 'de' 
  const newListSuit = createListSuit(deck);
  main.replaceChildren(...newListSuit);
})

shuffleButton.addEventListener('click',() => {
  let list
  switch (state){
    case 'cl':
      list = clubs
    break   
    case 'di':
      list = diamonds
    break
    case 'he':
      list = hearts
    break
    case 'sp':
      list = spades
    break
    default:
      list = deck
  }

  list = list.sort(() => Math.random() - 0.5)

  const newListSuit = createListSuit(list);
  main.replaceChildren(...newListSuit);
})
