var inputs = readline().split(' ')
const W = parseInt(inputs[0])
const H = parseInt(inputs[1])
const N = parseInt(readline())
var inputs = readline().split(' ')
let heroX = parseInt(inputs[0]), heroY = parseInt(inputs[1]), above = 0, left = 0, below = H - 1, right = W - 1
while(true){
    const bombDir = readline()
    bombDir.includes('L') && (right = heroX - 1)
    bombDir.includes('R') && (left = heroX + 1)
    bombDir.includes('U') && (below = heroY - 1)
    bombDir.includes('D') && (above = heroY + 1)
    heroX = Math.floor((right + left) / 2)
    heroY = Math.floor((above + below) / 2)
    console.log(heroX + " " + heroY)
}
