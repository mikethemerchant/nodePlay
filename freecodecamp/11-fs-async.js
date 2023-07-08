// this one without copilot
const { readFile, writeFile } = require('fs')

console.log('start')

readFile('./content/first.txt','utf-8',(err,result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result

    readFile('./content/second.txt','utf-8',(err,result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result

        writeFile('./content/writeFile1.txt',
                  `combine the files: ${first} ${second} `,
                  (err, result) => {
                    if(err) {
                        console.log(err)
                        return
                    }
                    console.log('done.')
                  }
                )
    })
})
console.log('end')