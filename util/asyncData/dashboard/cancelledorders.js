async function cancelledOrdersAsyncData($fire){
    let collection = $fire.firestore.collection('orders').orderBy("dateOrdered", "desc")
        let documents = await collection.get()

        let orders = []
        await Promise.all(documents.docs.map(document => { //remove map for single document
        orders.push({id: document.id, ...document.data()})
    }))

    console.log(orders)

    let cancelled = orders.filter(document => document.orderStatus == "Cancelled")

    return{cancelled}
}

export { cancelledOrdersAsyncData }