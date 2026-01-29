// File: cart.js - Shopping cart operations
// ----------------------------------------

import { getProductById, checkStock } from './product.js';

let cartItems = [];

export function addToCart(productId, quantity)
{
  let p = getProductById(productId)

  if(p == null)
  {
    return "Product not found"
  }

  let ok = checkStock(productId, quantity)

  if(ok == false)
  {
    return "Not enough stock"
  }

  // check if already in cart
  for(let i=0;i<cartItems.length;i++)
  {
    if(cartItems[i].productId == productId)
    {
      cartItems[i].quantity = cartItems[i].quantity + quantity
      return "Quantity updated in cart"
    }
  }

  // add new item
  cartItems.push({ productId: productId, quantity: quantity })
  return "Item added to cart"
}

export function removeFromCart(productId)
{
  for(let i=0;i<cartItems.length;i++)
  {
    if(cartItems[i].productId == productId)
    {
      cartItems.splice(i,1)
      return "Item removed from cart"
    }
  }
  return "Item not found in cart"
}

export function updateQuantity(productId, newQuantity)
{
  let ok = checkStock(productId, newQuantity)

  if(ok == false)
  {
    return "Stock not available for this quantity"
  }

  for(let i=0;i<cartItems.length;i++)
  {
    if(cartItems[i].productId == productId)
    {
      cartItems[i].quantity = newQuantity
      return "Quantity updated"
    }
  }

  return "Item not found in cart"
}

export function getCartItems()
{
  let arr = []

  for(let i=0;i<cartItems.length;i++)
  {
    let p = getProductById(cartItems[i].productId)

    arr.push({
      id: p.id,
      name: p.name,
      price: p.price,
      quantity: cartItems[i].quantity
    })
  }

  return arr
}

export function getCartTotal()
{
  let total = 0

  for(let i=0;i<cartItems.length;i++)
  {
    let p = getProductById(cartItems[i].productId)
    total = total + (p.price * cartItems[i].quantity)
  }

  return total
}

export function clearCart()
{
  cartItems = []
}