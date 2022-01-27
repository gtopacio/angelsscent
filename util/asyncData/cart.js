async function cartAsyncData($fire, store) {
  console.log(store.state.cart)
  let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
                              .collection('cart')
  let documents =  await docRef.get()

  let items = []
  await Promise.all(documents.docs.map(document => { //remove map for single document
      items.push({id: document.id, ...document.data()})
  }))
  console.log(store.state)
  return { items }
}

export { cartAsyncData }
