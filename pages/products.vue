<template>
<div> 
    <div class="account-header text-center text-uppercase py-2 regular">
         Products   
    </div>
    <div class="py-4">
        <div class="container">
            <div class="shadow products-box px-4">
               <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="women-tab" data-bs-toggle="tab" data-bs-target="#women" type="button" role="tab" aria-controls="home" aria-selected="true">FOR WOMEN</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="men-tab" data-bs-toggle="tab" data-bs-target="#men" type="button" role="tab" aria-controls="profile" aria-selected="false">FOR MEN</button>
                    </li>
                </ul>
                <div class="tab-content d-flex flex-wrap" id="myTabContent">
                    <div class="tab-pane fade show active px-4 my-4 mx-auto" id="women" role="tabpanel" aria-labelledby="home-tab">
                        <div class="d-flex flex-wrap justify-content-center">
                            <ProductCard 
                                v-for="product in women" 
                                :key="product.id"
                                :name="product.name"
                                :price="product.price"
                                :weight="product.weight"
                                :path="`/product/${product.id}`"
                                :img="product.img"/>
                        </div>
                        
                    </div>
                    <div class="tab-pane fade px-4 my-4 mx-auto" id="men" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="d-flex flex-wrap justify-content-center">
                           <ProductCard 
                                v-for="product in men" 
                                :key="product.id"
                                :name="product.name"
                                :price="product.price"
                                :weight="product.weight"
                                :path="`/product/${product.id}`"
                                :img="product.img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default{
    data(){
        return {
            products: []
        }
    },
    async asyncData({$fire}) {
        let collection = $fire.firestore.collection('products').where('display', '==', 'listed') //.doc(document.id)
        let documents = await collection.get()
        
        let array = []
        await Promise.all(documents.docs.map(document => { //remove map for single document
            array.push({id: document.id, ...document.data()})
        }))

        let men = array.filter(document => document.tag == "men")
        let women = array.filter(document => document.tag == "women")
        return{men, women}
    } 

}

</script>

<style scoped>

.account-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.products-bg{
    background-color: #FAFAFA;
}

.products-box{
    background-color: white;
    border-radius: 10px;
}

.nav-link{
    color: #79808F;
}
</style>