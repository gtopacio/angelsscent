<template>
    <div class="modal fade" :id='"removeCart"+id' tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <!-- Text -->
                                <div class="row border-bottom">
                                    <div class="col"><p class="confirmation-text text-center mt-2 mb-4 py-2">Are you sure you want to remove this from your shopping cart?</p></div>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="row btn-container mt-4 mb-2">
                                        <div class="col d-grid gap-2"><button type="button" @click="onDelete()" class="btn btn-secondary btn-format text-uppercase">Remove</button></div>
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase" data-bs-dismiss="modal">Cancel</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

import $ from 'jquery'

export default {
    props:{
        id: String,
    },
    methods:{
        onDelete(){    
            this.$store.commit('cart/remove', { 
                id: this.id, 
                uid: this.$fire.auth.currentUser.uid 
            })
            $('.modal-backdrop').remove();
        }
    }
}
</script>

<style>

    .popup-container{
        background: #FFFFFF;
        border-radius: 25px;
    }

    .confirmation-text {
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 18.5px;
    }

    .btn-container{
            width: 335px;
        }

    .btn-format {
        background: #9F9A96;
        border-radius: 8px;
    }
</style>
