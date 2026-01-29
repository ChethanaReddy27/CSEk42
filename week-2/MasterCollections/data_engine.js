// Assignment : Online Learning Platform – Data Engine
// ---------------------------------------------------
// Project story:
// “We are building the data engine of an online learning platform
// (like Udemy / Coursera / company LMS).”

// Data setup
// ----------

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};



// ==================================================
// MODULE 1 : USER PROCESSING ENGINE
// ==================================================

// -> Get only active users

let activeUsers = []

for(let i=0;i<users.length;i++)
{
  if(users[i].active == true)
  {
    activeUsers.push(users[i])
  }
}

console.log("Active users:", activeUsers)


// -> Extract names of active users

let activeNames = []

for(let i=0;i<users.length;i++)
{
  if(users[i].active == true)
  {
    activeNames.push(users[i].name)
  }
}

console.log("Active user names:", activeNames)


// -> Check if any admin exists

let adminFound = false

for(let i=0;i<users.length;i++)
{
  if(users[i].role == "admin")
  {
    adminFound = true
  }
}

console.log("Is any admin present:", adminFound)


// -> Find user by id (example id = 2)

let findId = 2
let foundUser = null

for(let i=0;i<users.length;i++)
{
  if(users[i].id == findId)
  {
    foundUser = users[i]
  }
}

console.log("User with id 2:", foundUser)


// -> Deactivate a user immutably (id = 1)

let newUsers = []

for(let i=0;i<users.length;i++)
{
  if(users[i].id == 1)
  {
    newUsers.push({ ...users[i], active:false })
  }
  else
  {
    newUsers.push(users[i])
  }
}

console.log("Users after deactivating id 1:", newUsers)





// ==================================================
// MODULE 2 : COURSE CATALOG ENGINE
// ==================================================

// -> Get published courses

let publishedCourses = []

for(let i=0;i<courses.length;i++)
{
  if(courses[i].published == true)
  {
    publishedCourses.push(courses[i])
  }
}

console.log("Published courses:", publishedCourses)


// -> Sort courses by price (high → low)

let sortedCourses = [...courses]

sortedCourses.sort(function(a,b){
  return b.price - a.price
})

console.log("Courses sorted by price:", sortedCourses)


// -> Extract { title, price } only

let titlePrice = []

for(let i=0;i<courses.length;i++)
{
  titlePrice.push({ title:courses[i].title , price:courses[i].price })
}

console.log("Title and Price only:", titlePrice)


// -> Calculate total value of published courses

let totalValue = 0

for(let i=0;i<publishedCourses.length;i++)
{
  totalValue = totalValue + publishedCourses[i].price
}

console.log("Total value of published courses:", totalValue)


// -> Add a new course immutably

let newCourse = { id: 104, title: "Python", price: 1999, published: true }

let newCourseList = [...courses, newCourse]

console.log("Courses after adding new one:", newCourseList)





// ==================================================
// MODULE 3 : SHOPPING CART ENGINE
// ==================================================

// -> Merge cart with courses to get full course info

let fullCart = []

for(let i=0;i<cart.length;i++)
{
  for(let j=0;j<courses.length;j++)
  {
    if(cart[i].courseId == courses[j].id)
    {
      fullCart.push({
        id: courses[j].id,
        title: courses[j].title,
        price: courses[j].price,
        qty: cart[i].qty
      })
    }
  }
}

console.log("Merged cart:", fullCart)


// -> Calculate total cart amount

let cartTotal = 0

for(let i=0;i<fullCart.length;i++)
{
  cartTotal = cartTotal + (fullCart[i].price * fullCart[i].qty)
}

console.log("Total cart amount:", cartTotal)


// -> Increase quantity of a course immutably (courseId = 101)

let updatedCart = []

for(let i=0;i<cart.length;i++)
{
  if(cart[i].courseId == 101)
  {
    updatedCart.push({ ...cart[i], qty: cart[i].qty + 1 })
  }
  else
  {
    updatedCart.push(cart[i])
  }
}

console.log("Cart after increasing quantity:", updatedCart)


// -> Remove a course from cart (courseId = 103)

let removedCart = []

for(let i=0;i<cart.length;i++)
{
  if(cart[i].courseId != 103)
  {
    removedCart.push(cart[i])
  }
}

console.log("Cart after removing course 103:", removedCart)


// -> Check if all cart items are paid courses (price > 0)

let allPaid = true

for(let i=0;i<fullCart.length;i++)
{
  if(fullCart[i].price <= 0)
  {
    allPaid = false
  }
}

console.log("Are all cart items paid:", allPaid)





// ==================================================
// MODULE 4 : ROLE & PERMISSION ENGINE
// ==================================================

// -> Get all role names

let roleNames = []

for(let r in roles)
{
  roleNames.push(r)
}

console.log("All role names:", roleNames)


// -> Check if student can delete

let studentPermissions = roles.student
let canDelete = false

for(let i=0;i<studentPermissions.length;i++)
{
  if(studentPermissions[i] == "delete")
  {
    canDelete = true
  }
}

console.log("Can student delete:", canDelete)


// -> Create a flat list of all unique permissions

let allPermissions = []

for(let r in roles)
{
  let arr = roles[r]

  for(let i=0;i<arr.length;i++)
  {
    if(allPermissions.includes(arr[i]) == false)
    {
      allPermissions.push(arr[i])
    }
  }
}

console.log("All unique permissions:", allPermissions)


// -> Add new role moderator immutably

let newRoles = {
  ...roles,
  moderator: ["update", "view"]
}

console.log("Roles after adding moderator:", newRoles)