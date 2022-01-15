async function fulfilledOrdersAsyncData($fire){
    let collection = $fire.firestore.collection('orders').orderBy("dateOrdered", "desc")
    let documents = await collection.get()

    let orders = []
    await Promise.all(documents.docs.map(document => { //remove map for single document
        orders.push({id: document.id, ...document.data()})
    }))

    let fulfilled = orders.filter(document => document.orderStatus == "Fulfilled")

    return{fulfilled}
}

export { fulfilledOrdersAsyncData }