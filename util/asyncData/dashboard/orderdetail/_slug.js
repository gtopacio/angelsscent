async function orderdetail_slugAsyncData($fire, params) {
  let slug = params.slug;
  let docRef = $fire.firestore.collection('orders').doc(slug)
  let data = await docRef.get().then(doc => doc.data())
  console.log(data)
  return{data, slug}
};

export { orderdetail_slugAsyncData };
