<template>
    <div>
        <div class="payment-header py-3">
            <div class="text-center regular text-uppercase">
                Online Payment Form
            </div>
            <div class="text-center regular fs-6">
                Complete the information below to submit your proof of payment.
            </div>
        </div>
        <div class="container-fluid d-flex flex-column regular">
            <div class="shadow payment-box mt-3 mb-4 px-3 py-2 mx-auto w-75">
                <form class="px-4" action="https://formspree.io/f/xayavyoj" method="POST">
                    <div class="row px-4">
                        <legend class="my-3">Contact Information</legend>
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-6 my-3">
                            <label for="firstName" class="form-label">First Name</label>
                            <input type="firstName" class="form-control" id="firstName" name="First Name" required>
                        </div>
                        <div class="col-sm-6 my-3">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="lastName" class="form-control" id="lastName" name="Last Name" required>
                        </div>
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-12 my-3">
                            <label for="emailInput" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="emailInput" name="Email" required>
                        </div>
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-12 my-3">
                            <label for="contactInput" class="form-label">Contact Number</label>
                            <input type="number" class="form-control" id="contactInput" name="Contact"  required>
                        </div>
                    </div>
                    <hr class="my-4">
                    <div class="row px-4">
                        <legend class="my-3">Order Information</legend>
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-12 my-3">
                            <label for="orderInput" class="form-label">Order Number</label>
                            <input type="text" class="form-control" id="orderInput"  name="Order number" required>
                        </div>
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-12 my-3">
                            <label for="gcashInput" class="form-label">GCash Transaction Number</label>
                            <input type="number" class="form-control" id="gcashInput" name="Gcash Number" required>
                        </div>
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-12 my-3">
                            <label for="totalInput" class="form-label">Total Amount</label>
                            <input type="number" class="form-control" id="totalInput" name= "Total" required>
                        </div>
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-12 my-3">
                            <label for="formFile" class="form-label">Screenshot / Receipt for proof of transaction</label>
                            <input type="file" id="formFile" class="form-control" accept="image/png, image/gif, image/jpeg" name="File" required>
                        </div>
                    </div>
                    <div class="row px-4">
                        <div class="my-3">
                            <button type="submit" class="shadow-sm btn btn-light submit-btn regular mt-2 py-2">Submit Form</button>
                        </div>
                    </div>
                </form>
            </div>            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

    .payment-header{
        font-size: 1.5rem;
        border-style: solid;
        border-width: 2px 0;
        border-color: #E5E5E5;
    }

    .payment-box{
        background-color: #FAFAFA;
        border-radius: 10px;
    }

    .submit-btn{
        background-color: #9F9A96;
        border-color: #9F9A96;
        color: white;
    }

    .payment-container{
        background: #FFFFFF;
        border-radius: 25px;
    }

    .payment-text{
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 20.5px;
    }

    .btn-container{
        width: 335px;
    }

    .button {
        background: #9F9A96;
        border-radius: 8px;
    }

</style>
