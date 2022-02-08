async function productinventoryAsyncData($fire) {
  let collection = $fire.firestore.collection('products').orderBy('name') //.doc(document.id)
  let documents = await collection.get()

  let products = []
  await Promise.all(documents.docs.map(document => { //remove map for single document
      products.push({id: document.id, ...document.data()})
  }))

  return{ products }
}

export { productinventoryAsyncData }
