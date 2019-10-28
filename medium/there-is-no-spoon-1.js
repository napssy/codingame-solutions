const w = parseInt(readline()); // the number of cells on the X axis
const h = parseInt(readline()); // the number of cells on the Y axis
let nodes = []
const lines = [...Array(h)].map((n,y) => readline().split('').filter((n,x) => {
    if(n === '0'){
        nodes.push([x, y])
        return n
    }
}))
nodes.map((n,i) =>{
    let result = n[0] + ' ' + n[1]
    let rightNode = nodes.filter((o,j) =>{
        if(i < j){
            if(o[1] === n[1])return o
        }
    })
    let downNode = nodes.filter((p,k) =>{
        if(i < k){
            if(p[0] === n[0])return p
        }
    })
    result += rightNode.length? ' ' + rightNode[0].join(' ') : ' -1 -1'
    result += downNode.length? ' ' + downNode[0].join(' ') : ' -1 -1'
    console.log(result)
})
