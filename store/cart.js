export const state = () => ({
  items: [],
  total: 0.0,
  totalWeight: 0,
  totalQty: 0
})

export const mutations = {
  remove(state, { id, uid }) {
    state.items = state.items.filter(item => item.id !== id)

    if (uid) {
      this.$fire.firestore.collection('users').doc(uid).collection('cart').doc(id).delete()
    }

    this.commit('cart/updateTotal')
  },
  setItems(state, items) {
    state.items = items
    this.commit('cart/updateTotal')
  },
  addItem(state, item) {
    if (this.$fire.auth.currentUser) {
      let idx = state.items.findIndex(obj => obj.productid === item.productid)

      if (idx !== -1) {
        state.items[idx].subtotal = state.items[idx].qty * state.items[idx].price
      } else {
        state.items.push(item)
      }
    }
    this.commit('cart/updateTotal')
  },
  updateTotal(state) {
    state.total = 0
    state.totalQty = 0
    state.totalWeight = 0

    state.items.map(item => {
      state.total += item.subtotal
      state.totalWeight += item.weight * item.qty
      state.totalQty += item.qty
    })
  },
  increaseQty(state, id) {
    let item = state.items.find(obj => obj.id === id)

    item.subtotal = item.price * ++item.qty
    state.items.map(obj => obj.id === id ? item : obj)

    this.commit('cart/updateTotal')
  },
  decreaseQty(state, id) {
    let item = state.items.find(obj => obj.id === id)

    item.subtotal = item.price * --item.qty
    state.items.map(obj => obj.id === id ? item : obj)

    this.commit('cart/updateTotal')
  },
  empty(state, uid) {
    state.items = []
    state.total = 0.0

    if (uid) {
      let batch = this.$fire.firestore.batch()
      let cartRef = this.$fire.firestore.collection('users').doc(uid).collection('cart')

      cartRef.get().then(async snapshot => {
        await Promise.all(snapshot.docs.map(async doc => {
          console.log(doc)
          batch.delete(doc.ref)
        }))

        batch.commit()
      })
    }
  }
}