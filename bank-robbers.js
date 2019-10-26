const robbers = [...Array(parseInt(readline()))].map(n => 0)
const V = parseInt(readline())
let vaultsTimes = [...Array(V)].map(n =>{
    let inputs = readline().split(' ')
    return 10 ** inputs[1] * 5 ** (inputs[0] - inputs[1])
})
let i = 0
while(i < robbers.length){
    robbers[robbers.indexOf(Math.min(...robbers))] += vaultsTimes[0]
    vaultsTimes.shift()
    i = (vaultsTimes.length > 0)? -1 : robbers.length + 1
    i++
}
console.log(Math.max(...robbers))
