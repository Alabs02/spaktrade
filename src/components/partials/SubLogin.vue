<template>
    <div>
        <app-bar />

        <v-main>
            <v-sheet class="mt-5">
                <v-card flat class="text-center">
                    <h6 class="display-1 font-weight-medium">Your {{ }} Account</h6>
                    <form action="">
                        <v-container>
                            <p class="text-center body-2 font-weight-medium">1. Choose Account Type</p>
                            <v-row justify="center">
                                <v-col cols="12" md="6" sm="12">
                                    <v-card elevation="8" color="purple lighten-5">
                                        <v-container>
                                            <h5 class="headline font-weight-bold mt-2">Profit Sharing<span>*</span></h5>
                                            <p class="body-1 font-weight-medium mt-4">Recommend for beginners</p>
                                        </v-container>
                                    </v-card>
                                </v-col>

                                <v-col cols="12" md="6" sm="12">
                                    <v-card elevation="8">
                                        <v-container>
                                            <h5 class="headline font-weight-bold mt-2">Classic</h5>
                                            <p class="body-1 font-weight-medium mt-4">Recommend for Advanced Users</p>
                                        </v-container>
                                    </v-card>
                                </v-col>
                            </v-row>

                            <p class="text-center body-2 font-weight-medium">2. Specify Account Details</p>

                            <v-row justify="center">
                                <v-col cols="12" md="6" sm="6">
                                    <p class="text-left">Base Currency</p>
                                    <v-select
                                    v-model="currency"
                                    :items="currencies"
                                    outlined
                                    label="Currency"
                                    ></v-select>
                                </v-col>

                                <v-col cols="12" md="6" sm="6">
                                    <p class="text-left">Balance</p>
                                    <v-text-field
                                    outlined
                                    label="Amount"
                                    type="number"
                                    >
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" md="12">
                                    <v-select
                                    :items="leveis"
                                    outlined
                                    label="Leverage"
                                    ></v-select>
                                </v-col>
                            </v-row>

                            <v-container class="mb-12">
                                <v-btn dark rounded color="indigo">create demo account</v-btn>
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

        }
    }
}
</script>


<style scoped>

</style>