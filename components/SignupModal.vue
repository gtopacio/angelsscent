<template>
<div class="modal fade" id="signup" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">

                <div class="container-fluid border-bottom d-flex justify-content-center medium">
                    <p class="text-size text-uppercase">Sign Up</p>
                </div>

                <form ref="registerForm" action="" @submit="submit" >
                    <div class="container-fluid d-flex justify-content-center" id="form-container">
                        <div class="signup-container my-1" >
                            <div class="input group">
                                <div class="row">
                                    <!-- First Half -->
                                    <div class="col">
                                        <div class="d-flex justify-content-between">
                                            <div class="col-md-6">
                                                <label class="text-size medium text-uppercase me-2 mt-2" for="fName">First Name</label>
                                                <input class="form-control form-format me-2 mb-2" v-model="fName" type="text" id="signup-firstname">
                                                <div class="small red text-danger" id="firstname-error" > </div>
                                            </div>

                                            <div class="col-md-6">
                                                <label class="text-size medium text-uppercase ms-2 mt-2" for="lName">Last Name</label>
                                                <input class="form-control form-format ms-2 mb-2" v-model="lName" type="text" id="signup-lastname">
                                                <div class="small red text-danger" id="lastname-error" > </div>
                                            </div>
                                        </div>

                                        <label class="text-size medium text-uppercase mt-2" for="contactNo">Contact Number</label>
                                        <input class="form-control form-format mb-2" v-model="contactNo" type="tel" min="0" id="signup-contactNo" >
                                        <div class="small red text-danger" id="contactno-error" > </div>

                                        <label class="text-size medium text-uppercase mt-2" for="email">Email</label>
                                        <input class="form-control form-format mb-2" v-model="email" type="text" id="signup-email" >
                                        <div class="small red text-danger" id="invalid-email" > </div>

                                        <label class="text-size medium text-uppercase mt-2" for="password" id="password-label">Password</label>
                                        <input class="form-control form-format mb-2" v-model="password" type="password" id="signup-password">
                                        <div class="small red text-danger" id="password-error" > </div>
                                    </div>

                                    <!-- Second Half -->
                                    <div class="col" id="firstcol">
                                        <label class="text-size medium text-uppercase mt-2" for="streetAdd">Street Address</label>
                                        <input class="form-control form-format mb-2" v-model="streetAdd" type="text" id="signup-street" >
                                        <div class="small red text-danger" id="street-error" > </div>

                                        <label class="text-size medium text-uppercase mt-2" for="city">City</label>
                                        <input class="form-control form-format mb-2" v-model="city" type="text" id="signup-city" >
                                        <div class="small red text-danger" id="city-error" > </div>

                                        <label class="text-size medium text-uppercase mt-2" for="province">Province</label>
                                        <input class="form-control form-format mb-2" v-model="province" type="text" id="signup-province" >
                                        <div class="small red text-danger" id="province-error" > </div>

                                        <label class="text-size medium text-uppercase mt-2" for="region">Region</label>
                                        <select class="form-control form-format mb-2" v-model="region" id="signup-region" >
                                            <option value="NCR" selected>NCR</option>
                                            <option value="N. LUZON">N. LUZON</option>
                                            <option value="S. LUZON">S. LUZON</option>
                                            <option value="VISAYAS">VISAYAS</option>
                                            <option value="MINDANAO">MINDANAO</option>
                                            <option value="ISLANDER">ISLANDER</option>
                                        </select>
                                        <div class="small red text-danger" id="region-error" > </div>

                                        <label class="text-size medium text-uppercase mt-2" for="zipcode">Zipcode</label>
                                        <input class="form-control form-format mb-2" v-model="zipcode" type="number" min="0" id="signup-zipcode" >
                                        <div class="small red text-danger" id="zipcode-error" > </div>
                                    </div>
                                </div>

                                <!-- Button -->
                                <div class="container-fluid d-flex justify-content-center mt-4 mb-2">
                                    <div class="row btn-container">
                                        <button type="submit" class="btn btn-secondary btn-format text-uppercase" id="submit-signup">Register</button>
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
            region: '',
            zipcode: ''
        }
    },
    methods: {
       async createUserDocument(uid, email, fName, lName, contactNo, streetAdd, city, province, region, zipcode) {
            try {
                await this.$fire.firestore.collection("users").doc(uid).set({
                email, fName, lName, contactNo, streetAdd, city, province, region, zipcode
                })
            } catch (e) {
                alert(e)
            }
        },
        async submit(event) {
            event.preventDefault()
            this.$emit('submit');
            this.$store.commit('SET_NEWUSER', true)
            // this.$store.commit('SET_CONCESSIONAIRE', false)

            // First name required
            var validFirstName = this.fName;

            if (validFirstName.length < 1)
                $("#firstname-error").text("Please fill out this field.");
            else
                $("#firstname-error").text("");

            // Last name required
            var validLastName = this.lName;

            if (validLastName.length < 1)
                $("#lastname-error").text("Please fill out this field.");
            else
                $("#lastname-error").text("");

            // Contact Number required
            var validContactNo = this.contactNo;

            if (validContactNo.length < 1)
                $("#contactno-error").text("Please fill out this field.");
            else
                $("#contactno-error").text("");

            // Valid email validation
            var validemail = this.email;


            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validemail))
                $("#invalid-email").text("Email is invalid.");
            else
                $("#invalid-email").text(" ");

            // Password length validation
            var pwlength = this.password;

            if (pwlength.length < 6)
                $("#password-error").text("Password must be at least 6 characters.");
            else
                $("#password-error").text("");


            // Street required
            var validStreet = this.streetAdd;

            if (validStreet.length < 1)
                $("#street-error").text("Please fill out this field.");
            else
                $("#street-error").text("");

            // City required
            var validCity = this.city;

            if (validCity.length < 1)
                $("#city-error").text("Please fill out this field.");
            else
                $("#city-error").text("");

            // Province required
            var validProvince = this.province;

            if (validProvince.length < 1)
                $("#province-error").text("Please fill out this field.");
            else
                $("#province-error").text("");

            // Region required
            var validRegion = this.region//$("#signup-region");

            if (validRegion.length < 1 )
                $("#region-error").text("Please fill out this field.");
            else
                $("#region-error").text("");

            // Zipcode required
            var validZipcode = this.zipcode;

            if (validZipcode.length < 1)
                $("#zipcode-error").text("Please fill out this field.");
            else
                $("#zipcode-error").text("");


            try {
                const result = await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)

                await this.createUserDocument(result.user.uid, result.user.email, this.fName, this.lName, this.contactNo, this.streetAdd, this.city, this.province, this.region, this.zipcode)
                $("#signup").hide()
                $('.modal-backdrop').remove();
                this.$router.push('/products')


            } catch (e) {
                console.error(e)
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
