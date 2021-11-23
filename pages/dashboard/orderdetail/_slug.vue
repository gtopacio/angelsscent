<template>
    <div>
        <div class="order-header text-center text-uppercase py-2 regular">
            Order Details
        </div>
        <div class="container-fluid my-4 px-4">
            <NuxtLink class="text-uppercase return regular" to="/dashboard/orders">
                Return To Order List 
            </NuxtLink>
        
            <div class="row">
                <div class="col my-3">
                    <div class="order-box shadow container-fluid p-4">
                        <div class="order-title medium">ORDER {{ slug }}</div>
                        <div class="row text-uppercase regular my-2">
                            <div class="col">
                                Payment Status: 
                                <button id="paymentDropDown" class="btn btn-secondary dropdown-toggle btn-outline-light dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {{ data.paymentStatus }}
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" @click="changePaymentStatus('Unpaid')">Unpaid</a></li>
                                    <li><a class="dropdown-item" @click="changePaymentStatus('Paid')">Paid</a></li>
                                </ul>
                            </div>
                            <div class="col">
                                Order Status: 
                                <button id="orderDropDown" class="btn dropdown-toggle btn-outline-light dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {{ data.orderStatus}}
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" @click="changeOrderStatus('Pending')">Pending</a></li>
                                    <li><a class="dropdown-item" @click="changeOrderStatus('Shipping')">Shipping</a></li>
                                    <li><a class="dropdown-item" @click="changeOrderStatus('Fulfilled')">Fulfilled</a></li>
                                    <li><a class="dropdown-item" @click="changeOrderStatus('Cancelled')">Cancelled</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table text-center text-uppercase my-2">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody class="regular">
                                    <tr :key="item.id" v-for="item in data.items">
                                        <td>
                                            <div>{{ item.name }} <br> {{ item.weight }}ML</div>
                                        </td>
                                        <td>X{{ item.qty }}</td>
                                        <td>₱{{ item.price }}.00</td>
                                        <td>₱{{ item.subtotal }}.00</td>
                                    </tr>
                                </tbody>
                                <tfoot class="regular">
                                    <tr>
                                        <td>Subtotal</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱{{ data.total }}.00</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Fee</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱{{ data.shippingPrice}}.00</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Total</td>
                                        <td>₱{{ data.grandTotal }}.00</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="mt-3 d-flex justify-content-center"> 
                        <button type="button" class="shadow text-uppercase btn btn-light button regular" @click="saveChanges(slug)">
                            Save Changes
                        </button>
                    </div>
                </div>

                <div class="col">
                    <div class="container-fluid d-flex flex-column medium">
                        <div class="text-uppercase name mt-4">{{ data.name }}</div>
                        <div class="my-3">
                            <div class="text-uppercase">Shipping Address</div>
                            <div class="details regular">{{ data.address }}</div>
                        </div>
                        <div class="my-3">
                            <div class="text-uppercase">Contact Number</div>
                            <div class="details regular">{{ data.contactNo }}</div>
                        </div>
                        <div class="my-3">
                            <div class="text-uppercase">Contact Email</div>
                            <div class="details regular">{{ data.email }}</div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({$fire, params}) {
        let slug = params.slug;
        let docRef = $fire.firestore.collection('orders').doc(slug)
        let data = await docRef.get().then(doc => doc.data())
        console.log(data)
        return{data, slug}
    },
    methods: {
        changePaymentStatus(string){
            let status = document.getElementById('paymentDropDown')
            status.innerText = string
        },
        changeOrderStatus(string){
            let status = document.getElementById('orderDropDown')
            status.innerText = string
        },
        saveChanges(id){
            console.log(id)
            try {
                let paymentStatusBtn = document.getElementById('paymentDropDown')
                let orderStatusBtn = document.getElementById('orderDropDown')

                this.$fire.firestore.collection("orders").doc(id).update({
                    paymentStatus: paymentStatusBtn.innerText.trim(),
                    orderStatus: orderStatusBtn.innerText.trim()
                })
                 
            } catch (e) {
                alert(e)
            }
        }
    }

}
</script>

<style scoped>

.return{
    color: #79808F;
    font-size: 0.8rem;
}

.order-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.order-box{
    background-color: #FAFAFA;
    border-radius: 10px;
}

.order-title{
    font-size: 1.2rem;
}

.button{
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
    width: 45%;
}

.dropdown-btn{
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
}

table > tbody > tr > td {
     vertical-align: middle;
}

.name{
    font-size: 1.5rem;
}

.details{
    color: #79808F;
}

</style>
