// cost a = 10 //

var temp = "Hello"
console.log(temp)
temp = "Google"

let temp2 =100
temp=50

const temp3= true
// temp3 = false



// temp4 = "Dog"
// temp4= "Cat"

var temp4 = null

const a =10
const b =5
let c = 5
c="ABC"
const sum = a+b
console.log(sum);
console.log(a + b + c);

const temp5 = [1,2,3,4,5 ,"A"]
console.log(temp5[0]);

temp5.forEach(item => {
    console.log(item);
})

// const filterTem = temp5.filter(item => item >= 3)
// console.log("Filter Number more than 3 is:", filterTemp);

temp5.push(6)
console.log("Insert 6 to array", temp5);

const car1 = {color:"Red",Brand:"Honda",model: {a1:"ASD#R",a2:"ASD#E"}  }
car1.color= "Blue"

console.log(car1.model.a2); 




 
const sayHello = (Number,name) => {
console.log(`Number is: ${Number} by ${name}`);
}
const nickname = "Palm"
sayHello(100,"Palm")

// funtion return

const firstname = 'Palm'
const lastname = 'Taya'

const mergeName = (firstname,lastname)=>{
    // return firstname + " " + lastname
    // note 2
    // const fullname = +" " + lastname
    // return fullname

    // note 2 
    return `${firstname}${lastname} `
}

// const fullname = mergeName(firstname,lastname)
// console.log(mergeName(firstname,lastname))

// note condition
// const number1 = 10
// if(number1 > 30){
//     console.log("number1 is more 30");

// }
// if(number1 < 20){
//     console.log("number1 is less 30");
// }else{
//     console.log("number1 is less 30");
// }
// if(number1 < 40){
//     console.log("number1 is less 40");
// }else{
//     console.log("number1 is more 40");
// }
// switch case
switch (number1){
    case 20:
    console.log("number1 is equal 20");
    break
    case 30:
    console.log("number1 is equal 30 ");
    break
    case 40:
    console.log("number1 is equal 40 ");
    break
    default:
        console.log("number1 is more 40 ");
        break;
}
// loop
const myCars = ["Ford Rapter",
"Honda CRV",
"Toyata Fortuner",
"Lambogini"
]
// for (let index = 0 index < myCars.length; index++){
//     const car = myCars[index];   
// }
const car1 = {color:"Red",Brand:"Honda",model: {a1:"ASD#R",a2:"ASD#E"}  
}
for(const key in car1){
    if(Object.hasOwnproperty.cal(car1,key))
    const element = car1{key};
    // console.log(element)
}
for (const item of myCars ){
    // console.log(item);
}
let i = 0
while (i == 10){
    console.log("The number is:", i);
    i++
}
