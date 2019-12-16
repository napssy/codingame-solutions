const N = parseInt(readline());
let citiesLocations = [...Array(N)].map(n => readline().split(' '))
const firstCityLocation = citiesLocations.shift()
let totalDistance = 0
let nextCityLocation = firstCityLocation
const euclidianDist = (a, b) => Math.sqrt(((a[0] - b[0]) ** 2) + ((a[1] - b[1]) ** 2))
while(citiesLocations.length > 1){
    const singleCityDistances = citiesLocations.map(n => euclidianDist(nextCityLocation, n))
    const i = singleCityDistances.indexOf(Math.min(...singleCityDistances))
    totalDistance += euclidianDist(nextCityLocation, citiesLocations[i])
    nextCityLocation = citiesLocations.splice(i, 1)[0]
}
totalDistance += euclidianDist(nextCityLocation, citiesLocations[0]) + euclidianDist(firstCityLocation, citiesLocations[0])
console.log(Math.round(totalDistance))
