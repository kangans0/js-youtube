const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc,curr_val){
//     console.log(`acc: ${acc} and current value: ${curr_val}`);
//     return acc+curr_val
// },0)

// Using arrow operator
const myTotal= myNums. reduce( (acc,curr) => acc+curr,0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "data science Course",
        price: 12999
    }
]

const priceToPay=shoppingCart.reduce( (acc,item)=> acc+item.price,0)
console.log(priceToPay)