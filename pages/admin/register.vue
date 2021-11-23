<template>
<div class="container py-4 mb-2 d-flex justify-content-center">
    <div class="col-12 col-md-6 d-flex flex-column align-items-center">
        <div class="w-100 text-center text-uppercase display-5 mb-5 pb-3 border-bottom border-2 border-dark medium">
            Admin Sign in
        </div>
        <form ref="registerForm" action="" @submit="submit" class="w-100 d-flex flex-column align-items-center">

        <div class="mb-3 w-75">
            <input v-model.lazy="email" type="email" placeholder="Email" class="form-control" required>
        </div>

        <div class="mb-3 w-75">
            <input v-model.trim="name" type="text" placeholder="Name" class="form-control" required>
        </div>

        <div class="mb-3 w-75">
            <input v-model="password" type="password" placeholder="Password" class="form-control" required>
        </div>

        <div class="mb-3 w-75">
            <input v-model.lazy="confirm" type="password" placeholder="Confirm Password" class="form-control" required>
        </div>

        <input 
            type="submit" 
            value="Register" 
            class="btn btn-primary w-50 align-self-center" 
            :disabled="emailError || confirmError"
            required
        >

        <!-- <p v-if="emailError" class="text-danger">
            {{ emailError }}
        </p>

        <p v-if="confirmError" class="text-danger">
            {{ confirmError }}
        </p> -->
        </form>
    </div>
</div>
</template>

<script>
export default {
    layout: "empty",
    data() {
        return {
        email: '',
        password: '',
        name: '',
        confirm: '',
        emailError: undefined,
        confirmError: undefined
        }
    },
    methods: {
        async createUserDocument(uid, name, email) {
            let path = name.trim()
            path = path.replace(/\s+/g, '-').toLowerCase()

            try {
                await this.$fire.firestore.collection('users').doc(uid).set({
                name,email, role: 'admin' })
            } catch (e) {
                alert(e)
            }
    },
        async submit(event) {
            event.preventDefault()

            this.$store.commit('SET_NEWUSER', true)
            this.$store.commit('SET_ADMIN', true)

            try {
                const result = await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)

                await result.user.updateProfile({
                displayName: this.name
                })
                
                await this.createUserDocument(result.user.uid, result.user.displayName, result.user.email)
                this.$router.push('/dashboard/orders')

            } catch (e) {
                alert(e)
            }
        }
    }
    
}
</script>

<style scoped>

</style>
