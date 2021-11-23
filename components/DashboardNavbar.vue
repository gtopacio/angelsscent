<template>
<div class="col-2">
    <ul class="nav flex-column account-info shadow text-uppercase medium text-end">
        <ul class="nav flex-column account-info shadow text-uppercase medium py-2 pl-3">
            <li class="nav-item">
                <span class="navbar-brand">Products</span>
            </li>
            <li class="nav-item light regular">
                <NuxtLink to="/dashboard/productinventory"><a class="nav-link">Product <br>Inventory</a></Nuxtlink>
            </li>
            <li class="nav-item regular">
                <NuxtLink to="/dashboard/addproduct"><a class="nav-link">Add Product</a></Nuxtlink>
            </li>
            <li class="nav-item mt-4">
                <span class="navbar-brand">Orders and Sales</span>
            </li>
            <li class="nav-item regular">
                 <NuxtLink to="/dashboard/orders"><a class="nav-link">Orders</a></Nuxtlink>
            </li>
            <li class="nav-item regular">
                <NuxtLink to="/dashboard/sales"><a class="nav-link" href="/dashboard/sales">Sales Data</a></Nuxtlink>
            </li>  
        </ul>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.nav-link, .navbar-brand{
    color: #79808F;
}

.active{
    color: black;
}

.account-list, .account-info{
    background-color: white;
    border-radius: 10px;
}

li a {
    text-decoration: none;
}

.save-btn{
    font-size: 0.8rem;
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
}
</style>