// console.log("begins")
// setTimeout(()=>{
//   console.log("begins 2")
//   // Promise.resolve().then(()=>{
//   //   console.log("promise 1")
//   // })
// },0)
// console.log("end")
  
// new Promise(function(resolve,reject){
//   console.log("promise 2")
//   setTimeout(()=>{
//     console.log("setTimeout 2")
    
//   },1000)
//   resolve("resolve 1")


// }).then(()=>{
//   console.log("dot then 1")
//   setTimeout(()=>{
//     console.log("setTimeout 3")
//   },0)
// })
// let a = 5;
// console.log(a, "a")
// function x(y){
//   console.log(x,"x is called")
//   setTimeout(()=>{
//     console.log("timeout called")
//   },0)
//   y()
// }
// function y(){
  
//   console.log(y,"y is called")
// }

// x(y)

// function countButtonClicked(){
//   let count = 0;
//   document.getElementById("btn").addEventListener("click",()=>{
//     console.log("button clicked", ++count)
//   })
// }
// countButtonClicked()
// const cart = ["ps5", "top", "sneakers"]
// createCart(cart, (order)=>{
//   showCartScreen(order,(res)=>{
//     checkOutPage(res,(price)=>{
//       paymentPage(price,()=>{
//         alert("Order placed")
//       })
//     })
//   })


// })


// createCart(order)
// .then(order=>showCartScreen(order))
// .then(res=>checkoutPage(res))
// .then(price=>paymentPage(price))
// .then(res=>alert("Order Placed"))
// drawbacks:
// pyramid of doom or callback hell    2 Inversion of control


// -----------------------------------------------------------------------------------------------

// const order = {name:"top",orderId:2};
// const price = {
//   1: 500,
//   2:300,
//   3:40000
// }

// const promise  = createCart(order)
// console.log(promise,"promise<><><><><>")
// promise.then((orderId)=>{
//   return checkOutPage(orderId)
// })
// .then((price)=>{
//   console.log(price,"price<><><<>><")
// })
// .then((price)=>{
//   console.log(price,"price<><><<>><")
// })
// .catch((err)=>{
//   console.log(err,"error<><><>")
// })
// .then(()=>{
//   console.log("will it work !??????")
// })

// function createCart(order){
 
//   const promise = new Promise(function(resolve, reject){
//     const isValidate = validateCart(order)
//     if(isValidate){
//       setTimeout(()=>{
//         resolve(order.orderId)
//       },5000)
    
//     }
//     else{
//       reject("Cart is not valid")
//     }
//   })
//   return promise
// }

// function validateCart (order){
//   console.log(Object.keys(order))
//   if(Object.keys(order).length && order.orderId){
//     return true 
//   }
//   else{
//     return false
//   }
  
// }

// function checkOutPage(orderId){
//   const orderPrice = price[orderId]
//   console.log(orderPrice,orderId,"orderPrice<><><.")
//   return orderPrice
// }

function sum(){

}
// -----------------------------------------------------------------------------------------------

const promise1 = new Promise(function(resolve,reject){
  setTimeout(()=>{
    resolve("resolve 1")
  },9000)
  })

const promise2 = new Promise(function(resolve,reject){
  setTimeout(()=>{
    resolve("resolve 2")
  },3000)
  })
  

async function p(){
  const r1 = await promise1
  console.log(r1,"response one")
  // setTimeout(()=>{
  //   console.log("setTimeout runs")
  // },0)
  const r2 = await promise2
  console.log(r2,"response two")
}



const result = p()
console.log("it runs")
// console.log(result,"result<><><<><><")



 