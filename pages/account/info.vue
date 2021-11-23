<template>
    <div>
        <div class="account-header text-center text-uppercase py-2 regular">
            Account
        </div>
        <div class="container-fluid">
            <div class="row py-3">
                <AccountNavbar />
                <div class="col-10">
                    <div class="row">
                        <div class="col-md">
                            <div class="regular m-auto">
                                <div class="d-flex flex-column mx-3">
                                    <div class="shadow account-info p-3 mb-4">
                                        <div class="section-title medium text-uppercase mb-3">Profile</div>
                                        <div class="container-fluid my-2 account-section">
                                            <div class="my-2">
                                                <div class="text-uppercase medium">First Name</div>
                                                <div class="section-body medium">{{ data.fName }}</div>
                                            </div>
                                            <div class="my-2">
                                                <div class="text-uppercase medium">Last Name</div>
                                                <div class="section-body medium">{{ data.lName}}</div>
                                            </div>
                                            
                                            <div class="my-2">
                                                <div class="text-uppercase medium">Email</div>
                                                <div class="section-body medium">{{ data.email }}</div>
                                            </div>

                                            <div class="my-2">
                                                <div class="text-uppercase medium">Phone Number</div>
                                                <div class="section-body medium">{{ data.contactNo }}</div>
                                            </div>
                                            
                                            <div class="d-flex justify-content-center">
                                                <button type="button" class="shadow text-uppercase btn btn-light editbtn regular p-3 mt-2" data-bs-toggle="modal" data-bs-target="#editProfile">Edit Profile Information</button>
                                            </div>
                                            <EditProfile 
                                                :id="data.id"
                                                :email="data.email"
                                                :contactNo="data.contactNo"
                                                :fName="data.fName"
                                                :lName="data.lName"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="shadow account-info p-3 mb-4">
                                <div class="section-title medium text-uppercase mb-3">Shipping Information</div>
                                <div class="container-fluid my-2 account-section">
                                    <div class="my-2">
                                        <div class="text-uppercase medium">Address Line 1</div>
                                        <div class="section-body medium">{{ data.streetAdd }}</div>
                                    </div>
                                    
                                    <div class="my-2">
                                        <div class="text-uppercase medium">City</div>
                                        <div class="section-body medium">{{ data.city }}</div>
                                    </div>

                                    <div class="my-2">
                                        <div class="text-uppercase medium">Province</div>
                                        <div class="section-body medium">{{ data.province }}</div>
                                    </div>

                                    <div class="my-2">
                                        <div class="text-uppercase medium">Zipcode</div>
                                        <div class="section-body medium">{{ data.zipcode }}</div>
                                    </div>
                                    
                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="shadow text-uppercase btn btn-light editbtn regular p-3 mt-2" data-bs-toggle="modal" data-bs-target="#editShipping">Edit Shipping Information</button>
                                    </div>
                                    <EditShipping 
                                        :id="data.id" 
                                        :streetAdd="data.streetAdd"
                                        :city="data.city"
                                        :province="data.province"
                                        :zipcode="data.zipcode"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="shadow account-info p-3 mb-4 w-50 mx-auto">
                        <div class="section-title medium text-uppercase mb-2 text-center">Account Deletion</div>
                        <div class="container-fluid my-2">
                            <div class="d-flex justify-content-center">
                                <button type="button" class="shadow text-uppercase btn btn-light editbtn regular p-3 mt-2">Delete Account</button>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    async asyncData({ $fire, store }){
        let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
        let data = await docRef.get().then(doc => doc.data())
        data.id = store.state.user.uid
        return{ data }
    }
}
</script>

<style scoped>

.account-bg{
    background-color: #FAFAFA;
}

.account-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.account-list, .account-info{
    background-color: white;
    border-radius: 10px;
}

.account-section{
    letter-spacing: 1.8px;
}

.section-title{
    font-size: 1.5rem;
}

.section-body{
    color: #79808F;
}

.editbtn{
    font-size: 0.8rem;
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
}

.nav-link{
    color: #79808F;
}

.active{
    color: black;
}

</style>
