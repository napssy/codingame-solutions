let houses = [...Array(+readline())].map(n => readline().split(' ')).sort((a, b) => a[1] - b[1])
let medianCable = Math.max(...houses.map(n => n[0])) - Math.min(...houses.map(n => n[0]))
let yCables = houses.reduce((a,b) => a + Math.abs(b[1] - houses[Math.floor(houses.length / 2)][1]), 0)
console.log(medianCable + yCables)
