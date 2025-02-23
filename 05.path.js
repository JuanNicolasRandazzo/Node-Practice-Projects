const path = require('node:path');

//Separation folders bar according to the OS
console.log(path.sep)

// We can link paths with path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

const fileName = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(fileName)

const extension = path.extname('image.jpg')
console.log(extension)