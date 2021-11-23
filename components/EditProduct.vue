<template>
<div>
    <div :id="'edit-modal'+id" class="modal fade" role="dialog">
        <div class="modal-dialog modal-xl round">
            <div class="modal-content round">
                <form @submit="submit">
                    <div class="container-fluid text-start d-flex flex-column regular text-uppercase p-5 w-100 bg">
                        <div class="row">
                            <div class="col-sm-3">
                                <p>Product Photo</p>
                            </div>
                            <div class="col-sm-9">
                                <input class="form-control form-control-sm" type="file" @change="uploadImage" accept="image/png, image/gif, image/jpeg">
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Product Name</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="name" class="w-75 border border-secondary" type="text" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Product Description</p>
                            </div>
                            <div class="col-sm-9">
                                <textarea v-model="description" class="form-control border border-secondary" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Length</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="length" class="w-75 border border-secondary" type="number" min="1" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Width</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="width" class="w-75 border border-secondary" type="number" min="1" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Height</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="height" class="w-75 border border-secondary" type="number" min="1" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Weight (In ml)</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="weight" class="w-75 border border-secondary" type="number" min="1" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Price</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="price" class="w-75 border border-secondary" type="number"  min="1" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Quantity</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="qty" class="w-75 border border-secondary" type="number" min="0" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Status</p>
                            </div>
                            <div v-if="display == 'listed'" class="col-sm-3">
                                <select :id="'displayoption'+id" class="form-select border border-secondary">
                                    <option value="1" selected >LISTED</option>
                                    <option value="2" >HIDDEN</option>
                                </select>
                            </div>
                            <div v-if="display == 'hidden'" class="col-sm-3">
                                <select :id="'displayoption'+id" class="form-select border border-secondary">
                                    <option value="1"  >LISTED</option>
                                    <option value="2" selected>HIDDEN</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Tag</p>
                            </div>
                            <div v-if="tag == 'men'" class="col-sm-3">
                                <select :id="'tagoption'+id" class="form-select border border-secondary">
                                    <option value="1" selected>MEN</option>
                                    <option value="2" >WOMEN</option>
                                </select>
                            </div>
                            <div v-if="tag == 'women'" class="col-sm-3">
                                <select :id="'tagoption'+id" class="form-select border border-secondary">
                                    <option value="1">MEN</option>
                                    <option value="2" select>WOMEN</option>
                                </select>
                            </div>
                        </div>
                        <!-- <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Tag</p>
                            </div>
                            <div class="col-sm-3 dropdown">
                                <button class="btn btn-secondary dropdown-toggle text-uppercase" type="button" id="tagDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Choose tag
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" @click="changeTag('women')">Women</a></li>
                                    <li><a class="dropdown-item" @click="changeTag('men')">Men</a></li>
                                </ul>
                            </div>
                        </div> -->
                        
                        <div class="row mt-3 pt-5 w-100 d-flex justify-content-center">
                            <button type="submit" class="btn btn-lg btn-block w-50 save-btn btn-outline-light text-uppercase">Save Changes</button>
                        </div>
                    </div>
                </form>
            </div>
	    </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
            image: null
        }
    },
    props:{
        id: String,
        name: String, 
        description: String, 
        length: Number, 
        width: Number, 
        height: Number,
        weight: Number, 
        price: Number, 
        qty: Number, 
        display: String,
        tag: String
    },
    async asyncData(){
        console.log(this.tag)
    },
    methods:{
        async submit(event){
            event.preventDefault()
            var displayStatus, tagStatus
            var e = document.getElementById("displayoption"+this.id);
            var displayNum = e.options[e.selectedIndex].value;
            var t = document.getElementById("tagoption"+this.id);
            var tagNum = t.options[t.selectedIndex].value;
            
            console.log(this.image)
            if( displayNum == 1)
                displayStatus = 'listed'
            else
                displayStatus = 'hidden'
            if( tagNum == 1)
                tagStatus = 'men'
            else
                tagStatus = 'women'
            if(this.image == null){
                try {
                    this.$fire.firestore.collection("products").doc(this.id).update({
                        name: this.name.trim(), 
                        description: this.description.trim(),
                        length: parseInt(this.length), 
                        width: parseInt(this.width),  
                        height: parseInt(this.height),
                        weight: parseInt(this.weight), 
                        price: parseInt(this.price), 
                        qty: parseInt(this.qty), 
                        tag: tagStatus,
                        display: displayStatus
                    })
                    
                } catch (e) {
                    alert(e)
                }
            }
            else{
                try {
                    this.$fire.firestore.collection("products").doc(this.id).update({
                        name: this.name.trim(), 
                        description: this.description.trim(),
                        length: parseInt(this.length), 
                        width: parseInt(this.width),  
                        height: parseInt(this.height),
                        weight: parseInt(this.weight), 
                        price: parseInt(this.price), 
                        qty: parseInt(this.qty), 
                        tag: tagStatus,
                        display: displayStatus,
                        img: this.image
                    })
                    
                } catch (e) {
                    alert(e)
                }
            }
            
            this.$router.app.refresh()         
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
        }
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
.bg{
    background-color: #FAFAFA;
}
#submit{
    background-color: #9F9A96;
    color: white;
    border-radius: 8px;
}
.round{
    border-radius: 30px;
}
option{
    background: white;
}
</style>