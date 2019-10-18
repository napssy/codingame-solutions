let corners = [...Array(parseInt(readline()))].map(n => readline().split(' ').map(Number))
let shoots = [...Array(parseInt(readline()))].map(n => readline().split(' ').map(Number)).map(n => {
    let collision = 0
    corners.map((o, i, corners) => {
        const j = (i + 1) % corners.length
        const d = (n[0] - o[0]) * (corners[j][1] - o[1]) - (n[1] - o[1]) * (corners[j][0] - o[0])
        if(d <= 0)collision++
    })
    return (collision === corners.length)? console.log('hit') : console.log('miss')
})
