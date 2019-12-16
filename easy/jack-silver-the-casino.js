const ROUNDS = parseInt(readline())
let CASH = parseInt(readline())
for(let i = 0; i < ROUNDS; i++){
    const PLAY = readline()
    let arr = (PLAY.includes('PLAIN'))? PLAY.split(' PLAIN ') : PLAY.split(' ')
    CASH = (arr[0] === arr[1])? CASH + Math.ceil(CASH / 4) * 35 :
        ((arr[1] === 'ODD' && arr[0] % 2 === 1) || (arr[1] === 'EVEN' && arr[0] % 2 === 0 && arr[0] != 0))? CASH + Math.ceil(CASH / 4) :
            CASH - Math.ceil(CASH / 4)
}
console.log(CASH)
