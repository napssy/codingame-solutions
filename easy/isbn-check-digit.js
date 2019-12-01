let isbns = [...Array(+readline())].map(n => readline())
let invalids = isbns.filter(n => {
    if((n.length !== 10 && n.length !== 13))return n
    if(n.length === 10 || n.length === 13){
        let m = n.length === 10? 11 : 10
        let mod11 = 0
        for(let j = 0; j < n.length; j++){
            if(n.length === 10)mod11 += n[j] === 'X'? 10 : parseInt(n[j]) * (n.length - j)
            else{
                if(j === n.length - 1 && mod11 % 10 === 0 && n[j] === 'X')return n
                mod11 += j%2 !== 0? parseInt(n[j] * 3) : n[j] === 'X'? 10 : parseInt(n[j])
            }
        }
        if(mod11 % m !== 0)return n
    }
})
console.log(invalids.length + ' invalid:')
invalids.map(n => console.log(n))
