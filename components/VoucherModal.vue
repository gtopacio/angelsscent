<template>
<div class="modal fade" id="editVoucher" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">

                <div class="container-fluid border-bottom d-flex justify-content-center medium">
                    <p class="text-size text-uppercase">Edit Voucher</p>
                </div>

                <form ref="editVoucherForm" action="" @submit="submit">
                    <div class="container-fluid border-bottom d-flex justify-content-center">
                    <div class="login-container my-1">
                        <div class="row px-2">
                            <div class="col-sm-6 my-3">
                                <label for="length" class="form-label">Code</label>
                                <input v-model="code" class="form-control" type="text" id="voucher-code" required>
                            </div>

                            <div class="col-sm-6 my-3">
                                <label for="height" class="form-label">Valid Until</label>
                                <input v-model="expiry" class="form-control" type="date" id="voucher-validity" min="1" required>
                            </div>
                        </div>


                        <div class="row px-2">
                            <div class="col-sm-6 my-3">
                                <label for="width" class="form-label">Voucher Amount</label>
                                <input v-model="amount" class="form-control" type="number" id="voucher-amount" min="1" required>
                            </div>


                            <div class="col-sm-6 my-3">
                                <label for="height" class="form-label">Minimum Spend</label>
                                <input v-model="minSpend" class="form-control" type="number" id="voucher-minspend" min="1" required>
                            </div>
                        </div>

                        <br><br>
                        <button type="submit" class="btn btn-secondary btn-format text-uppercase" id = "submit">Save Changes</button>
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
        }
    },
    props:{
        id: String,
        code: String,
        expiry: String,
        amount: String,
        minSpend: String
    },
    methods: {
      /*
        async asyncdata( $fire, store ){
            // let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
            // console.log(docRef)
        },*/
        async submit(event) {
             event.preventDefault();
             this.$emit('submit');

            /* BACKEND FOR EDITING VOUCHER */
            var dateString = this.expiry.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
            try {
                await this.$fire.firestore.collection("vouchers").doc(this.code).set({
                    code:this.code,
                    expiry:dateString,
                    amount:this.amount,
                    minSpend:this.minSpend,
                    used:false
                })
                this.$router.app.refresh();
                $('#editVoucher').hide();
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
