const x = readline()
let n = parseInt(readline())
let arr = x.split('-')
arr = [parseInt(arr[0][0], 36) - 9, parseInt(arr[0][1], 36) - 9, arr[1], parseInt(arr[2][0], 36) - 9, parseInt(arr[2][1], 36) - 9]
while(n > 0){
    arr[2]++
    if(arr[2] === 1000){
        arr[2] = 1
        arr[4]++
    }
    for(let i = 1; i < 5; i++){
        if(i !== 2 && arr[i] === 27){
            arr[i] = 1
            i - 1 === 2? arr[i - 2]++ : arr[i - 1]++
        }
    }
    n--
}
arr = arr.map((x, i) => i !== 2? (x + 9).toString(36).toUpperCase() : '' + x)
arr = [arr[0] + arr[1] + '-', arr[2].length === 3? arr[2] : arr[2].length === 2? '0' + arr[2] : '00' + arr[2], '-' + arr[3] + arr[4]]
console.log(arr.join(''))
