const VALUES = ['1','2','3','4','5','6','7','8','9','10','J','Q','K']
const SUITS = ['h','c','s','d']
const MAIN = document.getElementById('elements')

let state = 'deck' 
let deck = []

SUITS.forEach(suit =>{
  VALUES.forEach(number =>{
    //Criar objeto 
    deck.push(number+suit)
  })
})

const originalDeck = [...deck] 

createListSuit = suit => {
  return suit.map(card => {
    const element = document.createElement('div')
    element.className = 'card'
    element.textContent = card
    return element;
  })
}

const NODE_LIST = createListSuit(deck)

NODE_LIST.forEach(node => {
  MAIN.appendChild(node);
})

//Buttons
const clubsButton = document.querySelector('#clubs')
const diamondsButton = document.querySelector('#diamonds')
const heartsButton = document.querySelector('#hearts')
const spadesButton = document.querySelector('#spades')
const deckButton = document.querySelector('#deck')
const shuffleButton = document.querySelector('#shuffle')
const resetButton = document.querySelector('#reset')

//Events
clubsButton.addEventListener('click',() => {
  state = 'clubs' 

  filtredList = deck.filter(filterSuit)
  
  const newListSuit = createListSuit(filtredList);
  MAIN.replaceChildren(...newListSuit);
})

diamondsButton.addEventListener('click',() => {
  state = 'diamonds' 

  filtredList = deck.filter(filterSuit)
  
  const newListSuit = createListSuit(filtredList);
  MAIN.replaceChildren(...newListSuit);
})

heartsButton.addEventListener('click',() => {
  state = 'hearts' 
  
  filtredList = deck.filter(filterSuit)
  
  const newListSuit = createListSuit(filtredList);
  MAIN.replaceChildren(...newListSuit);
})

spadesButton.addEventListener('click',() => {
  state = 'spades' 

  filtredList = deck.filter(filterSuit)
  
  const newListSuit = createListSuit(filtredList);
  MAIN.replaceChildren(...newListSuit);
})

deckButton.addEventListener('click',() => {
  state = 'deck' 
  
  const newListSuit = createListSuit(deck);
  MAIN.replaceChildren(...newListSuit);
})

resetButton.addEventListener('click',() => {
  state = 'deck' 
  
  deck = [...originalDeck]

  const newListSuit = createListSuit(deck);
  MAIN.replaceChildren(...newListSuit);
})

shuffleButton.addEventListener('click',() => {
  let list

  if(state == 'deck'){
    list = deck
  }
  else{
    list = deck.filter(filterSuit)
  }

  list = list.sort(() => Math.random() - 0.5)

  const newListSuit = createListSuit(list);
  MAIN.replaceChildren(...newListSuit);

})

function filterSuit(card){
  if(card[card.length-1] == state[0])
    return card
}

//Adicionar botao para ordenar o deck