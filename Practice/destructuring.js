const person = {
    userName : "Shobhan",
    age : 19,
    greet(){
        console.log('This is '+ this.userName) //this tells that the userName belongs to the current object
    }
}

const personData = ( {userName, age} ) => console.log(userName, age) //destructuring an object

personData(person)

hobbies = ['Cooking', 'Gardening']

const [hobby1, hobby2] = hobbies //destructuring an array

console.log(hobby1, hobby2)