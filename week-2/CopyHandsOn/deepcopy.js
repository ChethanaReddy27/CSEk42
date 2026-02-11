// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

// 🎯 Task:
//       1. Create a deep copy of order
let copyOrder = structuredClone(order)
//A copy of order is created

//       2. Modify in copied object:
//             i. customer.address.city
copyOrder.customer.address.city = "Bengaluru"
//Only copyOrder property changed

//             ii. items[0].price
copyOrder.items[0].price = 20000
//Only price in the copyOrder is changed

//             iii. Verify original object remains unchanged
console.log(order, copyOrder)
//Yes, Original object remains same