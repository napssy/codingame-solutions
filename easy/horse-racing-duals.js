let horses = [...Array(+readline())].map(n => parseInt(readline()))
horses = horses.sort((a, b) => a - b).map((n, i) => (horses[i + 1] - n) === 0? 0 : Math.abs(horses[i + 1] - n))
horses.splice(-1,1)
console.log(Math.min(...horses))
