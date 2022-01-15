async function orderListAsyncData($fire, store){
    let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
    let data = await docRef.get().then(doc => doc.data())
    
    let orderRef = $fire.firestore.collection('orders').where("userId", "==" , store.state.user.uid).orderBy("dateOrdered", "desc")
    let documents = await orderRef.get()

    let orders = []
    await Promise.all(documents.docs.map(document => { //remove map for single document
        orders.push({id: document.id, ...document.data()})
    }))
    
    return{ data, orders }
}

export { orderListAsyncData }