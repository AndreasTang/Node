const fs = require('fs')

// const books = [{
//     title: 'apple',
//     body: 'apple taste great!!'
// }, {
//     title: 'grape',
//     body: 'grape taste good too!!'
// }]

// // fs.writeFileSync('booksjson.json',JSON.stringify(books))
// const booksjson = fs.readFileSync('booksjson.json')
// console.log(typeof booksjson.toString())
// console.log(booksjson.toString())

const person = JSON.parse(fs.readFileSync('booksjson.json').toString())
person.name = 'Andreas'
person.age = 25
fs.writeFileSync('booksjson.json', JSON.stringify(person))
