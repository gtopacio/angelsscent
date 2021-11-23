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
export default {
    async asyncData({$fire}) {
        let collection = $fire.firestore.collection('orders')
        let documents = await collection.get()

        let usersRef = $fire.firestore.collection('users')
        let userDocs = await usersRef.get()

        let users = [];
        await Promise.all(userDocs.docs.map(document => { //remove map for single document
            users.push({id: document.id, ...document.data()})
        }))

         let orders = []
         await Promise.all(documents.docs.map(document => { //remove map for single document
            orders.push({id: document.id, ...document.data()})
        }))

        let pending = orders.filter(document => document.orderStatus == "Pending" || document.orderStatus == "Shipping")
        let pendingSum = pending.length
        
        let fulfilled = orders.filter(document => document.orderStatus == "Fulfilled")
        let fulfilledSum = fulfilled.length
        
        let cancelled = orders.filter(document => document.orderStatus == "Cancelled")
        let cancelledSum = cancelled.length

        let paid = orders.filter(document => document.paymentStatus == "Paid")
        let paidSum = paid.length

        let unpaid = orders.filter(document => document.paymentStatus == "Unpaid")
        let unpaidSum = unpaid.length

        let ordersSum = orders.length

        users = users.filter(document => document.role != "admin")
        let usersSum = users.length

        let repeatSum = 0
        let uniqueSum = 0 

        for(var i = 0; i < users.length; i++){
            var ctr = 0;
            for(var j = 0; j < orders.length; j ++){
                if(orders[j].userId == users[i].id)
                    ctr++;
                if(ctr == 2){
                    repeatSum++
                    break;
                }    
            }
            if(ctr == 1)
                uniqueSum++
        }

        return{pendingSum, fulfilledSum, cancelledSum, paidSum, unpaidSum, ordersSum, usersSum, repeatSum, uniqueSum}
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
