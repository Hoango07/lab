const order = {
    orderItems: [
    { id: "M40", item: "T-shirt", price: 29.9, quantity: 5, gender: 'm', category: 'Summer' },
    { id: "M32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'm', category: 'Winter' },
    { id: "M11", item: "Sandals", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
    { id: "M12", item: "Shorts", price: 29.9, quantity: 1, gender: 'm', category: 'Summer' },
    { id: "M13", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'm', category: 'Exercise' },
    { id: "M41", item: "Shoes", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
    { id: "M49", item: "Socks", price: 5.9, quantity: 10, gender: 'm', category: 'Undergarment' },
    { id: "M01", item: "Belt", price: 15.9, quantity: 1, gender: 'm', category: 'Accessory' },
    { id: "M42", item: "Underwear", price: 19.9, quantity: 10, gender: 'm', category: 'Undergarment' },
    { id: "F71", item: "T-shirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
    { id: "F81", item: "Dress", price: 49.9, quantity: 5, gender: 'f', category: 'Summer' },
    { id: "F91", item: "Skirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
    { id: "F01", item: "Shoes", price: 19.9, quantity: 10, gender: 'f', category: 'Summer' },
    { id: "F32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'f', category: 'Winter' },
    { id: "F34", item: "Sandals", price: 19.9, quantity: 2, gender: 'f', category: 'Summer' },
    { id: "F36", item: "Shorts", price: 39.9, quantity: 3, gender: 'f', category: 'Summer' },
    { id: "F12", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'f', category: 'Exercise' },
    { id: "F19", item: "Sleeping", price: 39.9, quantity: 3, gender: 'f', category: 'Undergarment' },
    { id: "F42", item: "Socks", price: 5.9, quantity: 10, gender: 'f', category: 'Undergarment' },
    { id: "F43", item: "Underwear", price: 39.9, quantity: 10, gender: 'f', category: 'Undergarment' },
    { id: "F44", item: "Bra", price: 29.9, quantity: 10, gender: 'f', category: 'Undergarment' },
    { id: "F01", item: "Belt", price: 15.9, quantity: 1, gender: 'f', category: 'Accessory' },
  ]
  }
  let totalPrice = order.orderItems.reduce((total, item) => 
  total + item.price * item.quantity, 0);
  console.log(totalPrice);

//   let result = order.forEach(function (item, index, array) => { 
//       console.log(`${item} is at index ${index} in ${array}`)
//   });

let user = order.orderItems.find((item) => item.id == "M40");
console.log(user.item);

let someUsers = order.orderItems.filter((item) => item.id != "M40");
console.log(someUsers.length)

var totalUniqueItems = {}
let totalItems = () => {
    for (let i = 0; i < order.orderItems.length; i++) {
        const element = order.orderItems[i];
        console.log(totalUniqueItems[element.category]);
        if(totalUniqueItems[element.category]){
        }else{
            totalUniqueItems[element.category] = 0
        }
        totalUniqueItems[element.category] += element.quantity 
        // console.log(totalUniqueItems)
    }
} 
totalItems()
console.log(totalUniqueItems);

let maleItems = {}
let male = () => {
    for (let index = 0; index < order.orderItems.length; index++) {
        const element = order.orderItems[index];
        console.log(maleItems[element.gender]);
        if(maleItems[element.gender]){
        } else {
            maleItems[element.gender] = 0
        }
        maleItems[element.gender] += element.quantity
    }
}
male()
console.log(maleItems);

let femaleUndergarment = {}
let female = () => {
    for (let index = 0; index < order.orderItems.length; index++) {
        const element = order.orderItems[index];
        // console.log(femaleUndergarment[element.gender])

        if(femaleUndergarment[element.gender]){
        }else{
            femaleUndergarment[element.gender] = order
        }
        femaleUndergarment[element.gender] += element.category
    }
}
female()
console.log(femaleUndergarment);
let sumItems = {}
let sum = () => {
    for (let index = 0; index < order.orderItems.length; index++) {
        const element = order.orderItems[index];
        console.log(sumItems[element.id])
        if(sumItems[element.id]){
        }else{
            sumItems[element.id] = 0
        }
        sumItems[element.id] += element.price
    }
}
sum ()
console.log(sumItems);