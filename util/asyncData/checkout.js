async function checkoutAsyncData($fire, store) {
  let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
  let data = await docRef.get().then(doc => doc.data())
  let boxes = getBoxes({totalWeight: store.state.cart.totalWeight, region: data.region})
  data.boxes = boxes
  data.shippingPrice = 0
  for(let box of boxes){
      data.shippingPrice += box.price + box.boxFee
  }
  data.grandTotal = data.shippingPrice + store.state.cart.total
  return{ data }
}

export { checkoutAsyncData }
