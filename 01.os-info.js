const os = require('node:os')


console.log('Operating system info:')
console.log('----------------------')

console.log(`OS's name: ${os.platform()}`)
console.log(`OS's version: ${os.release()}`)
console.log(`Architecture: ${os.arch()}`)
console.log('CPUs: ', os.cpus()) //<---- With of this we are going to be able to scale proceses on Node.js
console.log(`Free Memory: ${os.freemem()/ 1024 / 1024}`) // We devide by 1024 to obtain the MB
console.log(`Total Memory: ${os.totalmem()/ 1024 / 1024}`)
console.log('Uptime: ', os.uptime() / 60 / 60)  