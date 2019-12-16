const r = [parseInt(readline()), parseInt(readline())]
let min
while(r[0] !== r[1]){
  min = r.indexOf(Math.min(...r))
  r[min] = `${r[min]}`.split('').reduce((sum, n) => sum + parseInt(n, 10), r[min])
}
console.log(r[min])
