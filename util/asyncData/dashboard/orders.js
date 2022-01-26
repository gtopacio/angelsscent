async function ordersAsyncData($fire) {
  let collection = $fire.firestore.collection('orders').orderBy("dateOrdered", "desc")
  let documents = await collection.get()

 let pending = []
 let pendingRef = collection.where("orderStatus", "==", "Pending").limit(10)
 let shippingRef = collection.where("orderStatus", "==", "Shipping").limit(10)
 let pendingDocs = await pendingRef.get()
 let shippingDocs = await shippingRef.get()

 await Promise.all(pendingDocs.docs.map(document => { //remove map for single document
     pending.push({id: document.id, ...document.data()})
 }))

 await Promise.all(shippingDocs.docs.map(document => { //remove map for single document
     pending.push({id: document.id, ...document.data()})
 }))

 let fulfilled = []
 let fulfilledRef = collection.where("orderStatus", "==", "Fulfilled").limit(10)
 let fulfilledDocs = await fulfilledRef.get()

 await Promise.all(fulfilledDocs.docs.map(document => { //remove map for single document
     fulfilled.push({id: document.id, ...document.data()})
 }))

 let cancelled = []
 let cancelledRef = collection.where("orderStatus", "==", "Cancelled").limit(10)
 let cancelledDocs = await cancelledRef.get()

 await Promise.all(cancelledDocs.docs.map(document => { //remove map for single document
     cancelled.push({id: document.id, ...document.data()})
 }))

 return{pending, fulfilled, cancelled}
}

export { ordersAsyncData };
