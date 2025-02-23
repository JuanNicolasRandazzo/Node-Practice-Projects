import { readFile } from "node:fs/promises"

// We are reading the files in parallel(at the same time)
Promise.all([
    readFile('./archive.txt', 'utf-8'),
    readFile('./archive2.txt', 'utf-8')
]).then(([text, text2]) =>{
    console.log('First Text: ', text)
    console.log('Second Text: ', text2)
})

    console.log('-----> Making things while the code reads the files...')

