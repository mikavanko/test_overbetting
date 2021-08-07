<template>
    <div class="container footer">
        <div v-if="width >= 992">
            <div class="row">
                <div class="col-lg-6">
                    <div class="footer-logo-wrapper">
                        <span class="footer-logo">
                            <img class="footer-logo-img" src="~@/assets/images/logo.svg" alt="logo">
                        </span>
                        <span class="footer-logo-text">DAX</span>
                    </div>
                    <p class="footer-copyrights">©2019 ESRInternational OU</p>
                    <p class="footer-copyrights">Tallinn, Kesklinna Linnaosa, Narva mnt 7-634<br> Reg. number 14452600.</p>
                </div>
                <div class="col-lg-2 footer-item">
                    <a href="#" class="footer-link">Support</a>
                    <a href="#" class="footer-link">FAQ</a>
                </div>
                <div class="col-lg-2 footer-item">
                    <a href="#" class="footer-link-light">GDPR</a>
                    <a href="#" class="footer-link-light">Licenses</a>
                    <a href="#" class="footer-link-light">AML/KYC Policy</a>
                </div>
                <div class="col-lg-2 footer-item">
                    <a href="#" class="footer-link-light">Risk Disclosure Statement</a>
                    <a href="#" class="footer-link-light">Privacy policy</a>
                    <a href="#" class="footer-link-light">User agreement</a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <a href="#" class="footer-link">Write to us</a>
                </div>
                <div class="col-lg-6">
                    <a href="#" class="footer-pay"><img src="~@/assets/images/visa.svg" alt="visa"></a>
                    <a href="#" class="footer-pay"><img src="~@/assets/images/mastercard.svg" alt="mastercard"></a>
                    <a href="#" class="footer-pay"><img src="~@/assets/images/appstore.svg" alt="appstore"></a>
                    <a href="#" class="footer-pay"><img src="~@/assets/images/googleplay.svg" alt="googleplay"></a>
                </div>
            </div>
        </div>
        <div v-else>
            <hr class="hr">
            <div class="row">
                <div class="col-2">
                    <div class="footer-logo-wrapper">
                        <span class="footer-logo">
                            <img class="footer-logo-img" src="~@/assets/images/logo.svg" alt="logo">
                        </span>
                        <span class="footer-logo-text">DAX</span>
                    </div>
                </div>
                <div class="col-10">
                    <div class="row footer-item">
                        <div class="col-12">
                            <a href="#" class="footer-link">Support</a>
                            <a href="#" class="footer-link">FAQ</a>
                            <a href="#" class="footer-link">Write to us</a>
                        </div>
                    </div>
                    <div class="row footer-item">
                        <div class="col-6">
                            <a href="#" class="footer-link-light">GDPR</a>
                            <a href="#" class="footer-link-light">Licenses</a>
                            <a href="#" class="footer-link-light">AML/KYC Policy</a>
                            <div class="footer-pay-wrapper">
                                <a href="#" class="footer-pay"><img src="~@/assets/images/visa.svg" alt="visa"></a>
                                <a href="#" class="footer-pay"><img src="~@/assets/images/mastercard.svg" alt="mastercard"></a>
                            </div>
                        </div>
                        <div class="col-6">
                            <a href="#" class="footer-link-light">Risk Disclosure Statement</a>
                            <a href="#" class="footer-link-light">Privacy policy</a>
                            <a href="#" class="footer-link-light">User agreement</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="footer-copyrights">©2019 ESRInternational OU</p>
                    <p class="footer-copyrights">Tallinn, Kesklinna Linnaosa, Narva mnt 7-634<br> Reg. number 14452600.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        width: 0
    }),
    created: function(){
        window.addEventListener('resize', this.resize)
        this.resize()
    },
    methods:{
        resize: function(){
            this.width = window.innerWidth
            console.log(this.width)
        }
    }
}
</script>