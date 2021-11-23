<template>
    <div>
        <div class="prodreview-header text-center regular text-uppercase py-2">
            Product Review
        </div>
        <div class="container-fluid d-flex flex-column regular text-uppercase">
            <div class="message-box mt-4 mb-2 p-3 mx-auto w-75">
                <NuxtLink class="text-uppercase return regular" :to="'/orderdetail/'+slug">
                Return To Order Details
                </NuxtLink>
                <div class="prodreview-mainmessage regular text-uppercase py-2">
                THANK YOU FOR SUPPORTING ANGEL’S SCENT.
                </div>
                <div class="prodreview-submessage regular">
                If you would like to review our products, please submit it here. We hope to hear from you!
                </div>
            </div>
            <form @submit="submit">
                <div class="shadow prodreview-box mt-4 mb-2 p-3 mx-auto w-75">
                    <table class="table align-middle text-center text-uppercase my-2">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Rating <br>(Lowest = 1, Highest = 5)</th>
                                <th scope="col">Review</th>
                            </tr>
                        </thead>
                        <tbody class="regular">
                            <tr v-for="item in data.items">
                                <td class="align-middle">
                                    <div>{{ item.name }}</div>
                                    <div>{{ item.weight}}ML</div>
                                </td>
                                <td>
                                    <div class="col-4 d-flex justify-content-center mx-auto">
                                        <select :id='"rating"+item.id' class="form-select border border-secondary">
                                            <option value="1">1</option>
                                            <option value="2" >2</option>
                                             <option value="3" >3</option>
                                              <option value="4" >4</option>
                                               <option value="5" selected>5</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="row px-4 my-3 pb-1">
                                        <div class="col">
                                            <textarea v-model="review" class="form-control w-80" placeholder="Leave a review here" :id='"review"+item.id' style="height: 130px" required></textarea>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-center">
                        <button type="submit" id="submit" class="shadow-sm text-uppercase btn btn-light submit-btn regular mt-2 px-4 py-2 mx-auto">Submit Review</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        // return{
        //     review: ''
        // }
    },
    async asyncData({$fire, params}) {
        let slug = params.slug;
        let docRef = $fire.firestore.collection('orders').doc(slug)
        let data = await docRef.get().then(doc => doc.data())
        return{data, slug}
    },
    methods: {
        async submit(event){
            event.preventDefault()
            for(var i = 0; i < this.data.items.length; i++){

                let text = document.getElementById('review'+this.data.items[i].id).value
                var e = document.getElementById('rating'+this.data.items[i].id);
                var num = e.options[e.selectedIndex].value;

                this.$fire.firestore.collection("reviews").add({
                    name: this.data.name,
                    productId: this.data.items[i].productid,
                    productName: this.data.items[i].name, 
                    review: text,
                    rating: num
                })
            }
            this.$router.push('/account/orderlist')
        }
    }
    
}
</script>

<style scoped>

textarea{
    font-size: 0.8rem;
}

.return{
    color: #79808F;
    font-size: 0.8rem;
}

.prodreview-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.prodreview-mainmessage{
    font-size: 1.5rem;
}

.prodreview-submessage{
    font-size: 1rem;
}

.prodreview-box{
    background-color: #FAFAFA;
    border-radius: 10px;
}

.message-box{
    border-radius: 10px;
}

.submit-btn{
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
}

</style>
