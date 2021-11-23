<template>
    <div class="card border-0 text-center my-2 mx-4" style="width: 12rem;">
        <img :src="img" class="card-img-top m-auto mt-3" style="width: 7.5rem;" alt="...">
        <div class="card-body">
            <h5 class="card-title text-uppercase medium">{{name}}</h5>
            <div class="card-text regular my-1">{{weight}}ML</div>
            <div class="card-text light my-1">₱{{price}}.00</div>
        </div>
        <NuxtLink :to="path">
            <button type="button" class="text-uppercase btn btn-light view-btn regular my-2 w-75">View Product</button>
        </NuxtLink>
    </div>
    

</template>
<script>
export default {
    props:{
        name: String,
        price: Number,
        weight: Number,
        path: String, 
        img: String
    }
}
</script>

<style scoped>

.card{
    transition: box-shadow .3s;
    background-color: #FAFAFA;
}

.card:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
}

.card-title{
    font-size: 0.9rem;
    color: black;
}

.card-text{
    color: #79808F;
    font-size: 0.8rem;
}

.view-btn{
    font-size: 0.7rem;
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
}

a{
    text-decoration: none;
}

</style>