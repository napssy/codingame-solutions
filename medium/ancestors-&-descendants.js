let lines = [...Array(+readline())].map(n => readline())
let trees = [[lines[0]]]
lines.shift()
let t = 0
let lastDotNumbers = 0
for(let i = 0; i < lines.length; i++){
    let dotNumbers = lines[i].split(".").length - 1
    if(dotNumbers > lastDotNumbers){
        trees[t].push(lines[i])
        lastDotNumbers++
    }
    else{
        t++
        if(lines[i].includes('.')){
            trees[t] = [trees[t - 1][0]]
            for(let j = 1; j < trees[t - 1].length; j++){
                let dotNum = trees[t - 1][j].split(".").length - 1
                if(dotNum < dotNumbers){trees[t].push(trees[t - 1][j])}
            }
            trees[t].push(lines[i])
            lastDotNumbers = dotNumbers
        }
        else {
            trees[t] = [lines[i]]
            lastDotNumbers = 0
        }
    }
}
for(let i = 0; i < trees.length; i++){
    trees[i] = trees[i].map(n => n.split('.').filter(x => x.length))
    console.log(trees[i].join(' > '))
}
