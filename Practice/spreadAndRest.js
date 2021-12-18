const hobbies = ['Cooking', 'Gardening']

const newHobbies = [...hobbies, 'Playing Chess', 'Coding', 'Learning'] //Using Spread Operator

console.log(newHobbies)

const createArray = (...args) => args //Rest Operator

const newArr = createArray(1,2,3,4,5,6,7)

console.log(newArr)