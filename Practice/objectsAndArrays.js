//This is a JSON object and it contains key-value pairs.
const person = {
    userName : "Shobhan",
    age : 19,
    greet(){
        console.log('This is '+ this.userName) //this tells that the userName belongs to the current object
    }
}

person.greet()

const hobbies = ['Cooking', 'Gardening', 1, true]; //Arrays in JS can contain elements with mix datatypes
console.log(hobbies)

hobbies.push(false) //Adding another element in the array
//hobbies being const gets changed because the pointer pointing hobbies remain constant
//its just that another element is added to the end of the array
console.log(hobbies)

console.log(hobbies.map(hobby => "Hobby : "+hobby)); //creates another array