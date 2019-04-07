// Write your Pizza Builder JavaScript in this file.
const buttonPepperoni = document.querySelector('.btn-pepperonni')
const buttonMushrooms = document.querySelector('.btn-mushrooms')
const buttonGreenPeppers = document.querySelector('.btn-green-peppers')
const buttonSauce = document.querySelector('.btn-sauce')
const buttonCrust = document.querySelector('.btn-crust')
const pizza = document.getElementById('pizza')
const greenPeppers = document.querySelectorAll('.green-pepper')
const mushrooms = document.querySelectorAll('.mushroom')
const pepperonis = document.querySelectorAll('.pep')
const crust = document.querySelector('.crust')
const sauce = document.querySelector('.sauce')

const panel = document.querySelector('aside')
const panelList = panel.querySelector('ul')
const panelItems = panel.querySelectorAll('li')
const price = panel.querySelector('strong')
const pepperoniPrice = panelItems[0]
const mushroomPrice = panelItems[1]
const greenPepperPrice = panelItems[2]
const saucePrice = panelItems[3]
const crustPrice = panelItems[4]

arrayGreenPeppers = [...greenPeppers]
arrayMushrooms = [...mushrooms]
arrayPepperonis = [...pepperonis]

let whithGreenPeppers = true
let withMushrooms = true
let withPepperoni = true
let withCrust = false
let withSauce = false

let totalPrice = 13

buttonGreenPeppers.onclick = () => {
  whithGreenPeppers = !whithGreenPeppers

  if(!whithGreenPeppers) {
    arrayGreenPeppers.forEach(greenPepper => pizza.removeChild(greenPepper))
    buttonGreenPeppers.setAttribute('class', 'btn btn-green-peppers')
    if(document.querySelector('.green-peppers')) panelList.removeChild(document.querySelector('.green-peppers'))
    totalPrice -= 1
  } else {
    arrayGreenPeppers.forEach(greenPepper => pizza.prepend(greenPepper))
    buttonGreenPeppers.setAttribute('class', 'btn btn-green-peppers active')
    panelList.innerHTML += '<li class="green-peppers">$1 green peppers</li>'
    totalPrice += 1
  }
  price.innerHTML = `$${totalPrice}`
}

buttonMushrooms.onclick = () => {
  withMushrooms = !withMushrooms

  if(!withMushrooms){
    arrayMushrooms.forEach(mushroom => pizza.removeChild(mushroom))
    buttonMushrooms.setAttribute('class', 'btn btn-mushrooms')
    if(document.querySelector('.mushrooms')) panelList.removeChild(document.querySelector('.mushrooms'))
    totalPrice -= 1
  } else {
    arrayMushrooms.forEach(mushroom => pizza.prepend(mushroom))
    buttonMushrooms.setAttribute('class', 'btn btn-mushrooms active')
    panelList.innerHTML += '<li class="mushrooms">$1 mushrooms</li>'
    totalPrice += 1
  }
  price.innerHTML = `$${totalPrice}`
}

buttonPepperoni.onclick = () => {
  withPepperoni = !withPepperoni

  if(!withPepperoni) {
    arrayPepperonis.forEach(pepperoni => pizza.removeChild(pepperoni))
    buttonPepperoni.setAttribute('class', 'btn btn-pepperonni')
    pepperoniPrice.style.display= 'none'
    if(document.querySelector('.pepperoni')) panelList.removeChild(document.querySelector('.pepperoni'))
    totalPrice -= 1
  } else {
    arrayPepperonis.forEach(pepperoni => pizza.prepend(pepperoni))
    buttonPepperoni.setAttribute('class', 'btn btn-pepperonni active')
    panelList.innerHTML += '<li class="pepperoni">$1 pepperoni</li>'
    totalPrice += 1 
  } 
  price.innerHTML = `$${totalPrice}`
}

buttonCrust.onclick = () => {
  withCrust = !withCrust

  if(!withCrust) {
    buttonCrust.setAttribute('class', 'btn btn-crust')
    crust.setAttribute('class', 'crust')
    if(document.querySelector('.gluten-free')) panelList.removeChild(document.querySelector('.gluten-free'))
    totalPrice -= 5
  } else {
    buttonCrust.setAttribute('class', 'btn btn-crust active')
    crust.setAttribute('class', 'crust crust-gluten-free')
    panelList.innerHTML += '<li class="gluten-free">$5 gluten-free crust</li>'
    totalPrice += 5
  }
  price.innerHTML = `$${totalPrice}`
}

buttonSauce.onclick = () => {
  withSauce = !withSauce

  if(!withSauce) { 
    buttonSauce.setAttribute('class', 'btn btn-sauce')
    sauce.setAttribute('class', 'sauce')
    if(document.querySelector('.white-sauce')) panelList.removeChild(document.querySelector('.white-sauce'))
    // $3 white sauce
    totalPrice -= 3
  } else {
    buttonSauce.setAttribute('class', 'btn btn-sauce active')
    sauce.setAttribute('class', 'sauce sauce-white')
    panelList.innerHTML += '<li class="white-sauce">$3 white sauce</li>'
    totalPrice += 3
  }
  price.innerHTML = `$${totalPrice}`
}