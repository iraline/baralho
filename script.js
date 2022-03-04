const numbers = ['1','2','3','4','5','6','7','8','9','10','J','Q','K']
//trocar nome numbers
//constante maius
const suits = ['h','c','s','d']

const main = document.getElementById('elements')
let state = 'de' 
//Modificar nome dos estados
let deck = []

suits.forEach(suit =>{
  numbers.forEach(number =>{
    //Criar objeto 
    deck.push(number+suit)
  })
})

createListSuit = suit => {
  return suit.map(card => {
    const element = document.createElement('div')
    element.textContent = card
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

  filtredList = deck.filter(filterSuit)
  
  const newListSuit = createListSuit(filtredList);
  main.replaceChildren(...newListSuit);
})

diamondsButton.addEventListener('click',() => {
  state = 'di' 

  filtredList = deck.filter(filterSuit)
  
  const newListSuit = createListSuit(filtredList);
  main.replaceChildren(...newListSuit);
})

heartsButton.addEventListener('click',() => {
  state = 'he' 
  
  filtredList = deck.filter(filterSuit)
  
  const newListSuit = createListSuit(filtredList);
  main.replaceChildren(...newListSuit);
})

spadesButton.addEventListener('click',() => {
  state = 'sp' 

  filtredList = deck.filter(filterSuit)
  
  const newListSuit = createListSuit(filtredList);
  main.replaceChildren(...newListSuit);
})

deckButton.addEventListener('click',() => {
  state = 'de' 
  
  const newListSuit = createListSuit(deck);
  main.replaceChildren(...newListSuit);
})

shuffleButton.addEventListener('click',() => {
  let list

  if(state == 'de'){
    list = deck
  }
  else{
    list = deck.filter(filterSuit)
  }

  list = list.sort(() => Math.random() - 0.5)

  const newListSuit = createListSuit(list);
  main.replaceChildren(...newListSuit);
})

function filterSuit(card){
  if(card[card.length-1] == state[0])
    return card
}

//Adicionar botao para ordenar o deck