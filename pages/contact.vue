<template>
    <div>
        <div class="contact-header py-3">
            <div class="text-center regular text-uppercase">
                Contact Us
            </div>
            <div class="text-center regular fs-6">
                Send us a message and we will be in touch within one business day.
            </div>
        </div>
        <div class="container-fluid d-flex flex-column regular">
            <form class="px-4" action="https://formspree.io/f/mjvjlvwy" method="POST">
                <div class="shadow contact-box mt-3 mb-4 px-3 py-4 mx-auto w-75">
                    <div class="row px-4">
                        <div class="col-sm-6 my-3">
                            <label for="firstNameInput" class="form-label">First Name</label>
                            <input name="First Name" type="firstName" class="form-control" id="firstNameInput" aria-describedby="emailHelp" required>
                        </div>

                        <div class="col-sm-6 my-3">
                            <label for="lastNameInput" class="form-label">Last Name</label>
                            <input name="Last Name" type="lastName" class="form-control" id="lastNameInput" aria-describedby="emailHelp" required>
                        </div>
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-12 my-3">
                            <label for="emailInput" class="form-label">Email Address</label>
                            <input name="Email" type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" required>
                        </div>                       
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-12 my-3">
                            <label for="contactNumberInput" class="form-label">Contact Number</label>
                            <input name="Contact Number" type="number" class="form-control" id="contactNumberInput" aria-describedby="emailHelp" requried>
                        </div>
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-12 my-3">
                            <label for="subjectInput" class="form-label">Subject</label>
                            <input name="Subject" type="subject" class="form-control" id="subjectInput" aria-describedby="emailHelp" required>
                        </div>
                    </div>
                    <div class="row px-4 pb-1">
                        <div class="col-sm-12 my-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea name="Message" class="form-control w-100" placeholder="" id="message" style="height: 80px" required></textarea>
                        </div>
                    </div>
                    <div class="row px-4">
                        <button type="submit" class="shadow-sm text-uppercase btn btn-light submit-btn regular mt-2 px-4 py-2">Submit Inquiry</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

textarea{
    font-size: 0.8rem;
}
.contact-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.contact-box{
    background-color: #FAFAFA;
    border-radius: 10px;
}

.submit-btn{
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
}

</style>
