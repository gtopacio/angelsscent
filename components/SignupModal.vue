<template>
<div class="modal fade" id="signup" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">

                <div class="container-fluid border-bottom d-flex justify-content-center medium">
                    <p class="text-size text-uppercase">Sign Up</p>
                </div>

                <form ref="registerForm" action="" @submit="submit">
                    <div class="container-fluid d-flex justify-content-center">
                        <div class="signup-container my-1">
                            <div class="input group">
                                <div class="row">
                                    <!-- First Half -->
                                    <div class="col">
                                        <div class="d-flex justify-content-between">
                                            <div class="col-md-6">
                                                <label class="text-size medium text-uppercase me-2 mt-2" for="fName">First Name</label>
                                                <input class="form-control form-format me-2 mb-2" v-model="fName" type="text" required>
                                            </div>

                                            <div class="col-md-6">
                                                <label class="text-size medium text-uppercase ms-2 mt-2" for="lName">Last Name</label>
                                                <input class="form-control form-format ms-2 mb-2" v-model="lName" type="text" required>
                                            </div>
                                        </div>

                                        <label class="text-size medium text-uppercase mt-2" for="contactNo">Contact Number</label>
                                        <input class="form-control form-format mb-2" v-model="contactNo" type="number" required>

                                        <label class="text-size medium text-uppercase mt-2" for="email">Email</label>
                                        <input class="form-control form-format mb-2" v-model="email" type="text" requried>

                                        <label class="text-size medium text-uppercase mt-2" for="password">Password</label>
                                        <input class="form-control form-format mb-2" v-model="password" type="password" required>
                                    </div>

                                    <!-- Second Half -->
                                    <div class="col">
                                        <label class="text-size medium text-uppercase mt-2" for="streetAdd">Street Address</label>
                                        <input class="form-control form-format mb-2" v-model="streetAdd" type="text" required>

                                        <label class="text-size medium text-uppercase mt-2" for="city">City</label>
                                        <input class="form-control form-format mb-2" v-model="city" type="text" required>

                                        <label class="text-size medium text-uppercase mt-2" for="province">Province</label>
                                        <input class="form-control form-format mb-2" v-model="province" type="text" required>
                                        
                                        <label class="text-size medium text-uppercase mt-2" for="zipcode">Zipcode</label>
                                        <input class="form-control form-format mb-2" v-model="zipcode" type="number" required>
                                    </div>
                                </div>

                                <!-- Button -->
                                <div class="container-fluid d-flex justify-content-center mt-4 mb-2">
                                    <div class="row btn-container">
                                        <button type="submit" class="btn btn-secondary btn-format text-uppercase">Register</button>
                                    </div>
                                </div>
                            </div>
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
            contactNo: '',
            password:'',
            fName: '',
            lName: '',
            streetAdd: '',
            city: '',
            province: '',
            zipcode: ''
        }
    },
    methods: {
       async createUserDocument(uid, email, fName, lName, contactNo, streetAdd, city, province, zipcode) {
            try {
                await this.$fire.firestore.collection("users").doc(uid).set({
                email, fName, lName, contactNo, streetAdd, city, province, zipcode
                })
            } catch (e) {
                alert(e)
            }
        },
        async submit(event) {
            event.preventDefault()
            
            this.$store.commit('SET_NEWUSER', true)
            // this.$store.commit('SET_CONCESSIONAIRE', false)

            try {
                const result = await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)

                await this.createUserDocument(result.user.uid, result.user.email, this.fName, this.lName, this.contactNo, this.streetAdd, this.city, this.province, this.zipcode)
                $("#signup").hide()
                $('.modal-backdrop').remove();
                this.$router.push('/account/info')


            } catch (e) {
                alert(e)
            }
        },
    }
}

</script>

<style scoped>

    .signup-container{
        width: 900px;
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