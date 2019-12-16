const N = parseInt(readline())
let isGameOver = false
class Player{
    constructor(name){
        this.name = name
        this.shoots = []
        this.score = 0
        this.isWinner = false
    }
    playTurn(){
        if(isGameOver)return
        this.scoreBefore = this.score
        let missedNumber = 0, lastMissed
        for(let i = 0; i < 3; i++){
            if(this.shoots[i].includes('X')){
                this.score > 20? this.score -= 20 : 0
                missedNumber++
                if(missedNumber === 2 && lastMissed){this.score > 10? this.score -= 10 : 0}
                if(missedNumber === 3){
                    this.score = 0
                    this.shoots.splice(0,3)
                    this.nextPlayer.playTurn()
                    break
                }
                lastMissed = true
            }
            else{this.score += parseInt(this.shoots[i]);lastMissed = false}
            if(this.score === 101){
                console.log(this.name)
                isGameOver = true
                return
            }
            if(this.score > 101){
                this.score = this.scoreBefore
                this.shoots.splice(0, i + 1)
                this.nextPlayer.playTurn()
                break
            }
        }
        if(this.shoots.length > 0 && !this.isWinner){this.shoots.splice(0,3);this.nextPlayer.playTurn()}
    }
}
let players = [...Array(N)].map(n => new Player(readline()))
for(const [index, player] of players.entries()){
    player.shoots = readline().split(' ')
    player.shoots.map((n, i) => {player.shoots[i] = n.includes('*')? (n.split('*')[0] * n.split('*')[1] + '') : n})
    players[index].nextPlayerIndex = (index + 1 < N)? index + 1 : 0
    players[index].nextPlayer = players[players[index].nextPlayerIndex]
}
players[0].playTurn()
