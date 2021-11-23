<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <div class="container-fluid header text-uppercase d-flex">
                <div class="d-flex flex-column justify-content-center text-center">
                    <a class="navbar-brand mx-auto" href="/"><img src="~/assets/logo.png" class="logo"></a>
                    <div class="logo-text medium"> Angel’s Scent</div>
                </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item px-2">
                            <NuxtLink to="/products"><a class="nav-link">Home</a></NuxtLink> 
                        </li>
                        <li class="nav-item px-2">
                            <NuxtLink to="/cart"><a class="nav-link">Cart</a></NuxtLink>
                        </li>
                        <li class="nav-item px-2">
                           <NuxtLink to="/paymentform"><a class="nav-link">Payment Form</a></NuxtLink>
                        </li>
                        <li class="nav-item px-2">
                            <NuxtLink to="/contact"><a class="nav-link">Contact Us</a></NuxtLink>
                        </li>
                        <li v-if="isAdmin" class="nav-item dropdown px-2">
                            <a class="nav-link dropdown-toggle" href="#" id="dashboardDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dashboard
                            </a>
                            <ul class="dropdown-menu dropdown-menu-lg-end text-capitalize" aria-labelledby="dashboardDropDown">
                                <li> <NuxtLink to="/dashboard/sales"><a v-if="user"  class="dropdown-item" >View Dashboard</a></NuxtLink></li>
                                <li> <NuxtLink to="/account/info"><a v-if="user"  class="dropdown-item" >View Account Info</a></NuxtLink></li>
                                <li><a v-if="user" @click="signout" class="dropdown-item">Sign Out</a></li>
                            </ul>
                        </li>

                        <li v-if="!isAdmin" class="nav-item dropdown px-2">
                            <a class="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Account
                            </a>
                            <ul class="dropdown-menu dropdown-menu-lg-end text-capitalize" aria-labelledby="accountDropdown">
                                <li><a v-if="!user" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#login">Log In</a></li>
                                <li><a v-if="!user" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#signup">Sign Up</a></li>
                                <li> <NuxtLink to="/account/info"><a v-if="user"  class="dropdown-item" >View Account Info</a></NuxtLink></li>
                                <li><a v-if="user" @click="signout" class="dropdown-item">Sign Out</a></li>
                            </ul>
                        </li>

                        <SignupModal />
                        <LoginModal />
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {

    computed: {
    user() {
      return this.$store.state.user && this.$store.state.user.uid
    },
    isAdmin() {
      return this.$store.state.isAdmin
    }
  },
    methods:{
        signout(){
            this.$fire.auth.signOut()
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.header{
    font-size: 12px;
}

.logo{
    width: 75px;
    height: auto;
}

.logo-text{
    font-size: 0.55rem;
    letter-spacing: 2px;
}

li a {
    text-decoration: none;
}

.dropdown-item{
    font-size: 0.85rem;
    /* color: #79808F; */
}
</style>
