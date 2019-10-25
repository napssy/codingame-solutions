const LON = readline().replace(',','.') * (Math.PI / 180)
const LAT = readline().replace(',','.') * (Math.PI / 180)
const N = parseInt(readline())
const defibrilators = [...Array(N)].map(n => {
    let line = readline().split(';')
    return [line[4].replace(',','.') * (Math.PI / 180), line[5].replace(',','.') * (Math.PI / 180), line[1]]
})
const distances = defibrilators.map(n => Math.sqrt((LON - n[0]) ** 2 + (LAT - n[1]) ** 2))
console.log(defibrilators[distances.indexOf(Math.min(...distances))][2])
