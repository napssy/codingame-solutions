let romanChars = [{c:'M', v: 1000},{c:'D', v: 500},{c:'C', v: 100},{c:'L', v: 50},{c:'X', v: 10},{c:'V', v: 5},{c:'I', v: 1}]
let romToDigit = r => {
    r = r.split('').map(n => romanChars.filter(x => x.c === n).map(n => n.v)[0])
    let d = [], i = 0
    while(i < r.length){
        r[i] === r[i + 1]? (d.push(r[i + 1] + r[i]), r.splice(i, 1)) : r[i] < r[i + 1]? (d.push(r[i + 1] - r[i]), r.splice(i, 1)) : d.push(r[i])
        i++
    }
    return d.reduce((a, b) => a + b)
}
let digitToRom = d => {
    let romResult = '', rest = d, arr = [], i = 0
    while(i < 7){
        arr.push(Math.floor(rest / romanChars[i].v))
        rest = rest - Math.floor(rest / romanChars[i].v) * romanChars[i].v
        i++
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j <= arr[i]; j++){romResult += romanChars[i].c}
    }
    return romResult.replace('CCCC', 'CD').replace('XXXX', 'XL').replace('VIIII', 'IX').replace('IIII', 'IV')
}
let rom1 = romToDigit(readline())
let rom2 = romToDigit(readline())
console.log(digitToRom(rom1 + rom2))
