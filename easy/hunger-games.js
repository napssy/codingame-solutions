class Player{
    constructor(name){
        this.name = name
        this.killed = []
        this.killer = ''
        !this.isWinner
    }
}
let players = [...Array(parseInt(readline()))].map(n => new Player(readline()))
const turns = parseInt(readline())
let killedPlayers = []
for(let i = 0; i < turns; i++){
    const info = readline().split(' killed ')
    players.map(x => {
        let myReg = new RegExp('\\b' + x.name + '\\b')
        if(x.name === info[1] || info[1].match(myReg))x.killer = info[0]
        if(x.name === info[0]){x.killed.push(info[1]);killedPlayers.push(...info[1].split(', '))}
    })
}
players.sort((a, b) => a.name > b.name? 1 : -1).map((x, i) => {
    let sortedKilled
    if(!killedPlayers.includes(x.name))x.isWinner
    if(x.killed.length > 1)sortedKilled = x.killed.sort().map((n,i) =>  i !== 0? ' ' + n : n)
    else if(x.killed.length === 1)sortedKilled = x.killed[0].split(', ').sort().map((n,i) =>  i !== 0? ' ' + n : n)
    let kd = sortedKilled || 'None', kr = x.killer || 'Winner', blankLine = i === 0? `` : `
`
    console.log(`${blankLine}Name: ${x.name}
Killed: ${kd}
Killer: ${kr}`)
})
