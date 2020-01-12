const MESSAGE = readline()
let message = MESSAGE.split('').map(char => char.charCodeAt(0).toString(2))
message = message.map(n => n.length === 7? n : '0' + n).join('')
let count = [], cur = '', resArr = []
for(let i = 0; i < message.length + 1; i++){
    if(cur !== message[i] && cur !== ''){resArr.push([message[i - 1] === '0'? '00' : '0', count.join('')].join(' '));count = ['0']}
    else count.push('0')
    cur = message[i]
}
console.log(resArr.join(' '))
