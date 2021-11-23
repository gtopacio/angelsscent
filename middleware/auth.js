export default function ({ $fire, route, redirect, store }) {
    if(route.path.startsWith('/dashboard') && !store.state.isAdmin){
        return redirect('/products')
    }
  }
  