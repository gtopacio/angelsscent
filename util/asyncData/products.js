async function productAsyncData($fire) {
    let collection = $fire.firestore.collection('products').where('display', '==', 'listed') //.doc(document.id)
    let documents = await collection.get()
    
    let array = []
    await Promise.all(documents.docs.map(document => { //remove map for single document
        array.push({id: document.id, ...document.data()})
    }))

    let men = array.filter(document => document.tag == "men")
    let women = array.filter(document => document.tag == "women")
    return{men, women}
}

export { productAsyncData };