const startCityArray = [
    {current: 'Moscow', next: 'Istambul', pathIndex: 0}, 
    {current: 'Moscow', next: 'Prague', pathIndex: 0}, 
    {current: 'Moscow', next: 'Minsk', pathIndex: 0}, 
]

const nextCityArray = [
    {current: 'Istambul', next: 'Sophia', pathIndex: 1}, 
    {current: 'Istambul', next: 'Kishinau', pathIndex: 1}, 
    {current: 'Istambul', next: 'Limassol', pathIndex: 1}, 
    {current: 'Prague', next: 'Berlin', pathIndex: 1}, 
    {current: 'Prague', next: 'Bremen', pathIndex: 1}, 
    {current: 'Minsk', next: 'Vilnus', pathIndex: 1}, 
    {current: 'Minsk', next: 'Munich', pathIndex: 1},
    {current: 'Sophia', next: 'Saraevo', pathIndex: 2}, 
    {current: 'Kishinau', next: 'Bukharest', pathIndex: 2}, 
    {current: 'Limassol', next: 'Budva', pathIndex: 2}, 
    {current: 'Berlin', next: 'Hamburg', pathIndex: 2}, 
    {current: 'Berlin', next: 'Wien', pathIndex: 2}, 
    {current: 'Bremen', next: 'Frankfurt', pathIndex: 2}, 
    {current: 'Vilnus', next: 'Frankfurt', pathIndex: 2}, 
    {current: 'Munich', next: 'Wien', pathIndex: 2},
    {current: 'Saraevo', next: 'Belgrade', pathIndex: 3}, 
    {current: 'Bukharest', next: 'Belgrade', pathIndex: 3}, 
    {current: 'Budva', next: 'Durres', pathIndex: 3}, 
    {current: 'Hamburg', next: 'Bordeaux', pathIndex: 3}, 
    {current: 'Wien', next: 'Havre', pathIndex: 3}, 
    {current: 'Frankfurt', next: 'Havre', pathIndex: 3}, 
    {current: 'Frankfurt', next: 'Paris', pathIndex: 3},
    {current: 'Belgrade', next: 'Tirana', pathIndex: 4}, 
    {current: 'Durres', next: 'Tirana', pathIndex: 4}, 
    {current: 'Bordeaux', next: 'Paris', pathIndex: 4}, 
    {current: 'Havre', next: 'Paris', pathIndex: 4}, 
    {current: 'Paris', next: 'Barcelona', pathIndex: 4}, 
]

function searchShortestPath(initCityList, nextCityList, searchCity) {
    const startCityList = initCityList
    let tempCityList = []

    while (startCityList.length) {
        const city = startCityList.pop()

        if (city.next === searchCity) {
            console.log(`The shortest path to ${city.next} = ${city.pathIndex}`)

            return
        }

        tempCityList = nextCityList.filter(el => el.current === city.next)

        for (let index = 0; index < tempCityList.length; index++) {
            startCityList.unshift(tempCityList[index])
        }
    }
}

searchShortestPath(startCityArray, nextCityArray, 'Paris')