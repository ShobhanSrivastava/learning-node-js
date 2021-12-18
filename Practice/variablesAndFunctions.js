var username = 'Shobhan'
var age = 19
var hobbies = true

function userData(userName, userAge, hasHobbies) {
    return userName + ' is ' + userAge + ' years old and hasHobbies = ' + hasHobbies
}

console.log(userData(username, age, hobbies));

//New Gen JS uses "let" instead of var if we want to declare a variable and for constants, we use "const".

//Arrow Function
const summarizeUser = (userName, userAge, hasHobbies) => {
    return userName + ' is ' + userAge + ' years old and hasHobbies = ' + hasHobbies
}

//OneLiner Arrow Function
const add = (a,b) => a+b

console.log(add(1,2));

//OneLiner Arrow Function with only one argument

const addOne = a => a+1;

console.log(addOne(1));

//OneLiner Arrow Function with no arguments

const twoPlusthree = () => 2+3;

console.log(twoPlusthree());