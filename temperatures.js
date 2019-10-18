const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
if(n === 0)return console.log('0') // if no temperature given, return '0'
let minPlus = Math.min(...inputs.filter(n => parseInt(n) > 0)); // find minimal temperatures of above 0 ones
let maxMin = Math.max(...inputs.filter(n => parseInt(n) < 0)); // find maximal temperatures of below 0 ones
console.log((minPlus <= -maxMin)? minPlus : maxMin)// compare the 2 values to find closest to zero
