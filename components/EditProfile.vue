<template>
<div class="modal fade" id="editProfile" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">

                <div class="container-fluid border-bottom d-flex justify-content-center medium">
                    <p class="text-uppercase">Profile Information</p>
                </div>

                <form @submit="submit">
                    <div class="container-fluid border-bottom d-flex justify-content-center">
                        <div class="edit-container my-1">
                            <div class="row my-4">
                                <div class="col">
                                    <label class="medium text-uppercase" for="fName">First Name</label>
                                    <input type="text" class="form-control form-format" maxlength = "20" id="fName" placeholder="First Name" v-model="fName" required>
                                </div>

                                <div class="col">
                                    <label class="medium text-uppercase" for="lName">Last Name</label>
                                    <input type="text" class="form-control form-format" maxlength = "20" id="lName" placeholder="Last Name" v-model="lName" required>
                                </div>
                            </div>

                            <!-- <div class="row-md-12 my-4">
                                <label class="medium text-uppercase" for="email">Email</label>
                                <input type="email" class="form-control form-format" id="email" placeholder="Email" v-model="email" requried>
                            </div> -->

                            <div class="row-md-12 my-4">
                                <label class="medium text-uppercase" for="contactNo">Contact Number</label>
                                <input type="contactNo" class="form-control form-format" id="contactNo" placeholder="Contact Number" v-model="contactNo" required>
                            </div>

                            <!-- <div class="row-md-12 my-4">
                                <div class="input-group">
                                    <input type="password" class="form-control form-format" id="password" placeholder="Password">
                                    <button type="button" class="btn btn-primary form-format show-btn">Show</button>
                                </div>
                            </div>

                            <div class="row-md-12 my-4">
                                <div class="input-group">
                                    <input type="password" class="form-control form-format" id="password" placeholder="Confirm Password">
                                    <button type="button" class="btn btn-primary form-format show-btn">Show</button>
                                </div>
                            </div> -->
                        </div>
                    </div>

                    <div class="container-fluid d-flex justify-content-center my-4">
                        <div class="row btn-container">
                            <div class="col d-grid gap-2">
                                <button type="submit" class="btn btn-secondary btn-format">Save</button>
                            </div>

                            <div class="col d-grid gap-2">
                                <button type="button" class="btn btn-secondary btn-format" data-bs-dismiss="modal">Discard</button>
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
    props:{
        id: String, 
        fName: String, 
        lName: String, 
        email: String, 
        contactNo: String
    },
    methods:{
        async submit(event){
            event.preventDefault()
            try {
                this.$fire.firestore.collection("users").doc(this.id).update({
                    fName: this.fName.trim(),
                    lName: this.lName.trim(), 
                    // email: this.email.trim(),
                    contactNo: this.contactNo.trim() 
                })

                // this.$fire.auth.currentUser.updateEmail(this.email.trim())
                // .then(() => {
               
                // });
                this.$router.app.refresh()
                $('#editProfile').hide()
                $('.modal-backdrop').remove();
                 
            } catch (e) {
                alert(e)
            }
        }
    }
}
</script>

<style scoped>

    .edit-container{
        width: 400px;
    }

    .form-format{
        font-family: Inter;
        font-style: normal;
        font-weight: lighter;
        color: #9F9A96;
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

</style>