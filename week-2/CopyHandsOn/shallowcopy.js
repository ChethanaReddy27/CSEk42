// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// 🎯 Task
//     1. Create a shallow copy of user
// Using spread operator we created shallow copy 
let copyUser = {...user}

//     2. Change:
//           i. name in the copied object
copyUser.name = "Shobu"

//           ii. preferences.theme in the copied object
copyUser.preferences.theme = "light"

//           iii .Log both original and copied objects
console.log(user, copyUser)

//           iv. Observe what changes and what doesn’t
// i. Changing name in copyUser doesn't reflect in user obj
// ii. Changing prefernces.theme affects user aswell

let product = {
    productName: "Television",
    price: 100000,
}

//Discounted product 30%

let discountedProduct = {...product}
discountedProduct.price = product.price - product.price * 0.3
console.log(product)
console.log(discountedProduct)