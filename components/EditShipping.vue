<template>
<div class="modal fade" id="editShipping" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">

                <div class="container-fluid border-bottom d-flex justify-content-center medium">
                    <p class="text-uppercase">Shipping Information</p>
                </div>
                <form @submit="submit">
                    <div class="container-fluid border-bottom d-flex justify-content-center">
                        <div class="edit-container my-1">
                            <div class="row-md-12 my-4">
                                <label class="medium text-uppercase" for="streetAdd">Street Address</label>
                                <input v-model="streetAdd" maxlength = "46" type="text" class="form-control form-format" id="streetAdd" placeholder="Street Address" required>
                            </div>

                            <div class="row-md-12 my-4">
                                 <label class="medium text-uppercase" for="city">City</label>
                                <input v-model="city" maxlength = "46" type="text" class="form-control form-format" id="city" placeholder="City" required>
                            </div>

                            <div class="row-md-12 my-4">
                                 <label class="medium text-uppercase" for="province">Province</label>
                                <input v-model="province" maxlength = "46" type="text" class="form-control form-format" id="province" placeholder="Province" required>
                            </div>

                            <div class="row-md-12 my-4">
                                <label class="text-size medium text-uppercase mt-2" for="region">Region</label>
                                <select class="form-control form-format mb-2" v-model="region" required>
                                    <option value="NCR">NCR</option>
                                    <option value="N. LUZON">N. LUZON</option>
                                    <option value="S. LUZON">S. LUZON</option>
                                    <option value="VISAYAS">VISAYAS</option>
                                    <option value="MINDANAO">MINDANAO</option>
                                    <option value="ISLANDER">ISLANDER</option>
                                </select>
                            </div>

                            <div class="row-md-12 my-4">
                                 <label class="medium text-uppercase" for="zipcode">Zipcode</label>
                                <input v-model="zipcode" maxlength = "46" type="number" min="0" class="form-control form-format" id="zipcode" placeholder="Zipcode" required>
                            </div>
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
        streetAdd: String,
        city: String,
        province: String,
        region: String,
        zipcode: String
    },
    methods:{
        submit(event){
            event.preventDefault();
            this.$emit('submit');
             try {
                this.$fire.firestore.collection("users").doc(this.id).update({
                    streetAdd: this.streetAdd.trim(),
                    city: this.city.trim(),
                    province: this.province.trim(),
                    region: this.region.trim(),
                    zipcode: this.zipcode.trim()
                });
                this.$router.app.refresh();
                $('#editShipping').hide();
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
