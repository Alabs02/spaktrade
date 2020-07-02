<template>
    <div>
        <app-bar />
        <v-main>
            <v-container>
                <v-sheet>
                    <v-card>
                        <v-container>
                            <h6 class="display-1">Currency Converter</h6>
                            <form action="">
                                <v-row justify="center">
                                    <v-col cols="12" md="3" sm="12">
                                        <v-select
                                         :items="currencies"
                                         v-model="currency"
                                         label="Currency"
                                         outlined
                                         shaped
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" md="9" sm="12">
                                        <v-text-field
                                         v-model.number="amount"
                                         label="Enter Amount"
                                         type="number"
                                         outlined
                                         shaped
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <h6 class="headline">Convert From: </h6>
                                <v-row>
                                    <v-col cols="12" md="12" sm="12">
                                        <!-- <select v-model = "convertfrom" style = "width:300px;font-size:25px;">
                                            <option v-for = "(a, index) in currencyfrom" :key="index"  :value = "a.name">{{a.desc}}</option>
                                        </select> -->
                                        <v-select
                                         v-model="convertfrom"
                                         :items="currencies"
                                         outlined
                                         shaped
                                        ></v-select>
                                    </v-col>
                                </v-row>
                                <h6 class="headline">Convert To: </h6>
                                <v-row>
                                    <v-col cols="12" md="12" sm="12">
                                        <!-- <select v-model = "convertto" style = "width:300px;font-size:25px;">
                                            <option v-for = "(a, index) in currencyfrom" :key="index" :value = "a.name">{{a.desc}}</option>
                                        </select><br/><br/> -->
                                        <v-select
                                         v-model="convertto"
                                         :items="currencies"
                                         outlined
                                         shaped
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </form>
                        </v-container>
                    </v-card>

                    <v-card flat class="text-center mt-5">
                        <v-container>
                            <v-card-text class="body-1 font-weight-medium green--text text--darken-2">
                                <p class="purple--text">Results: </p>
                                <v-card-text class="body-1"> <v-chip dark class="ma-2" color="green">{{convertfrom}}</v-chip> <span style="font-size: 1.3rem !important;">{{ amount}}</span>  equals <span class="font-weight-bold" style="font-size: 1.3rem !important;">{{finalamount}}</span> <v-chip dark class="ma-2" color="red">{{convertto}}</v-chip></v-card-text>
                            </v-card-text>
                        </v-container>
                    </v-card>
                </v-sheet>
            </v-container>
        </v-main>
        <footer-app />
    </div>
</template>


<script>
import AppBar from '@/components/core/AppBarUser.vue';
import Footer from '@/components/core/Footer.vue';
// import { Cashify } from 'cashify';
// import currency from 'currencyjs';

// const rates = {
//     GBP: 0.92,
//     EUR: 1.00,
//     USD: 1.12
// }

export default {
    components: {
        'app-bar': AppBar,
        'footer-app': Footer,    
    },
    data() {
        return {
            // Firebase code
            amount: null,

            // Js code
            currencies: ['USD', 'EUR', 'INR', 'BHD'],
            convertfrom: "INR",
            convertto:"USD",
            trade: [
                {
                    id: 1,
                    cur: 'USD',
                    amount: 10000
                },
                {
                    id: 1,
                    cur: 'USD',
                    amount: 10000
                },
                {
                    id: 1,
                    cur: 'USD',
                    amount: 10000
                },
                {
                    id: 1,
                    cur: 'USD',
                    amount: 10000
                },
            ],
            // rates: {
            //     GBP: 0.92,
            //     EUR: 1.00,
            //     USD: 1.12
            // }

        }
    },

    methods: {
        transact() {
            let data = JSON.stringify(this.trade)
            console.log(data);
        }
    },

    computed :{
        // convert() {
        //     const cashify = new Cashify({ base: 'EUR', rates });
        //     const converted = cashify.convert(this.amount, { from: this.convertfrom, to: this.convertto });
        //     // currency(converted, { symbol: '€', formatWithSymbol: true }).format();
        //     return converted;
        // },
        finalamount:function() {
        var to = this.convertto;
        var from = this.convertfrom;
        var final;
        switch(from) {
            case "INR":
            if (to == "USD") {
                final = this.amount * 0.016;
            }
            if (to == "EUR") {
                final = this.amount * 0.013;
            }
            if (to == "INR") {
                final = this.amount;
            }
            if (to == "BHD") {
                final = this.amount * 0.0059;
            }
            break;
            case "USD":
            if (to == "INR") {
                final = this.amount * 63.88;
            }
            if (to == "EUR") {
                final = this.amount * 0.84;
            }
            if (to == "USD") {
                final = this.amount;
            }
            if (to == "BHD") {
                final = this.amount * 0.38;
            }
            break;
            case "EUR":
            if (to == "INR") {
                final = this.amount * 76.22;
            }
            if (to == "USD") {
                final = this.amount * 1.19;
            }
            if (to == "EUR") {
                final = this.amount;
            }
            if (to == "BHD") {
                final = this.amount * 0.45;
            }
            break;
            case "BHD":
            if (to == "INR") {
                final = this.amount *169.44;
            }
            if (to == "USD") {
                final = this.amount * 2.65;
            }
            if (to == "EUR") {
                final = this.amount * 2.22;
            }
            if (to == "BHD") {
                final = this.amount;
            }
            break
        }
        return final;
        }
    },
}
</script>