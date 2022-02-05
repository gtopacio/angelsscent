<template>
<div class="modal fade" id="login" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">

                <div class="container-fluid border-bottom d-flex justify-content-center medium">
                    <p class="text-size text-uppercase">Log In</p>
                </div>

                <div id="login-err" class="row-md-12 container-fluid" style="margin-top: 1.5rem;display: none;">
                    <div class="rounded" style="background-color: rgb(249, 119, 127); color: white; padding: 10px 20px; text-transform: none; font-size: 1rem;display: flex;align-items: center;gap: 7px;">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; vertical-align: text-bottom;">
                            <path fill-rule="evenodd" d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"></path>
                        </svg>
                        <div id="login-err-msg">Invalid email or password</div>
                    </div>
                </div>

                <form ref="registerForm" action="" @submit="submit">
                    <div class="container-fluid border-bottom d-flex justify-content-center">
                        <div class="login-container my-1">
                            <!-- Email -->
                            <div class="row-md-12 my-4">
                                <label class="text-size medium text-uppercase" for="email">Email</label>
                                <input v-model="email" class="form-control form-format" type="email" id="login-email" required>
                            </div>

                            <!-- Password -->
                            <div class="row-md-12 my-4">
                                <label class="text-size medium text-uppercase" for="password">Password</label>
                                <input v-model="password" class="form-control form-format" type="password" id="login-password" required>
                            </div>
                        </div>
                    </div>

                    <!-- Button -->
                    <div class="container-fluid d-flex justify-content-center mt-4 mb-2">
                        <div class="row btn-container">
                            <button type="submit" class="btn btn-secondary btn-format text-uppercase" id="submit-login">Log In</button>
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
             event.preventDefault();
             this.$emit('submit');

            // this.$store.commit('SET_NEWUSER', false)
            // this.$store.commit('SET_CONCESSIONAIRE', false)

            try {
                const result = await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password);
                let docRef = this.$fire.firestore.collection('users').doc(result.user.uid);
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        if(doc.data().role == "admin")
                            this.$store.commit('SET_ADMIN', true)
                            this.$router.push("/dashboard/sales")
                        $("#login-err").hide()
                        // this.$store.commit("SET_USER", result.user.uid, result.user.email)
                    } else {
                        $("#login-err-msg").text("Invalid email or password")
                        $("#login-err").show()
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    $("#login-err-msg").text("An unexpected error occurred")
                    $("#login-err").show()
                    console.log("Error getting document:", error);
                });

                $("#login").hide()
                $('.modal-backdrop').remove();
                $('body').css({overflow: 'visible'});
            } catch (e) {
                $("#login-err-msg").text("Invalid email or password")
                $("#login-err").show()
                console.error(e);
            }
        },

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
