async function addvoucherAsyncData($fire) {
  let collection = $fire.firestore.collection('vouchers').where('used', '==', false) //.doc(document.id)
  let documents = await collection.get()

  let vouchers = []
  await Promise.all(documents.docs.map(document => { //remove map for single document
      vouchers.push({id: document.code, ...document.data()})
  }))

  return {vouchers}
}

export { addvoucherAsyncData }
