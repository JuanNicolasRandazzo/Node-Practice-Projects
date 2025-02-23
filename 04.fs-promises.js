const fs = require('node:fs/promises')

console.log('Reading the first file...')
fs.readFile('./archive.txt', 'utf-8')
    .then(text => {
        console.log('First Text: ', text)
    })
 //utf-8 transforms the data in a system that we can understand

console.log('-----> Making things while the code reads the file...')

console.log('Reading the second file...')
const text2 = fs.readFile('./archive2.txt', 'utf-8')
    .then(text => {
        console.log('Second Text: ',text)
    })