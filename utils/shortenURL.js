const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '1234567890'

let collection = []
collection = collection.concat(lowerCaseLetters.split(''), upperCaseLetters.split(''), numbers.split(''))

function generateShortURL() {
let randomNumber = ''
for (let i = 0; i < 5; i++){
	let index = Math.floor(Math.random() * collection.length)
	randomNumber += collection[index]
}

return randomNumber
}

module.exports = generateShortURL