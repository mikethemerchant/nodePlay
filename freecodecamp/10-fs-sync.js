const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt')
const second = readFileSync('./content/second.txt')

writeFileSync('./content/combine.txt',
                `here is the result: ${first} ${second}`, {flag: 'a'})