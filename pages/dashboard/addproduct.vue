@ -0,0 +1,119 @@
<template>
    <div>
        <div class="dashboard-header text-center text-uppercase py-2 regular">
            Dashboard
        </div>
        <div class="container-fluid ">
            <div class="row py-3">
                <DashboardNavbar />
                <div class="col-10">
                    <div class="shadow container-fluid data-bg p-3 rounded-3">
                        <div class="section-title medium text-uppercase py-3 px-4">
                            Add Product
                        </div>
                        <div id="content" class="container-fluid d-flex flex-column regular text-uppercase p-5 w-100 bg justify-content-center">
                            <form ref="productForm" action="" @submit="submit">
                                <div class="row mt-3 pt-2 d-flex">
                                    <div class="col-sm-6 my-3">
                                        <label for="productName" class="form-label">Product Name</label>
                                        <input v-model="name" class="form-control" type="text" id="productName">
                                        <div class="small red text-danger" id="product-name-error" > </div>
                                    </div>
                                </div>

                                <div class="row mt-3 pt-2">

                                    <div class="col-sm-6 my-3">
                                        <label for="length" class="form-label">Product Description</label>
                                        <textarea v-model="description" id="productDesc" class="form-control" rows="3" ></textarea>
                                        <div class="small red text-danger" id="product-description-error" > </div>
                                    </div>

                                </div>
                    <br><br>
                    <hr class="my-4">

                    <div class="small text-uppercase py-2">
                        <legend class="my-3">Shipping Requirements</legend>
                    </div>

                                <div class="row px-2">
                                    <div class="col-sm-6 my-3">
                                        <label for="length" class="form-label">Length</label>
                                        <input v-model="length" class="form-control" type="number" id="length" min="1" >
                                        <div class="small red text-danger" id="shipping-length-error" > </div>
                                    </div>

                                    <div class="col-sm-6 my-3">
                                        <label for="width" class="form-label">Width</label>
                                        <input v-model="width" class="form-control" type="number" id="width" min="1" >
                                        <div class="small red text-danger" id="shipping-width-error" > </div>
                                    </div>
                                </div>


                                <div class="row px-2">
                                    <div class="col-sm-6 my-3">
                                        <label for="height" class="form-label">Height</label>
                                        <input v-model="height" class="form-control" type="number" id="height" min="1" >
                                        <div class="small red text-danger" id="shipping-height-error" > </div>
                                    </div>

                                    <div class="col-sm-6 my-3">
                                        <label for="weight" class="form-label">Weight (in g)</label>
                                        <input v-model="weight" class="form-control" type="number" id="weight" min="1" >
                                        <div class="small red text-danger" id="shipping-weight-error" > </div>
                                    </div>
                                </div>

                    <br><br>
                    <hr class="my-4">

                    <div class="small text-uppercase py-2">
                        <legend class="my-3">Listing Requirements</legend>
                    </div>


                            <div class="row px-2">
                                    <div class="col-sm-6 my-3">
                                        <label for="price" class="form-label">Price</label>
                                        <input v-model="price" class="form-control" type="number" id="price" min="1" >
                                        <div class="small red text-danger" id="listing-price-error" > </div>
                                    </div>

                                    <div class="col-sm-6 my-3">
                                        <label for="quantity" class="form-label">Quantity</label>
                                        <input v-model="qty" class="form-control" type="number" id="quantity" min="1" >
                                        <div class="small red text-danger" id="listing-quantity-error" > </div>
                                    </div>
                            </div>

                            <div class="row px-2">
                                    <div class="col-sm-6 my-3">
                                        <label for="formFile" class="form-label">Product Photo</label>
                                        <input class="form-control form-control-sm" type="file" @change="uploadImage" id="formFile" accept="image/png, image/gif, image/jpeg" >
                                        <div class="small red text-danger" id="product-photo-error" > </div>
                                    </div>

                                    <div class="col-sm-6 my-3">
                                        <label for="tagoption" class="form-label">Tag</label>
                                        <select id="tagoption" class="form-select ">
                                            <option value="1">MEN</option>
                                            <option value="2">WOMEN</option>
                                        </select>
                                    </div>
                            </div>

                                <br><br>
                                <div class="row" mt-3>
                                    <div class="col-sm-12"></div>
                                    <div class="col-sm-12">
                                        <button type="submit" class="btn w-100 pt py-2 px-3 text-uppercase" id = "submit">Add product</button>
                                    </div>
                                    <div class="col-sm-12"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    data(){
        return{
            name: '',
            description: '',
            weight: '',
            length: '',
            height: '',
            width: '',
            price: '',
            qty: '',
            tag: ''
        }
    },
    methods: {
      /*
        data(){
            return{
                image: null
            }
        },*/
        async submit(event){
            event.preventDefault()
            this.$emit('submit')
            let t = document.getElementById("tagoption");
            let tagNum = t.options[t.selectedIndex].value;
            this.tag = tagNum == 1 ? 'men' : 'women';

            var isValidProduct = true;

            if (this.name.length < 1){
                $("#product-name-error").text("Please fill out this field.");
                isValidProduct = false;
            }
            else
                $("#product-name-error").text("");

            if (this.description.length < 1){
                $("#product-description-error").text("Please fill out this field.");
                isValidProduct = false;
            }
            else
                $("#product-description-error").text("");

            if (this.weight.length < 1){
                $("#shipping-weight-error").text("Please fill out this field.");
                isValidProduct = false;
            }
            else
                $("#shipping-weight-error").text("");

            if (this.length.length < 1){
                $("#shipping-length-error").text("Please fill out this field.");
                isValidProduct = false;
            }
            else
                $("#shipping-lenght-error").text("");

            if (this.height.length < 1){
                $("#shipping-height-error").text("Please fill out this field.");
                isValidProduct = false;
            }
            else
                $("#shipping-height-error").text("");

            if (this.width.length < 1){
                $("#shipping-width-error").text("Please fill out this field.");
                isValidProduct = false;
            }
            else
                $("#shipping-width-error").text("");

            if (this.price.length < 1){
                $("#listing-price-error").text("Please fill out this field.");
                isValidProduct = false;
            }
            else
                $("#listing-price-error").text("");

            if (this.qty.length < 1){
                $("#listing-quantity-error").text("Please fill out this field.");
                isValidProduct = false;
            }
            else
                $("#listing-quantity-error").text("");

            //add error for missing image
            //$("#product-photo-error").text("Please upload an image.");
            //$("#product-photo-error").text("");

            if (isValidProduct){
                try {
                    this.$fire.firestore.collection("products").add({
                        name: this.name,
                        description: this.description,
                        weight: parseInt(this.weight),
                        length: parseInt(this.length),
                        height: parseInt(this.height),
                        width: parseInt(this.width),
                        price: parseInt(this.price),
                        qty: parseInt(this.qty),
                        tag: this.tag,
                        display: 'listed',
                        img: this.image
                    })
                    this.$router.push('/products')
                } catch (e) {
                    alert(e)
                }
            }
        },
        uploadImage(e){
            let file = e.target.files[0]
            let storageRef = this.$fire.storage.ref(file.name)
            let uploadTask = storageRef.put(file)

            uploadTask.on('state changed', (snapshot) => {
            }, (error) => {

            }, () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
                    this.image = downloadURL
                })
            })
        },
        previewImage(event){
            this.image=event.target.files[0]
        },
    }
}
</script>

<style scoped>
.btn{
    background-color: #9F9A96;
    color: white;
    border-radius: 8px;
    font-weight: bold;

}

.section-title{
    font-size: 1.4rem;
    border-bottom: 1px solid;
    border-color: #312828;
}

.dashboard-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    background-color:white;
    border-color: #E5E5E5;
}
</style>
