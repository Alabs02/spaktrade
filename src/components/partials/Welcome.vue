<template>
    <div>
        <app-bar />
        <v-main>
            <v-container>
                <v-row justify="center">
                    <h1 class="text-center display-1 pink--text text--darken-3 mt-5">Thank you using SpakTrade</h1>
                    <v-col cols="12" md="12" sm="12">
                        <v-card class="mx-auto text-center indigo lighten-5">

                            <v-card-title class="title">Deposit</v-card-title>
                            <v-container>
                                <v-card-text class="body-1">
                                    Deposit $500 and get free $50 extra for tradding and also have access to world class trading Tutorials
                                </v-card-text>
                                <v-card-actions>
                                    <v-row justify="center">
                                        <form action="https://bitpay.com/checkout" method="post" >
                                            <input type="hidden" name="action" value="checkout" />
                                            <input type="hidden" name="posData" value="" />
                                            <input type="hidden" name="data" value="7TjkyyGzmOARMXPoMPDYOr3jmrniunvNS9lq36O09adsqC7+RhMpI0PKIUKeghs8K8txPuwjXOKOsyW/abpiEwpj9qEytCHjmnIRJbeRkFFr6K6OWXBpu31Rp/hlRlCdo1sGwqKgn6RuyJnbprR012dmBM2GTdu0wqoiBYu3LR6eDGi6CP/fRESN6x/swF+gx5SUGUdP2+ckIi4aNX68Sd1dgNNhKeMLFOmGgRd6rwt4OuGvu4y2ayl4pay/uZRgDtX7CcvkrRR3Sg83rdzL2/fHDwhXTUFoClLMWlmw7VYfOIOQtFkgQrdoD0P/xYxGWAli8O/YKWRWk9JnNCpkGzEfI3+9iqsjXr5Thbrc4d6Mgd9PyaIkDUbIiAlcsXuD" />
                                            <v-btn dark large @click.prevent="payment" color="pink darken-3" type="submit" name="submit" alt="BitPay, the easy way to pay with bitcoins."><v-icon left>{{ payIcon }}</v-icon>Deposit</v-btn>
                                        </form>
                                    </v-row>
                                </v-card-actions>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>    
            </v-container>
            
        </v-main>
        <footer-app />
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue'
import Footer from '@/components/core/Footer.vue'
import { mdiContactlessPaymentCircleOutline } from "@mdi/js";

export default {
    components: {
        'app-bar': AppBar,
        'footer-app': Footer
    },
    data() {
        return {
            payIcon: mdiContactlessPaymentCircleOutline,
        }
    },

    methods: {
        payment() {
            window.open("https://bitpay.com/checkout", "_blank");
        },
    }
}
</script>