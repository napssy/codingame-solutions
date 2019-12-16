let surfacePoints = [...Array(+readline())].map(n => readline().split(' '))
while(true){
    var inputs = readline().split(' ')
    const X = parseInt(inputs[0])
    const Y = parseInt(inputs[1])
    const hSpeed = parseInt(inputs[2])
    const vSpeed = parseInt(inputs[3])
    const fuel = parseInt(inputs[4])
    const rotate = parseInt(inputs[5])
    const power = parseInt(inputs[6])
    console.log(vSpeed <= -40 ? '0 4' : '0 0')
}
