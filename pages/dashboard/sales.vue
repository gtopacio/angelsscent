<template>
    <div class="dashboard-bg">
        <div class="dashboard-header text-center text-uppercase py-2 regular">
            Dashboard
        </div>
        <div class="container-fluid">
            <div class="row py-3 d-flex flex-row">
                <DashboardNavbar />
                <div class="col">
                    <div class="shadow container-fluid data-bg p-3">
                        <div class="section-title medium text-uppercase py-3">
                            Sales Data
                        </div>
                        <div class="row mt-4 d-flex justify-content-center text-uppercase">
                            <div class="col-lg-4 rounded dashboard-bg mx-4 d-flex flex-column my-2">
                                <div class="section-title regular py-3">
                                    Order Insight
                                </div>
                                <div class="light py-2">
                                    <div class="py-2"> {{ cancelledSum }} Cancelled Orders </div>
                                    <div class="py-2"> {{ fulfilledSum }} Fulfilled Orders </div>
                                    <div class="py-2"> {{ pendingSum }} Pending Orders </div>
                                    <div class="py-2 mt-4"> {{ paidSum }} Paid Orders </div>
                                    <div class="py-2"> {{ unpaidSum }} Unpaid Orders </div>
                                    <div class="py-2 mt-4"> {{ ordersSum }} Total Orders </div>
                                </div>
                            </div>
                            <div class="col-lg-4 rounded dashboard-bg mx-4 d-flex flex-column my-2">
                                <div class="section-title regular py-3">
                                    Customer Insight
                                </div>
                                <div class="light py-2">
                                    <div class="py-2"> {{ uniqueSum }} Uniques Customers </div>
                                    <div class="py-2"> {{ repeatSum }} Repeat Customers </div>
                                    <div class="py-2 mt-4"> {{ usersSum }} Registered Users Total </div>
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
import { salesAsyncData } from '../../util/asyncData/dashboard/sales.js';
export default {
    async asyncData({$fire}) {
        return await salesAsyncData($fire);
    }

}
</script>

<style scoped>

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
    border-color: #E5E5E5;
    background-color:white;
}

.section-title{
    font-size: 1.4rem;
    border-bottom: 1px solid;
    border-color: #312828;
}

.section-body{
    color: #79808F;
    font-size: 0.8rem;
}

.data-bg{
    background-color: white;
    border-radius: 10px;
}

</style>
