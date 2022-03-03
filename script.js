const copas =['1c','2c','3c','4c','5c','6c','7c','8c','9c','10c','Jc','Qc','Kc']
const paus = ['1p','2p','3p','4p','5p','6p','7p','8p','9p','10p','Jp','Qp','Kp']
const espadas = ['1e','2e','3e','4e','5e','6e','7e','8e','9e','10e','Je','Qe','Ke']
const ouros = ['1o','2o','3o','4o','5o','6o','7o','8o','9o','10o','Jo','Qo','Ko']

const main = document.getElementById('elements')
 
const baralho = copas.map(number => {
  const element = document.createElement('div')
  element.textContent = number
  
  return element;
})

baralho.forEach(node => {
  main.appendChild(node);
})

