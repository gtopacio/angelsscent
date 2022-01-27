async function pendingordersAsyncData($fire) {
  let collection = $fire.firestore.collection('orders').orderBy("dateOrdered", "desc")
  let documents = await collection.get()

  let orders = []
  await Promise.all(documents.docs.map(document => { //remove map for single document
     orders.push({id: document.id, ...document.data()})
 }))

 console.log(orders)

 let pending = orders.filter(document => document.orderStatus == "Pending" || document.orderStatus == "Shipping")

 return{pending}
};

export { pendingordersAsyncData };
