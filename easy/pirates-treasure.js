const W = parseInt(readline())
let map = [...Array(+readline())].map(n => readline().split(' '))
map.map((n, y) => {n.map((o, x) => {
    map[y][x] === '0'
    && (map[y][x - 1] === undefined || map[y][x - 1] === '1')
    && (map[y][x + 1] === undefined || map[y][x + 1] === '1')
    && (map[y - 1] === undefined || map[y - 1][x - 1] === undefined || map[y - 1][x - 1] === '1')
    && (map[y - 1] === undefined || map[y - 1][x] === undefined || map[y - 1][x] === '1')
    && (map[y - 1] === undefined || map[y - 1][x + 1] === undefined || map[y - 1][x + 1] === '1')
    && (map[y + 1] === undefined || map[y + 1][x - 1] === undefined || map[y + 1][x - 1] === '1')
    && (map[y + 1] === undefined || map[y + 1][x] === undefined || map[y + 1][x] === '1')
    && (map[y + 1] === undefined || map[y + 1][x + 1] === undefined || map[y + 1][x + 1] === '1')
    && console.log(x + ' ' + y)})
})
