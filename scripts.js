let favMovie = (movie = 'The Room',name = 'bob') => console.log(`my name is ${name} and my favorite movie is ${movie}.`);

function getFirstName(fullName){
    let firstName = fullName.split(' ');
    console.log(firstName[0]);
}

let getFirstName2 = fullName => {
    let getFirstName2 = fullName.split(' ');
    console.log(getFirstName2[0]);
}

favMovie();
favMovie("Catch me if you can","Rowan");
getFirstName('Rowan Douglas');
getFirstName2('Vera Douglas');

let getThePower = (num1,num2) => ({
       powerOf:Math.pow(num1,num2),
       product:num1 * num2
});
let getObject = getThePower(2,6);
let {powerOf, product} = getObject;

// console.log(`The powerOf is ${getObject.powerOf} and the product is ${getObject.product}`);

console.log(`The powerOf is ${powerOf} and the product is ${product}`);
let arr = ["Rowan","Alabama","Chicken Noodle Bowl"];
let stuffAboutMe = (name,location,favFood) => ({
    myName:name,
    myLocation:location,
    myFavFood:favFood
});
let getStuffAboutMe = stuffAboutMe(...arr);
let {myName,myLocation,myFavFood} = getStuffAboutMe;
console.log(`My name is ${myName} im from ${myLocation} and my favorite food is the ${myFavFood}`);


let name = "Rowan";

let myFunction = bananas => {
    let bananasArray = [...bananas];
    console.log(bananasArray);
    for(i=0;i < bananasArray.length;i++){
        console.log(bananasArray[i]);
    }
    
};

myFunction(name);