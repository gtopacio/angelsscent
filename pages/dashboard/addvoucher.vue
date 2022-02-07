@ -0,0 +1,119 @@
<template>
    <div>
        <div class="dashboard-header text-center text-uppercase py-2 regular">
            Dashboard
        </div>
        <div class="container-fluid ">
            <div class="row py-3">
                <DashboardNavbar />
                <div class="col-10">
                    <div class="shadow container-fluid data-bg p-3 rounded-3">
                        <div class="section-title medium text-uppercase py-3 px-4">
                            Add Voucher
                        </div>
                        <div id="content" class="container-fluid d-flex flex-column regular text-uppercase p-5 w-100 bg justify-content-center">
                            <form ref="voucherForm" action="" @submit="submit">
                            <div class="small text-uppercase py-2">
                                <legend class="my-3">Voucher Conditions</legend>
                            </div>

                                <div class="row px-2">
                                    <div class="col-sm-6 my-3">
                                        <label for="code" class="form-label">Code</label>
                                        <input v-model="code" class="form-control" type="text" id="voucher-code" required>
                                    </div>

                                    <div class="col-sm-6 my-3">
                                        <label for="expiry" class="form-label">Valid Until</label>
                                        <input v-model="expiry" class="form-control" type="date" id="voucher-validity" min="1" required>
                                    </div>
                                </div>


                                <div class="row px-2">
                                    <div class="col-sm-6 my-3">
                                        <label for="amount" class="form-label">Voucher Amount</label>
                                        <input v-model="amount" class="form-control" type="number" id="voucher-amount" min="1" required>
                                    </div>


                                    <div class="col-sm-6 my-3">
                                        <label for="minSpend" class="form-label">Minimum Spend</label>
                                        <input v-model="minSpend" class="form-control" type="number" id="voucher-minspend" min="1" required>
                                    </div>
                                </div>

                                <br><br>
                                <div class="row" mt-3>
                                    <div class="col-sm-12"></div>
                                    <div class="col-sm-12">
                                        <button type="submit" class="btn w-100 pt py-2 px-3 text-uppercase" id = "submit">Add Voucher</button>
                                    </div>
                                    <div class="col-sm-12"></div>
                                </div>

                                <hr class="my-4">
                            </form>


                            <div class="small text-uppercase py-2">
                                <legend class="my-3">Previous Vouchers</legend>
                            </div>

                            <!--Template copied from orders.vue -->
                            <table class="table align-middle table-hover text-center regular">
                                <thead class="text-uppercase">
                                    <tr>
                                        <th scope="col">Voucher Code</th>
                                        <th scope="col">Expiry</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Minimum Spend</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr :key="voucher.id" :id='voucher.id' v-for="voucher in vouchers">
                                        <td class="text-uppercase"> {{voucher.code}} </td>
                                        <td class="text-uppercase"> {{voucher.expiry}} </td>
                                        <td class="text-uppercase"> ₱{{voucher.amount}} </td>
                                        <td class="text-uppercase"> ₱{{voucher.minSpend}} </td>
                                        <td class="text-uppercase" id="voucher-edit">
                                        <a data-bs-toggle="modal" data-bs-target="#editVoucher" id="edit-voucher">Edit</a>
                                        <VoucherModal
                                            :id = "voucher.id"
                                            :code = "voucher.code"
                                            :expiry = "voucher.expiry"
                                            :amount = "voucher.amount"
                                            :minSpend = "voucher.minSpend"
                                        />
                                        </td>
                                        <td class="text-uppercase" id="voucher-delete" @click="deleteVoucher(voucher.code)"> DELETE </td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { addvoucherAsyncData } from '../../util/asyncData/dashboard/addvoucher.js'
export default {
    data(){
        return{
            code:'',
            expiry:'',
            amount:0,
            minSpend:0
        }
    },
    async asyncData({$fire}){
      return await addvoucherAsyncData($fire);
    },
    methods: {
      /*
        data(){
            return{
                image: null
            }
        },*/
        async submit(event){
            event.preventDefault()
            this.$emit('submit')

            /* BACKEND - Store to firebase */

            // to format date
            var dateString = this.expiry.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
            try {
                var checkCode = await this.$fire.firestore.collection("vouchers").doc(this.code).get();
                if (checkCode.exists) {
                  alert("Code already exists");
                  return;
                }
            } catch (e) {
                alert(e)
            }

            try {
                this.$fire.firestore.collection("vouchers").doc(this.code).set({
                    code:this.code,
                    expiry:dateString,
                    amount:this.amount,
                    minSpend:this.minSpend,
                    used:false
                })
                this.$router.app.refresh();
            } catch (e) {
                alert(e)
            }
        },
        deleteVoucher(code){
            var confirmAction = confirm("Are you sure you want to delete this voucher?");
            if (confirmAction) {
              try {
                  this.$fire.firestore.collection("vouchers").doc(code.trim()).delete();
                  this.$router.app.refresh();
              } catch (e) {
                  alert(e)
              }
            }
        }
    }
}
</script>

<style scoped>
.btn{
    background-color: #9F9A96;
    color: white;
    border-radius: 8px;
    font-weight: bold;

}

.section-title{
    font-size: 1.4rem;
    border-bottom: 1px solid;
    border-color: #312828;
}

.dashboard-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    background-color:white;
    border-color: #E5E5E5;
}
</style>
