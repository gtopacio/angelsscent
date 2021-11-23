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
                        <div class="section-title medium text-uppercase py-3">
                            Add Product
                        </div>
                        <div id="content" class="container-fluid d-flex flex-column regular text-uppercase p-5 w-100 bg justify-content-center">
                            <form ref="productForm" action="" @submit="submit">
                                <div class="row mt-3 pt-2 d-flex">
                                    <div class="col-sm-2">
                                        <p>Product Name</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="name" class="w-75 border border-secondary" type="text" id="productName" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Product Description</p>
                                    </div>
                                    <div class="col-sm-5">
                                        <textarea v-model="description" id="productDesc" class="form-control border border-secondary" rows="3" required></textarea>
                                    </div>
                                    <div class="col-sm-5"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Length</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="length" class="w-75 border border-secondary" type="number" id="length" min="1" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Width</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="width" class="w-75 border border-secondary" type="number" id="width" min="1" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Height</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="height" class="w-75 border border-secondary" type="number" id="height" min="1" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Weight (In ml)</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="weight" class="w-75 border border-secondary" type="number" id="weight" min="1" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Price</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="price" class="w-75 border border-secondary" type="number" id="price" min="1" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Quantity</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="qty" class="w-75 border border-secondary" type="number" id="quantity" min="1" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-sm-2">
                                        <p>Product Photo</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input class="form-control form-control-sm" type="file" @change="uploadImage" id="formFile" accept="image/png, image/gif, image/jpeg" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 mb-4">
                                     <div class="col-sm-2">
                                        <p>Tag</p>
                                    </div>
                                    <div class="col-sm-3">
                                        <select id="tagoption" class="form-select border border-secondary">
                                            <option value="1">MEN</option>
                                            <option value="2">WOMEN</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row" mt-3>
                                    <div class="col-sm-4"></div>
                                    <div class="col-sm-4">
                                        <button type="submit" class="btn w-75 pt py-2 px-3 text-uppercase" id = "submit">Add product</button>
                                    </div>
                                    <div class="col-sm-4"></div>
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

        data(){
            return{
                image: null
            }
        },
        async submit(event){
            event.preventDefault()
            var t = document.getElementById("tagoption");
            var tagNum = t.options[t.selectedIndex].value;
            if(tagNum == 1)
                this.tag = 'men'
            else
                this.tag = 'women'

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
        },
        uploadImage(e){
            let file = e.target.files[0]
            var storageRef = this.$fire.storage.ref(file.name)
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