<template>
    <div>
        <div class="order-header text-center text-uppercase py-2 regular">
            Order Details
        </div>
        <div class="container-fluid my-4 px-4">
            <NuxtLink class="text-uppercase return regular" to="/account/orderlist">
                Return To Order List 
            </NuxtLink>
        
            <div class="row">
                <div class="col my-3">
                    <div class="order-box shadow container-fluid p-4">
                        <div class="order-title medium">ORDER {{ slug }}</div>
                        <div class="text-uppercase d-flex justify-content-between regular my-2">
                            <div>Payment Status: {{ data.paymentStatus }}</div>
                            <div>Order Status: {{ data.orderStatus }}</div>
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
                    <div v-if="data.orderStatus == 'Pending'" class="mt-3 d-flex justify-content-center"> 
                        <button type="button" class="shadow text-uppercase btn btn-light button regular" @click="cancelOrder(slug)">Cancel Order</button>
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
                        <div v-if=" data.orderStatus == 'Fulfilled'" class="d-flex justify-content-start mt-2">
                            <NuxtLink class="text-uppercase text-right return regular" :to="'/productreview/'+slug">
                                Review Products 
                            </NuxtLink>
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
        cancelOrder(id){
            this.$fire.firestore.collection("orders").doc(id).update({
                 orderStatus: "Cancelled",
            })
            for(var i = 0; i < this.data.items.length; i++){
               
                this.$fire.firestore.collection("products").doc(this.data.items[i].productid).update({
                    qty: this.$fireModule.firestore.FieldValue.increment(this.data.items[i].qty)
                })
                
            }
            this.$router.app.refresh()
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
