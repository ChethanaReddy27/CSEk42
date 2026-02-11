// File: payment.js - Payment processing
// -------------------------------------

import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null)
{
  let items = getCartItems()
  let total = getCartTotal()

  if(items.length == 0)
  {
    return { status:"failed", message:"Cart is empty" }
  }

  let discount = 0
  let finalTotal = total

  if(couponCode != null)
  {
    let res = applyDiscount(total, couponCode, items)
    discount = res.discount
    finalTotal = res.finalTotal
  }

  let ok = validatePaymentMethod(paymentMethod)

  if(ok == false)
  {
    return { status:"failed", message:"Invalid payment method" }
  }

  // reduce stock after payment
  for(let i=0;i<items.length;i++)
  {
    reduceStock(items[i].id, items[i].quantity)
  }

  clearCart()

  return {
    orderId: generateOrderId(),
    items: items,
    subtotal: total,
    discount: discount,
    total: finalTotal,
    paymentMethod: paymentMethod,
    status: "success",
    message: "Payment successful"
  }
}

export function validatePaymentMethod(method)
{
  if(method == "card" || method == "upi" || method == "cod")
  {
    return true
  }
  else
  {
    return false
  }
}

function generateOrderId()
{
  return "ORD" + Date.now()
}