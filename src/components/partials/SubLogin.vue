<template>
    <div>
        <app-bar />
        <v-main>
            <v-sheet class="mt-5">
                <v-card flat class="text-center mt-2">
                    <h6 class="display-1 purple--text text--darken-4 font-weight-medium">Verify your email</h6>
                    <form action="">
                        <v-container>
                            <v-container>
                                <v-img
                                    src="@/assets/auth.svg"
                                    lazy-src="@/assets/auth.svg"
                                    contain 
                                    max-width="90%"
                                    min-width="70"
                                    max-height="250"
                                    min-height="180"
                                ></v-img>
                            </v-container>
                            <p class="blockquote">We just sent a verification link to your email, you need to verify before you proceed.</p>
                            <p class="text-center body-1 green--text text-darken-2">Page will refresh in <span class="font-weight-bold">20</span> seconds...</p>

                            <v-container class="mb-12">
                                <!-- <form action="https://bitpay.com/checkout" method="post" >
                                <input type="hidden" name="action" value="checkout" />
                                <input type="hidden" name="posData" value="" />
                                <input type="hidden" name="data" value="7TjkyyGzmOARMXPoMPDYOr3jmrniunvNS9lq36O09adsqC7+RhMpI0PKIUKeghs8K8txPuwjXOKOsyW/abpiEwpj9qEytCHjmnIRJbeRkFFr6K6OWXBpu31Rp/hlRlCdo1sGwqKgn6RuyJnbprR012dmBM2GTdu0wqoiBYu3LR6eDGi6CP/fRESN6x/swF+gx5SUGUdP2+ckIi4aNX68Sd1dgNNhKeMLFOmGgRd6rwt4OuGvu4y2ayl4pay/uZRgDtX7CcvkrRR3Sg83rdzL2/fHDwhXTUFoClLMWlmw7VYfOIOQtFkgQrdoD0P/xYxGWAli8O/YKWRWk9JnNCpkGzEfI3+9iqsjXr5Thbrc4d6Mgd9PyaIkDUbIiAlcsXuD" />
                                <v-btn type="submit" name="submit" alt="BitPay, the easy way to pay with bitcoins." ><
                                </form> -->
                                <v-btn @click="verified" dark rounded color="indigo">proceed</v-btn>
                            </v-container>

                        </v-container>
                    </form>
                </v-card>
            </v-sheet>
        </v-main>
        <v-snackbar
            v-model="verAuth"
            top
            color="error"
        >
            <span class="body-1">Verify your email before you proceed!</span>
        </v-snackbar>
    </div>
</template>


<script>
import AppBar from "@/components/core/AppBar.vue";
const fb = require('../../firebaseConfig')

export default {
    components: {
        'app-bar': AppBar,
    },

    data() {
        return {
            // Js code
            currencies: ['EUR', 'USD', 'GBP', 'JPY', 'AUD', 'CHF', 'BGN'],
            leveis: ["1:1", "2:1", "20:1", "25:1", "30:1", "33:1", "50:1", "66:1", "75:1", "100:1"],


            //Firebase
            currency: "",
            amount: "",
            leverage: "",
            isVerified: false,
            verAuth: false,

        }
    },

    created() {
    },

    computed: {

    },

    methods: {
        timedRefresh(timeOutPeriod) {
            setTimeout("location.reload(true);", timeOutPeriod)
        },
        verified() {
            window.onload = this.timedRefresh(40000)
             this.isVerified = fb.auth.currentUser.emailVerified
            if (this.isVerified === true) 
                this.$router.push('/welcome')
                
            else {
                this.verAuth = true
                // alert('Verify your email before you proceed!')
            }
        }
    }
}
</script>

<style scoped>

</style>