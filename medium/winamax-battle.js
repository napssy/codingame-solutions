const getCardValue = card => {
    card = card.length > 2? card.split('')[0] + card.split('')[1] : card.split('')[0]
    card = !isNaN(card)? parseInt(card) : card === 'A'? 14 : card === 'K'? 13 : card === 'Q'? 12 : card === 'J'? 11 : card
    return card
}
let deck1 = [...Array(+readline())].map(n => getCardValue(readline())),
    deck2 = [...Array(+readline())].map(n => getCardValue(readline())),
    turns = 0, pot1 = [], pot2 = [], pat
while(deck1.length && deck2.length && !pat){
    let card1 = deck1.shift()
    let card2 = deck2.shift()
    pot1.push(card1)
    pot2.push(card2)
    if(card1 !== card2){
        (card1 > card2)? deck1 = deck1.concat(pot1, pot2) : deck2 = deck2.concat(pot1, pot2)
        pot1 = []
        pot2 = []
        turns++
    }
    else if(deck1.length < 4 || deck2.length < 4) pat = true
    else{
        pot1.push(deck1.shift(), deck1.shift(), deck1.shift())
        pot2.push(deck2.shift(), deck2.shift(), deck2.shift())
    }
}
console.log(pat? 'PAT' : (deck1.length < deck2.length? '2 ' : '1 ') + turns);
