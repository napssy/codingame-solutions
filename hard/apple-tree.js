let inputs = readline().split(' ').map(Number)
let apples = [...Array(inputs[0])].map(n => readline().split(' ').map(Number)).map(n => {return {x: n[0], y: n[1], z: n[2], r: n[3]}})
let fallen = [inputs[1]]
for(let i = 0; i < fallen.length; i++){
    apples.map((n, j) => {
        if(!fallen.includes(j) && n.z <= apples[fallen[i]].z){
            let dx = apples[fallen[i]].x - n.x, dy = apples[fallen[i]].y - n.y
            let dist = Math.sqrt(dx * dx + dy * dy)
            if(dist < apples[fallen[i]].r + n.r)fallen.push(j)
        }
    })
}
console.log(apples.length - fallen.length)
