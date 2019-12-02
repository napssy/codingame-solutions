const M = parseInt(readline())
let chirps = [...Array(M)].map(n => readline())
let tc = 10 + ((chirps.map(n => n.split(' ').reduce((a, b) => parseInt(a) + parseInt(b))).reduce((a, b) => a + b) / M) - 40) / 7
tc = Math.round(tc * 10) / 10 + ''
console.log(tc.split('.').length > 1? tc : tc + '.0')
if(tc >= 5 && tc <= 30){
    chirps = chirps.reduce((a, b) => a + ' ' + b).split(' ')
    let chirpsN8 = []
    for(let i = 0; i < chirps.length; i += 2){chirpsN8.push(chirps.slice(i, i + 2))}
    if(chirpsN8[chirpsN8.length - 1].length === 1)chirpsN8.pop()
    let l = chirpsN8.length
    tc = (chirpsN8.map(n => n.reduce((a, b) => parseInt(a) + parseInt(b))).reduce((a, b) => a + b) / l) + 5
    tc = Math.round(tc * 10) / 10 + ''
    console.log(tc.split('.').length > 1? tc : tc + '.0')
}
