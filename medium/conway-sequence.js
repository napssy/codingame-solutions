const R = parseInt(readline())
const L = readline()
let nextLine = [1, R]
let l = 1
while(l < L - 1){
    let i = 0
    let newLine = []
    while(i < nextLine.length){
        let sameItems = [nextLine[i]]
        let j = i + 1
        while(nextLine[i] === nextLine[j]){sameItems.push(nextLine[j++])}
        newLine.push(sameItems.length, nextLine[i])
        i += sameItems.length
    }
    nextLine = newLine
    l++
}
console.log(L == 1? R : nextLine.join(' '))
