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
                                        <td>{{ item.weight }}g</td>
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
                                        <td>{{ totalWeight }}g</td>
                                    </tr>
                                </tbody>

                                <tbody class="regular">
                                    <tr>
                                        <td>Subtotal</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱{{ total }}.00</td>
                                    </tr>
                                </tbody>

                                <thead>
                                    <tr>
                                        <th scope="col">Box Name</th>
                                        <th scope="col">Box Fee</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody class="regular">
                                  
                                  <tr :key="box.id" v-for="box in data.boxes">
                                      <td>
                                          <div>{{ box.name }}</div>
                                      </td>
                                      <td>₱{{ box.boxFee }}</td>
                                      <td>{{ box.qty }}</td>
                                      <td>₱{{ box.price }}.00</td>
                                  </tr>
                                 
                                  <tr>
                                      <td>Shipping Fee ({{data.region}})</td>
                                      <td></td>
                                      <td></td>
                                      <td>₱{{ data.shippingPrice }}.00</td>
                                  </tr>

                                  <!-- <tr>
                                      <td>Kilo Box Small</td>
                                      <td></td>
                                      <td>1</td>
                                      <td>₱123.00</td>
                                  </tr>
                                  <tr>
                                      <td>Kilo Box Large</td>
                                      <td></td>
                                      <td>1</td>
                                      <td>₱400.00</td>
                                  </tr>
                                  <tr>
                                      <td>NCR</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                   -->
                                </tbody>

                                <tfoot class="regular">
                                    <tr>
                                        <td>Total</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱{{ data.grandTotal }}.00</td>
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

                        <NuxtLink to="/account/info">
                          <a class="nav-link">Change Shipping Address</a>
                        </NuxtLink>
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
        totalWeight() {
            return this.$store.state.cart.totalWeight
        },
        totalQty() {
            return this.$store.state.cart.totalQty
        }
    },

    async asyncData({ $fire, store }){

        function residueBox({weight, id, region}){

            if(weight <= 0)
                return null;

            if(weight > 5){
                let largePrice = {
                    "NCR": 420,
                    "N. LUZON": 620,
                    "S. LUZON": 620,
                    "VISAYAS": 720,
                    "MINDANAO": 720,
                    "ISLANDER": 720
                }
                return {
                    id,
                    name: "Kilobox Large",
                    price: largePrice[region],
                    qty: 1,
                    boxFee: 35
                };
            }

            if(weight > 3){
                let mediumPrice = {
                    "NCR": 220,
                    "N. LUZON": 320,
                    "S. LUZON": 320,
                    "VISAYAS": 370,
                    "MINDANAO": 370,
                    "ISLANDER": 370
                }
                return {
                    id,
                    name: "Kilobox Medium",
                    price: mediumPrice[region],
                    qty: 1,
                    boxFee: 20
                };
            }

            if(weight > 1){
                let smallPrice = {
                    "NCR": 160,
                    "N. LUZON": 190,
                    "S. LUZON": 190,
                    "VISAYAS": 200,
                    "MINDANAO": 200,
                    "ISLANDER": 200
                }
                return {
                    id,
                    name: "Kilobox Small",
                    price: smallPrice[region],
                    qty: 1,
                    boxFee: 20
                };
            }

            let miniPrice = {
                "NCR": 120,
                "N. LUZON": 150,
                "S. LUZON": 150,
                "VISAYAS": 160,
                "MINDANAO": 160,
                "ISLANDER": 160
            };

            return {
                id,
                name: "Kilobox Mini",
                price: miniPrice[region],
                qty: 1,
                boxFee: 15
            };

        }

        function getBoxes(){
            let boxes = [];
            let weight = store.state.cart.totalWeight / 1000;
            let xlQty = 0;
            let id = 1;
            let xlPrice = {
                "NCR": 820,
                "N. LUZON": 1220,
                "S. LUZON": 1220,
                "VISAYAS": 1420,
                "MINDANAO": 1420,
                "ISLANDER": 1420
            }
            while(weight >= 19 || weight > 10){
                xlQty++;
                weight -= 19;
            }

            if(xlQty > 0){
                boxes.push({
                    id,
                    qty: xlQty,
                    name: "Kilobox XL",
                    price: xlQty * xlPrice[data.region],
                    boxFee: 60 * xlQty
                });
                id++;
            }

            let residue = residueBox({weight, id, region: data.region});
            if(residue)
                boxes.push(residue);

            return boxes;
        } 
        let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
        let data = await docRef.get().then(doc => doc.data())
        let boxes = getBoxes()
        data.boxes = boxes
        data.shippingPrice = 0;
        for(let box of boxes){
            data.shippingPrice += box.price + box.boxFee
        }
        data.grandTotal = data.shippingPrice + store.state.cart.total
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
                    shippingPrice: this.data.shippingPrice,
                    grandTotal: this.data.grandTotal,
                    boxes: this.data.boxes,
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
