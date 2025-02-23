const fs = require('node:fs')

console.log('Reading the first file...')
fs.readFile('./archive.txt', 'utf-8', (err, text) =>{
    console.log('First Text:',text)
}) //utf-8 transforms the data in a system that we can understand

console.log('-----> Making things while the code reads the file...')

console.log('Reading the second file...')
const text2 = fs.readFile('./archive2.txt', 'utf-8', (err, text) =>{
    console.log('Second Text: ',text)
})




/* Important Note: 

"readFileSync" is the syncronous way of rerading files. 
The asyncronous way is by using just "readFile"

In other words:

1. readFileSync: Syncronous
2. readFile: Async.

Also, callback is a function that is executed when a task has finished.

*/