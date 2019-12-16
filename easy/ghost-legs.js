let inputs = readline().split(' ')
const H = parseInt(inputs[1])
let lines = [...Array(H)].map(n => readline().split('')), baseCol = 0
for(let i = 0; i < parseInt(inputs[0]); i += 3){
    baseCol = i
    let currentCol = i, j = 1
    while(j < H - 1){currentCol = lines[j][currentCol - 1] === '-'? currentCol - 3 : lines[j][currentCol + 1] === '-'? currentCol + 3 : currentCol;j++}
    console.log('' + lines[0][baseCol] + lines[H - 1][currentCol])
}
