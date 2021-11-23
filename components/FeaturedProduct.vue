<template>
    
    <div class="card border-0 text-center m-auto" style="width: 12rem;">
        <img src="~/assets/product.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-uppercase medium">Adelaide</h5>
            <p class="card-text regular">BURBERRY X BURBERRY</p>
        </div>
        <NuxtLink to="/product/qoO71VMreFaKTweuVgBl">
            <button type="button" class="text-uppercase btn btn-light view-btn regular my-2 mx-1">View Product</button>
        </NuxtLink>
    </div>
    

</template>
<script>
export default {

}
</script>

<style scoped>

.card{
    background-color: #FAFAFA;
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