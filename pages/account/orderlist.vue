<template>
    <div class="h-100">
        <div class="account-header text-center text-uppercase py-2 regular">
            Account
        </div>
        <div class="container-fluid">
            <div class="row py-3">
                <AccountNavbar />
                <div class="col-10">
                    <div class="regular m-auto">
                        <div class="d-flex flex-column mx-3">
                             <div class="shadow account-info p-3 mb-4">
                                <div class="section-title medium text-uppercase mb-3">Order List</div>
                                <div class="container-fluid my-2 account-section">
                                    <div class="table-responsive">
                                        <table class="table table-hover text-start">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Order Number</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Payment Status</th>
                                                    <th scope="col">Order Status</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr :key="order.id" v-for="order in orders" @click="goToDetails(order.id)" class="table-row">
                                                    <td>{{ order.id }}</td>
                                                    <td>{{ order.dateOrdered.toDate() }}</td>
                                                    <td>{{ order.paymentStatus }}</td>
                                                    <td>{{ order.orderStatus }}</td>
                                                    <td>P{{ order.grandTotal }}.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="shadow account-info p-3 mb-4">
                                <div class="medium text-uppercase mb-2">Shipping Information</div>
                                <div class="container-fluid d-flex flex-column">
                                    <div class="section-body text-uppercase">
                                        {{ data.fName}} {{ data.lName }}
                                    </div>
                                    <div class="section-body text-uppercase w-75">
                                        {{ data.streetAdd}} {{ data.city }} {{ data.province}} {{ data.zipcode }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $fire, store }){
        let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
        let data = await docRef.get().then(doc => doc.data())
        
        let orderRef = $fire.firestore.collection('orders').where("userId", "==" , store.state.user.uid).orderBy("dateOrdered", "desc")
        let documents = await orderRef.get()

        let orders = []
        await Promise.all(documents.docs.map(document => { //remove map for single document
            orders.push({id: document.id, ...document.data()})
        }))
        console.log(orders)
        return{ data, orders }
    },
    methods: {
        goToDetails(orderId){
            this.$router.push("/orderdetail/" + orderId);
        }
    }
}
</script>

<style scoped>
.table-row{
    cursor: pointer;
}
.account-bg{
    background-color: #FAFAFA;
}

.account-list, .account-info{
    background-color: white;
    border-radius: 10px;
}

.account-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.section-title{
    font-size: 1.5rem;
}

.section-body{
    color: #79808F;
    font-size: 0.8rem;
}

.nav-link{
    color: #79808F;
}

.active{
    color: black;
}

</style>
