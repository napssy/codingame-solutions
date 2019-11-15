const N = parseInt(readline())
let C = parseInt(readline())
let sum = 0
let budgets = [...Array(N)].map(n => {
    let Ood = parseInt(readline())
    sum += Ood
    return Ood
})
if(sum < C)return console.log('IMPOSSIBLE')
budgets.sort((a, b) => a - b).map((n,i) => {
    let average = Math.floor(C / (N - i))
    let min = Math.min(n, average)
    console.log(min)
    C -= min
})
