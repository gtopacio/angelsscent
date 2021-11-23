<template>
<div class="col-2">
    <ul class="nav flex-column account-info shadow text-uppercase medium text-end py-2">
        <li class="nav-item">
           <NuxtLink to="/account/info"><a class="nav-link">Account <br>Information</a></NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink to="/account/orderlist"><a class="nav-link">Order List</a></NuxtLink>
        </li>
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

</style>