<template>
    <div>
        <div class="order-header text-center text-uppercase py-2 regular">
            Checkout
        </div>
        <div class="container-fluid checkout-bg">
            <NuxtLink class="text-uppercase return regular" to="/Cart">
                Return To Cart
            </NuxtLink>
        
            <div class="row">
                <div class="col my-3">
                    <div class="order-box shadow container-fluid p-4">
                        <div class="order-title medium">CART SUMMARY</div>
                        <div class="table-responsive">
                            <table class="table text-center text-uppercase my-2">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody class="regular">
                                    <tr :key="item.id" v-for="item in items">
                                        <td>
                                            <div>{{ item.name }}</div>
                                        </td>
                                        <td>{{ item.weight }}ML</td>
                                        <td>{{ item.qty }}</td>
                                        <td>₱{{ item.price }}.00</td>
                                    </tr>
                                </tbody>

                                <tbody class="regular">
                                    <tr>
                                        <td class="d-flex flex-column">
                                            <div>Total Qty</div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>{{ totalQty }}</td>
                                    </tr>

                                    <tr>
                                        <td class="d-flex flex-column">
                                            <div>Total Weight</div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>{{ totalWeight }}ML</td>
                                    </tr>
                                </tbody>
            
                                <tbody class="regular">
                                    <tr>
                                        <td>Subtotal</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱{{ total }}.00</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Fee</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱{{ shippingPrice }}.00</td>
                                    </tr>
                                </tbody>

                                <tfoot class="regular">
                                    <tr>
                                        <td>Total</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱{{ grandTotal }}.00</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <br/><br/>

                    <div class="order-box shadow container-fluid p-4">
                        <div class="order-title medium">CUSTOMER INFORMATION</div>
                        
                        <div class="my-3">
                            <div class="text-uppercase">Name</div>
                            <div class="details regular">{{ data.fName }} {{ data.lName }}</div>
                        </div>

                        <div class="my-3">
                            <div class="text-uppercase">Email</div>
                            <div class="details regular">{{ data.email}}</div>
                        </div>

                        <div class="my-3">
                            <div class="text-uppercase">Contact Number</div>
                            <div class="details regular">{{ data.contactNo}}</div>
                        </div>

                        <div class="my-3">
                            <div class="text-uppercase">Shipping Address</div>
                            <div class="details regular">{{ data.streetAdd}} {{ data.city }} {{ data.province}} {{ data.zipcode }}</div>
                        </div>
                    </div>
                    
                    
                </div>


                <div class="col">
                    <div class="order-box shadow container-fluid p-4">
                        <div class="text-uppercase name mt-4">Payment Instructions</div>
                        <div class="my-3">
                            <div class="details regular">
                                Hello, thank you for your interest in Angel's Scent! <br/>
                                For us to process your order, kindly deposit the computed total amount to our GCash Account. <br/><br/>
                                1. Open your GCash App.<br/>
                                2. Click Send Money > Express Send<br/>
                                3. Enter the following Account Details: <br/>
                                <center>
                                Angela Sophia A. <br/>
                                09123456789<br/> 
                                </center>
                                4. Send receipt to: angelsscent@gmail.com <br/>
                                5. Take a screenshot of the successful payment transaction and upload it to our
                                payment form. <br/><br/><br/>

                                Note: Please settle your payment within 7 days and submit your proof of payment using the form, otherwise we cannot process your order.
                                To track your order fulfillment, please check your account page for updates. We will notify via email regarding your tracking number.
                                
                            </div>
                        </div>
                    </div> 

                    <br/>
                    <div v-if="items.length > 0" class="mt-3 d-flex justify-content-around"> 
                        <button type="button" class="shadow text-uppercase btn btn-light button regular" data-bs-toggle="modal" data-bs-target="#checkOut">Complete Order</button>
                    </div>

                    <div class="modal fade" id="checkOut" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div class="container-fluid d-flex flex-column regular">
                                        <div class="popup-container mt-4 mb-2 mx-auto">
                                            <!-- Text -->
                                            <div class="row border-bottom">
                                                <div class="col"><p class="deleteaccount-text text-center mt-2 mb-4 py-2">Once you submit your order, you will not be able to edit it. Proceed with check out and complete your order?</p></div>
                                            </div>

                                            <div class="d-flex justify-content-center">
                                                <div class="row btn-container mt-4 mb-2">
                                                    <div class="col d-grid gap-2"><button type="button"  @click="createOrder()" class="btn btn-secondary btn-format text-uppercase">Proceed</button></div>
                                                    <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase" data-bs-dismiss="modal">Go Back</button></div>
                                                </div>
                                            </div>
                                        </div>
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
import $ from 'jquery'

export default {
    
    computed: {
        shippingPrice(){
            if(this.totalWeight < 1000)
                return 100
            else    
                return 200
        },
        items() {
            return this.$store.state.cart.items
        },
        total() {
            return this.$store.state.cart.total
        },
        grandTotal(){
            return this.$store.state.cart.total + this.shippingPrice
        },
        totalWeight() {
            return this.$store.state.cart.totalWeight
        },
        totalQty() {
            return this.$store.state.cart.totalQty
        }
    },

    async asyncData({ $fire, store }){
        let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
        let data = await docRef.get().then(doc => doc.data())
        return{ data }
    },
    methods: {
        createOrder(){
            try {
                var items = []
                items = this.items
                this.$fire.firestore.collection("orders").add({
                    userId: this.$store.state.user.uid,
                    name: this.data.fName + ' ' + this.data.lName,
                    email: this.data.email, 
                    address: this.data.streetAdd+ ' ' + this.data.city + ' ' + this.data.province + ' ' + this.data.zipcode, 
                    contactNo: this.data.contactNo,
                    paymentStatus: "Unpaid",
                    orderStatus: "Pending",
                    total: this.total,
                    shippingPrice: this.shippingPrice,
                    grandTotal: this.grandTotal,
                    items: items,
                    dateOrdered: this.$fireModule.firestore.Timestamp.now()
                })
                
                for(var i = 0; i < items.length; i++){
                    this.$fire.firestore.collection("products").doc(items[i].productid).update({
                        qty: this.$fireModule.firestore.FieldValue.increment(-items[i].qty)
                    })
                }

                this.$store.commit('cart/empty', this.$store.state.user && this.$store.state.user.uid ? this.$store.state.user.uid : null)
                $('.modal-backdrop').remove();
                this.$router.push('/account/orderlist')
            } catch (e) {
                alert(e)
            }
        }
    }

}
</script>

<style scoped>

.checkout-bg{
    background-color: #FAFAFA;
}



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
    font-size: 1.5rem;
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
