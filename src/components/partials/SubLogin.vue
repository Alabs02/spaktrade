<template>
    <div>
        <app-bar />

        <v-main>
            <v-sheet class="mt-5">
                <v-card flat class="text-center">
                    <h6 class="display-1 font-weight-medium">Your {{ }} Account</h6>
                    <form action="">
                        <v-container>
                            <v-row justify="center">
                                <v-col cols="12" md="6" sm="12">
                                    <v-card elevation="8" height="130" color="purple lighten-5">
                                        <v-container>
                                            <h5 class="headline font-weight-bold mt-4">Profit Sharing<span>*</span></h5>
                                            <!-- <p class="body-1 font-weight-medium mt-4">Recommend for beginners</p> -->
                                        </v-container>
                                    </v-card>
                                </v-col>

                                <v-col cols="12" md="6" sm="12">
                                    <v-card height="130" elevation="8">
                                        <v-container>
                                            <h5 class="headline font-weight-bold mt-4">Classic</h5>
                                            <!-- <p class="body-1 font-weight-medium mt-4">Recommend for Advanced Users</p> -->
                                        </v-container>
                                    </v-card>
                                </v-col>
                            </v-row>


                            <v-row justify="center">
                                <v-col cols="12" md="6" sm="6">
                                    <p class="text-left">Base Currency</p>
                                    <v-select
                                    v-model="currency"
                                    :items="currencies"
                                    outlined
                                    label="currency"
                                    value="USD"
                                    disabled
                                    ></v-select>
                                </v-col>

                                <v-col cols="12" md="6" sm="6">
                                    <p class="text-left">Balance</p>
                                    <v-text-field
                                    outlined
                                    label="Amount"
                                    value="0"
                                    type="number"
                                    disabled
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>

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

        }
    },

    computed: {

    },

    methods: {
        verified() {
            this.isVerified = fb.auth.currentUser.emailVerified
            if (this.isVerified === true) 
                this.$router.push('/welcome')
                
            else {
                alert('Verify your email before you proceed!')
            }
        }
    }
}
</script>


<style scoped>

</style>