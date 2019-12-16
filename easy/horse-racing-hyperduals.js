let horses = [...Array(+readline())].map(n => readline().split(' '))
horses = horses.map((n,i,horses) => {
    let singleHorseDistances = horses.map((x,j) => (j !== i)? Math.abs(x[0] - n[0]) + Math.abs(x[1] - n[1]) : Infinity)
    return Math.min(...singleHorseDistances)
})
console.log(Math.min(...horses))
