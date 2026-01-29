// Assignment 2: E-Commerce Shopping Cart System
// ---------------------------------------------
// File: product.js - Product catalog

const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

export function getProductById(id)
{
  for(let i=0;i<products.length;i++)
  {
    if(products[i].id == id)
    {
      return products[i]
    }
  }
  return null
}

export function getAllProducts()
{
  return products
}

export function getProductsByCategory(category)
{
  let arr = []
  for(let i=0;i<products.length;i++)
  {
    if(products[i].category == category)
    {
      arr.push(products[i])
    }
  }
  return arr
}

export function searchProducts(query)
{
  let arr = []
  let q = query.toLowerCase()

  for(let i=0;i<products.length;i++)
  {
    let name = products[i].name.toLowerCase()
    if(name.includes(q))
    {
      arr.push(products[i])
    }
  }
  return arr
}

export function checkStock(productId, quantity)
{
  let p = getProductById(productId)

  if(p == null)
  {
    return false
  }

  if(p.stock >= quantity)
  {
    return true
  }
  else
  {
    return false
  }
}

export function reduceStock(productId, quantity)
{
  let p = getProductById(productId)

  if(p != null)
  {
    p.stock = p.stock - quantity
  }
}