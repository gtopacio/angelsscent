async function infoAsyncData($fire, store){
    let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
    let data = await docRef.get().then(doc => doc.data())
    data.id = store.state.user.uid
    return{ data }
}

export { infoAsyncData }