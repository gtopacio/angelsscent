<template>
    <div>
        <div class="dashboard-header text-center text-uppercase py-2 regular">
            Dashboard
        </div>
        <div class="container-fluid">
            <div class="row py-3">
                <DashboardNavbar />
                <div class="col-10">
                    <div class="shadow container-fluid data-bg p-3">
                        <NuxtLink class="return text-uppercase" to="/dashboard/orders"> <a>Return to Order List</a> </NuxtLink>
                        <div class="table-header medium text-uppercase py-3">
                            Pending Orders
                        </div>
                        <div class="table-responsive h-100">
                            <table class="table align-middle table-hover regular">
                                <thead>
                                    <tr class="text-uppercase">
                                        <th scope="col">Order Number</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Payment Status</th>
                                        <th scope="col">Order Status</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Customer Name</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr :key="order.id" v-for="order in pending" @click="goToDetails(order.id)">
                                        <td>{{ order.id }}</td>
                                        <td class="text-uppercase">{{ order.dateOrdered.toDate() }}</td>
                                        <td class="text-uppercase">{{ order.paymentStatus }}</td>
                                        <td class="text-uppercase">{{ order.orderStatus }}</td>
                                        <td class="text-uppercase">₱{{ order.grandTotal }}.00</td>
                                        <td class="text-uppercase">{{ order.name }}</td>
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
export default {
    async asyncData({$fire}) {
         let collection = $fire.firestore.collection('orders').orderBy("dateOrdered", "desc")
         let documents = await collection.get()

         let orders = []
         await Promise.all(documents.docs.map(document => { //remove map for single document
            orders.push({id: document.id, ...document.data()})
        }))

        console.log(orders)

        let pending = orders.filter(document => document.orderStatus == "Pending" || document.orderStatus == "Shipping")

        return{pending}
    },
    methods: {
        goToDetails(orderId){
            this.$router.push("/dashboard/orderdetail/" + orderId);
        }
    }
}
</script>

<style>

table{
    font-size: 0.85rem;
}

tr{
    cursor: pointer;
}

.save-btn{
    font-size: 0.8rem;
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
}

.dashboard-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    background-color:white;
    border-color: #E5E5E5;
}

.data-bg{
    background-color: white;
    border-radius: 10px;
}

.table-header{
    font-size: 1.5rem;
    border-bottom: 1px solid;
    border-color: #312828;
}

.section-title{
    font-size: 1.4rem;
}

.section-body{
    color: #79808F;
    font-size: 0.8rem;
}

.return{
    font-size: .9rem;
}
a{
    color: #79808F;
}

a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
}

.dropdown-menu{
    font-size: 0.8rem;
}
</style>
