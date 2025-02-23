const fs = require('node:fs/promises');

    // IIFE - Immediatly Invoked Function Expression
    (
        async () => {

            console.log('Reading the first file...')
            const text = await fs.readFile('./archive.txt', 'utf-8') //utf-8 transforms the data in a system that we can understand
            console.log('First Text: ', text)
            

            console.log('Reading the second file...')
            const text2 = await fs.readFile('./archive2.txt', 'utf-8')
            console.log('Second Text: ', text2)
        }

    )()

    console.log('-----> Making things while the code reads the file...')

