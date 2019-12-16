let inputs = readline().split(' ')
let distX = parseInt(inputs[0]) - parseInt(inputs[2]),
    distY = parseInt(inputs[1]) - parseInt(inputs[3])
while(true){
    let move = ''
    if(distY != 0)move += distY > 0? distY-- && 'S' : distY++ && 'N'
    if(distX != 0)move += distX > 0? distX-- && 'E' : distX++ && 'W'
    console.log(move)
}
