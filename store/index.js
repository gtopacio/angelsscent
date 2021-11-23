export const state = () => ({
    user: null,
    newUser: false,
    isAdmin: false,
  })
  
  export const actions = {
    async onAuthStateChangedAction(state, { authUser, claims }) {
      if (!authUser) {
        state.commit('SET_USER', null)
        state.commit('SET_ADMIN', false)
        state.commit('SET_NEWUSER', false)
        state.commit('cart/setItems', [])
  
        this.$router.push({
          path: '/products'
        })

      } else {
        const { uid, email } = authUser
        state.commit('SET_USER', {
          uid,
          email
        })

        let ref = this.$fire.firestore.collection('users').doc(uid)
        let doc = await ref.get()

        if (doc.exists) {
          let data = doc.data()

          if (data && data.role === 'admin') {
            state.commit('SET_ADMIN', true)
          }

          state.commit('SET_CONTACT', {
            phoneNo: data.phoneNo,
            address: data.address
          })

          // Load cart
          doc.ref.collection('cart')
            .onSnapshot(docs => {
              
              let cart = docs.docs.map(doc => {
                let { name, price, qty, weight, subtotal, img, productid } = doc.data()
                
                let item = {
                  id: doc.id,
                  name,
                  price,
                  qty,
                  weight,
                  subtotal,
                  img,
                  productid
                }
                return item
              })
              
              
              state.commit('cart/setItems', cart)
            })
          
        }
      }
    }
  }
  
  export const mutations = {
    SET_USER(state, user) {
      state.user = user
    },
  
    SET_NEWUSER(state, status) {
      state.newUser = status
    },
  
    SET_ADMIN(state, status) {
      state.isAdmin = status
    },
  
    SET_CONTACT(state, data) {
      state.user.phoneNo = data.phoneNo
      state.user.address = data.address
    },
  
    SET_ADDRESS(state, data) {
      state.user.address = data
    },
  
    SET_PHONE(state, data) {
      state.user.phoneNo = data
    },
  
    SET_GUEST(state, data) {
      state.user = data
    }
  }
  
  export const getters = {
    getUser: state => state.user
  }