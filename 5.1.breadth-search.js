const initList = []
initList.push({name: 'Alex', hasGold: false, friendNames: ['Marta', 'Peter', 'Karl']})
initList.push({name: 'Bob', hasGold: false, friendNames: ['Giorgi', 'Olga']})
initList.push({name: 'Clay', hasGold: false, friendNames: ['Marta', 'Ghandi', 'Sokrate']})

const friendsList = []
friendsList.push({name: 'Marta', hasGold: false, friendNames: ['Rudy', 'Paul']})
friendsList.push({name: 'Peter', hasGold: false, friendNames: ['Bob', 'Viktor']})
friendsList.push({name: 'Karl', hasGold: false, friendNames: ['Laura']})
friendsList.push({name: 'Giorgi', hasGold: false, friendNames: []})
friendsList.push({name: 'Olga', hasGold: false, friendNames: ['John', 'Jaque', 'Jane']})
friendsList.push({name: 'Ghandi', hasGold: true, friendNames: ['Theodore', 'Suzy']})
friendsList.push({name: 'Sokrate', hasGold: false, friendNames: []})
friendsList.push({name: 'Rudy', hasGold: false, friendNames: []})
friendsList.push({name: 'Paul', hasGold: false, friendNames: []})
friendsList.push({name: 'Viktor', hasGold: false, friendNames: []})
friendsList.push({name: 'Laura', hasGold: false, friendNames: []})
friendsList.push({name: 'John', hasGold: false, friendNames: []})
friendsList.push({name: 'Jaque', hasGold: false, friendNames: []})
friendsList.push({name: 'Jane', hasGold: true, friendNames: []})
friendsList.push({name: 'Theodore', hasGold: false, friendNames: []})
friendsList.push({name: 'Suzy', hasGold: false, friendNames: []})

function searchGold(initList, secondList) {
    let startDudeList = initList
    let tempList = []
    let verifiedDudeList = []

    while (startDudeList.length) {
        const dude = startDudeList.pop();

        if (!verifiedDudeList.includes(dude.name)) {
            if (dude.hasGold) {

                console.log(`${dude.name} has gold!`)

                return
            }
    
            verifiedDudeList.push(dude.name)

            tempList = secondList.filter(el => dude.friendNames.includes(el.name) )

            for (let index = 0; index < tempList.length; index++) {
                startDudeList.unshift(tempList[index])
            }
        }
    }
}

searchGold(initList, friendsList)