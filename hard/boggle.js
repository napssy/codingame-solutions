let getAdjacentLetters = (x, y) => {
    let arr = []
    if(y > 0){
        arr.push({l: lines[y - 1][x], x: x, y: y - 1})
        if(x > 0)arr.push({l: lines[y - 1][x - 1], x: x - 1, y: y - 1})
        if(x < 3)arr.push({l: lines[y - 1][x + 1], x: x + 1, y: y - 1})
    }
    if(y < 3){
        arr.push({l: lines[y + 1][x], x: x, y: y + 1})
        if(x > 0)arr.push({l: lines[y + 1][x - 1], x: x - 1, y: y + 1})
        if(x < 3)arr.push({l: lines[y + 1][x + 1], x: x + 1, y: y + 1})
    }
    if(x > 0)arr.push({l: lines[y][x - 1], x: x - 1, y: y})
    if(x < 3)arr.push({l: lines[y][x + 1], x: x + 1, y: y})
    return arr
}
let checkAdjacentLetters = (x, y, word, i) => {
    visited.push({x: x, y: y})
    if(i === word.length - 1)answer[words.indexOf(word)] = 'true'
    let adjacentLetters = getAdjacentLetters(x, y)
    adjacentLetters.map(a => {if(a.l === word[i + 1] && !visited.filter(o => o.x === a.x && o.y === a.y).length)checkAdjacentLetters(a.x, a.y, word, i + 1)})
}
let lines = [...Array(4)].map(x => readline().split(''))
const n = parseInt(readline())
let answer = [...Array(n)], visited = []
let words = [...Array(n)].map(x => readline())
words.map(a => lines.map((b, j) => b.map((c, k) => {if(a[0] === c){visited = [];checkAdjacentLetters(k, j, a, 0)}})))
answer.map(x => console.log(x === 'true'? true : false))
