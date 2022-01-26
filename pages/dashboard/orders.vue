<template>
    <div class="dashboard-bg">
        <div class="dashboard-header text-center text-uppercase py-2 regular">
            Dashboard
        </div>
        <div class="container-fluid">
            <div class="row py-3">
                <DashboardNavbar />
                <div class="col-10">
                    <div class="shadow container-fluid data-bg p-3">
                        <div class="table-header medium text-uppercase py-3">
                            Orders
                        </div>
                        <div class="d-flex flex-column">
                            <div class="rounded dashboard-bg p-2 mt-4">
                                <div class="section-title medium text-uppercase py-3">
                                   Pending Orders
                                </div>
                                <div class="table-responsive">
                                    <table class="table align-middle table-hover text-center regular">
                                        <thead class="text-uppercase">
                                            <tr>
                                                <th scope="col">Order Number</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Payment Status</th>
                                                <th scope="col">Order Status</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Customer Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr :key="order.id" :id='"goTo"+order.id' v-for="order in pending" @click="goToDetails(order.id)">
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
                                <div class="text-uppercase text-center medium table-link">
                                    <NuxtLink to="/dashboard/pendingorders"><a>show all pending orders</a></NuxtLink>
                                </div>
                            </div>
                            <div class="rounded dashboard-bg p-2 mt-4">
                                <div class="section-title medium text-uppercase py-3">
                                   Fulfilled Orders
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-hover text-center regular">
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
                                            <tr :key="order.id" v-for="order in fulfilled" @click="goToDetails(order.id)">
                                               <td>{{ order.id }}</td>
                                                <td class="text-uppercase">{{ order.dateOrdered.toDate() }}</td>
                                                <td class="text-uppercase">{{ order.paymentStatus }}</td>
                                                <td class="text-uppercase">{{ order.orderStatus }}</td>
                                                <td class="text-uppercase">₱{{ order.total }}.00</td>
                                                <td class="text-uppercase">{{ order.name }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="text-uppercase text-center medium table-link">
                                    <NuxtLink to="/dashboard/fulfilledorders"><a href="/dashboard/fulfilledorders">show all fulfilled orders</a></NuxtLink>
                                </div>
                            </div>
                            <div class="rounded dashboard-bg p-2 mt-4">
                                <div class="section-title medium text-uppercase py-3">
                                   Cancelled Orders
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-hover text-center regular">
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
                                            <tr :key="order.id" v-for="order in cancelled" @click="goToDetails(order.id)">
                                                <td>{{ order.id }}</td>
                                                <td class="text-uppercase">{{ order.dateOrdered.toDate() }}</td>
                                                <td class="text-uppercase">{{ order.paymentStatus }}</td>
                                                <td class="text-uppercase">{{ order.orderStatus }}</td>
                                                <td class="text-uppercase">₱{{ order.total }}.00</td>
                                                <td class="text-uppercase">{{ order.name }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="text-uppercase text-center medium table-link">
                                    <NuxtLink to="/dashboard/cancelledorders"><a>show all cancelled orders</a></NuxtLink>
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
import { ordersAsyncData } from '../../util/asyncData/dashboard/orders.js';
export default {
    async asyncData({$fire}) {
         return await ordersAsyncData($fire);
    },
    methods: {
        goToDetails(orderId){
            this.$router.push("/dashboard/orderdetail/" + orderId);
        }
    }

}
</script>

<style scoped>
tr{
    cursor: pointer;
}
.account-list, .account-info{
    background-color: white;
    border-radius: 10px;
}

/* .dashboard-bg{
    background-color: #FAFAFA;
} */

.dashboard-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    background-color:white;
    border-color: #E5E5E5;
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

.data-bg{
    background-color: white;
    border-radius: 10px;
}

table{
    font-size: 0.85rem;
}

a{
    color: #79808F;
}

 a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }

</style>
