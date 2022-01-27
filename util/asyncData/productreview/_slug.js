async function productreview_slugAsyncData($fire, params) {
  let slug = params.slug;
  let docRef = $fire.firestore.collection('orders').doc(slug)
  let data = await docRef.get().then(doc => doc.data())
  return{data, slug}
};

async function productreviewSubmit (event) {
  event.preventDefault()
  for(var i = 0; i < this.data.items.length; i++){

      let text = document.getElementById('review'+this.data.items[i].id).value
      var e = document.getElementById('rating'+this.data.items[i].id);
      var num = e.options[e.selectedIndex].value;

      this.$fire.firestore.collection("reviews").add({
          name: this.data.name,
          productId: this.data.items[i].productid,
          productName: this.data.items[i].name,
          review: text,
          rating: num
      })
  }
  this.$router.push('/account/orderlist')
}

export { productreview_slugAsyncData, productreviewSubmit };
