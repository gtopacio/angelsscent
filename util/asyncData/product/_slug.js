async function product_slugAsyncData($fire, params) {
  let slug = params.slug;
  let docRef = $fire.firestore.collection('products').doc(slug)
  let data = await docRef.get().then(doc => doc.data())

  let reviewRef = $fire.firestore.collection('reviews')
  let reviewDocs = await reviewRef.get()

  let reviews = []
  await Promise.all(reviewDocs.docs.map(document => { //remove map for single document
      reviews.push({id: document.id, ...document.data()})
  }))

  let productReviews = reviews.filter(document => document.productId == slug)

  let sum = 0;
  for(var i = 0; i < productReviews.length; i++){
      sum += parseInt(productReviews[i].rating)
  }
  sum = Math.floor(sum /= productReviews.length)
  console.log(sum)

  return{data, slug, productReviews, sum}
};

export { product_slugAsyncData };
