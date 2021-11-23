<template>
<div class="modal fade" id="login" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                
                <div class="container-fluid border-bottom d-flex justify-content-center medium">
                    <p class="text-size text-uppercase">Log In</p>
                </div>

                <form ref="registerForm" action="" @submit="submit">
                    <div class="container-fluid border-bottom d-flex justify-content-center">
                        <div class="login-container my-1">
                            <!-- Email -->
                            <div class="row-md-12 my-4">
                                <label class="text-size medium text-uppercase" for="email">Email</label>
                                <input v-model="email" class="form-control form-format" type="email" id="email" required>
                            </div>

                            <!-- Password -->
                            <div class="row-md-12 my-4">
                                <label class="text-size medium text-uppercase" for="password">Password</label>
                                <input v-model="password" class="form-control form-format" type="password" id="password" required>
                            </div>
                        </div>
                    </div>

                    <!-- Button -->
                    <div class="container-fluid d-flex justify-content-center mt-4 mb-2">
                        <div class="row btn-container">
                            <button type="submit" class="btn btn-secondary btn-format text-uppercase">Log In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import $ from 'jquery'

export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        async asyncdata( $fire, store ){
            // let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
            // console.log(docRef)
        },
        async submit(event) {
             event.preventDefault()

            // this.$store.commit('SET_NEWUSER', false)
            // this.$store.commit('SET_CONCESSIONAIRE', false)

            try {
                const result = await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
                    console.log(result.user)
                    let docRef = this.$fire.firestore.collection('users').doc(result.user.uid)

                    docRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            if(doc.data().role == "admin")
                                this.$store.commit('SET_ADMIN', true)
                                this.$router.push("/dashboard/sales")
                            // this.$store.commit("SET_USER", result.user.uid, result.user.email)
                        } else {
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                    $("#login").hide()
                    $('.modal-backdrop').remove();
            } catch (e) {
                alert(e)
            }
        }
    }
}
</script>

<style scoped>

    .login-container{
        width: 400px;
    }

    .form-format{
        font-family: Inter;
        font-style: normal;
        font-weight: lighter;
        color: #000000;
        background-color: #f6f6f6;
        border-color: #ececec;
    }

    .btn-container{
        width: 335px;
    }

    .btn-format {
        background: #9F9A96;
        border-radius: 8px;
    }

    .text-size {
        font-size: 16px;
    }
</style>