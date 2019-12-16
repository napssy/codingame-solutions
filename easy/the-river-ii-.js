const r1 = parseInt(readline())
// The maximum number of steps any river can advance is 9 * r1
// and since r1<100000, we limit the search scope to 45
let meetingPoint = 0, maxSteps = r1 - 45 > 0? 45 : r1
for(let i = r1 - 1; i > r1 - maxSteps; i--){
    let iArr = `${i}`.split(''), m = i
    while(m <= r1){
        for(let x = 0; x < iArr.length; x++){m += parseInt(iArr[x])}
        iArr = `${m}`.split('')
        meetingPoint += m === r1? 1 : 0
        if(meetingPoint === 1)break
    }
}
console.log(meetingPoint > 0? 'YES' : 'NO')
