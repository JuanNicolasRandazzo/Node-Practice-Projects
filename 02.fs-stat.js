const fs = require('node:fs') // Starting from Node 16, it is recommended to use node: before the module.

const stats = fs.statSync('./archive.txt')
console.log(
    stats.isFile(), // if it's a file
    stats.isDirectory(), // if it's a directory
    stats.isSymbolicLink(), // if it is a symbolic Link
    stats.size // Size on Bytes. 
)
