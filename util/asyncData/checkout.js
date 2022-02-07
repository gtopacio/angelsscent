import getBoxes from '../getBoxes'

async function checkoutAsyncData($fire, store, $cookies) {
  let discount = 0;
  let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
  let voucher = await $fire.firestore.collection('vouchers').doc($cookies.get("voucher")).get();
  if(voucher.exists){
    voucher = await voucher.data();
    discount = voucher.amount;
  }
  else{
    voucher = null
  }
  let data = await docRef.get().then(doc => doc.data())
  let boxes = getBoxes({totalWeight: store.state.cart.totalWeight, region: data.region})
  data.boxes = boxes
  data.shippingPrice = 0
  for(let box of boxes){
      data.shippingPrice += box.price + box.boxFee
  }
  data.voucher = voucher
  data.grandTotal = data.shippingPrice + store.state.cart.total - discount
  if(data.grandTotal < 0) data.grandTotal = 0
  return{ data }
}

export { checkoutAsyncData }
