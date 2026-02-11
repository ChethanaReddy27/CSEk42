// File: discount.js - Coupon and discount logic
// ---------------------------------------------

const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

export function validateCoupon(couponCode, cartTotal, cartItems)
{
  let c = coupons[couponCode]

  if(c == undefined)
  {
    return { valid:false, message:"Invalid coupon" }
  }

  if(cartTotal < c.minAmount)
  {
    return { valid:false, message:"Minimum amount not reached" }
  }

  // check category condition
  if(c.category != undefined)
  {
    let found = false

    for(let i=0;i<cartItems.length;i++)
    {
      if(cartItems[i].category == c.category)
      {
        found = true
      }
    }

    if(found == false)
    {
      return { valid:false, message:"Coupon not applicable for this category" }
    }
  }

  return { valid:true, message:"Coupon applied" }
}

export function calculateDiscount(couponCode, cartTotal)
{
  let c = coupons[couponCode]
  let dis = 0

  if(c.type == "percentage")
  {
    dis = (cartTotal * c.value) / 100
  }
  else
  {
    dis = c.value
  }

  return dis
}

export function applyDiscount(cartTotal, couponCode, cartItems)
{
  let res = validateCoupon(couponCode, cartTotal, cartItems)

  if(res.valid == false)
  {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: res.message
    }
  }

  let d = calculateDiscount(couponCode, cartTotal)
  let finalAmt = cartTotal - d

  return {
    originalTotal: cartTotal,
    discount: d,
    finalTotal: finalAmt,
    message: "Discount applied successfully"
  }
}