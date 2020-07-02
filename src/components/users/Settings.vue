<template>
    <div>
        <app-bar-user />

        <v-main>
            <v-sheet>
                <v-divider></v-divider>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4" sm="12">
                            <v-row>
                                <v-avatar size="80" color="indigo darken-2">
                                    <v-icon dark>{{ acctIcon }}</v-icon>
                                </v-avatar>
                                <span class="body-2 font-weight-medium">{{ userName }}</span><br>
                                <p class="body-2">Phone Number: {{ userNumber }}</p>
                                <p class="body-2 font-weight-bold">ID: {{ userId }}</p>
                                <v-container>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-container>
                                                <v-row justify="left">
                                                    <v-col cols="12" md="5">
                                                        <v-select
                                                            v-on="on"
                                                            :items="test"
                                                            label="user"
                                                            outlined
                                                            shaped
                                                            dense
                                                            style="font-size: 1rem !important; transform: translateY(-1rem) !important;"
                                                        ></v-select>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                            
                                        </template>
                                        <span>{{ userEmail }} Account</span>
                                    </v-tooltip>
                                </v-container>
                            </v-row>
                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="12" md="7" sm="12">
                            <v-row>
                                <v-col cols="12" md="6" sm="12">
                                    <h6 class="text-left ml-5 title mt-8">Funds: <span>$</span>{{ 550 }}</h6>
                                </v-col>

                                <v-col cols="12" md="6" sm="12">
                                    <v-btn router to="/tool" rounded dark class="ml-4 mt-8 text-right indigo darken-3" style="float: right !important;">Trade</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
            <v-divider></v-divider>
            <v-sheet>
                <v-container>
                    <v-tabs>
                        <v-tab href="#tab1">Account</v-tab>
                        <v-tab href="#tab2">History</v-tab>
                    </v-tabs>
                </v-container>
            </v-sheet>
            <v-divider></v-divider>
            <v-sheet>
                <v-container>
                    <v-card elevation="12">
                        <v-container>
                            <v-row>
                                <v-icon class="mt-1 ml-2 grey--text text--darken-3" size="30">{{ newAcctIcon }}</v-icon>
                                <h6 class="ml-2 body-2 mt-3 font-weight-medium grey--text text--darken-4">Personal Details</h6>
                            </v-row>
                        </v-container>
                            
                        <v-card-text>
                            <v-container>
                                This is the email address associated with your SpakTrade account. If you would like to change it, please send your request from this 
                                email address to support@spaktrade.com, indicating the new email address.
                            </v-container>

                            <v-container>
                                <v-text-field
                                 outlined
                                 dense
                                 :value="userEmail"
                                 disabled
                                ></v-text-field>
                            </v-container>
                            <v-container>
                                <!-- <h6 class="ml-2 body-2 mt-3 font-weight-medium grey--text text--darken-4">Full Name</h6>
                                <v-card-text>
                                    This must be your real full name (first name, middle name and last name).
                                    <v-row>
                                        <v-col cols="12" md="2" sm="12">
                                            <v-select
                                                :items="titles"
                                                label="title"
                                                outlined
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="12">
                                            <v-text-field
                                             value="John"
                                             outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="12">
                                            <v-text-field
                                             value="Bon"
                                             outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="12">
                                            <v-text-field
                                             value="Spectar"
                                             outlined
                                            ></v-text-field>
                                        </v-col>
                                        
                                    </v-row>
                                </v-card-text>

                                <v-row>
                                    <v-col cols="12" md="6" sm="12">
                                        <h6 class="ml-2 body-2 mt-3 font-weight-medium grey--text text--darken-4">Country of Residence</h6>
                                        <v-card-text>
                                            <span>Choose your country of residence.</span>
                                            <v-select
                                                :items="countries"
                                                outlined
                                                label="country"
                                            ></v-select>

                                        </v-card-text>
                                    </v-col>

                                    <v-col cols="12" md="6" sm="12" class="mt-n2">
                                        <h6 class="ml-2 body-2 mt-3 font-weight-medium grey--text text--darken-4">Phone Number</h6>
                                        <v-card-text>
                                            <span>Enter your phone number without any leading zeros or prefixes.</span>
                                            <v-row>
                                                <v-col cols="12" md="3" sm="12">
                                                    <v-select
                                                        :items="countries"
                                                        outlined
                                                        label="country"
                                                    ></v-select>
                                                </v-col>

                                                <v-col cols="12" md="6" sm="12">
                                                    <v-text-field
                                                    outlined
                                                    type="number"
                                                    label="Phone Number"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-col>
                                </v-row> -->
                                <h6 class="ml-2 body-2 mt-3 font-weight-medium grey--text text--darken-4">Receive Newsletters</h6>
                                <v-card-text class="caption">
                                    Allow SpakTrade to send you newsletters and other notifications. 
                                    Your email will not be used for any kind of third party advertisements.
                                </v-card-text>

                                <v-checkbox
                                    v-model="checkbox"
                                    :error-messages="checkboxErrors"
                                    label="Yes, I would like to receive newsletters"
                                    required
                                    checked
                                    @change="$v.checkbox.$touch()"
                                    @blur="$v.checkbox.$touch()"
                                ></v-checkbox>
                            </v-container>
                            <v-container>
                                <v- ref="card" class="mx-auto text-center">
                                    <h6 class="body-1 font-weight-bold">Deposit $500 in to your e-wallet to start trading and get $50 bonus from SpakTrade</h6>
                                    <v-card-text>
                                        <v-container>
                                            <v-btn dark large rounded color="pink darken-3">Desposit</v-btn>
                                        </v-container>
                                        <!-- <form action="https://bitpay.com/checkout">
                                            <v-text-field
                                            dense
                                            shaped
                                            outlined
                                            label="Deposit"
                                            value="checkout"
                                            type="hidden"
                                            name="action"
                                            ></v-text-field>

                                            <v-text-field
                                            dense
                                            shaped
                                            outlined
                                            type="hidden"
                                            name="posData"
                                            ></v-text-field>

                                            <v-text-field
                                            dense
                                            shaped
                                            outlined
                                            type="hidden"
                                            name="data"
                                            value="[encrypted_button_data]"
                                            ></v-text-field>
                                            <v-card-actions>
                                                <v-btn type="submit" name="submit">Deposit</v-btn>
                                            </v-card-actions>
                                        </form> -->
                                    </v-card-text>
                                </v->
                            </v-container>
                        </v-card-text>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-actions>
                            <v-btn @click="save" dark rounded color="indigo darken-3">save settings</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn @click="reset" text class="grey--text">Reset Changes</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-sheet>
        </v-main>
        <footer-app />
    </div>
</template>


<script>
//const BitPay  = require('bitpay-node')
import AppBarUser from '@/components/core/AppBarUser.vue';
import Footer from '@/components/core/Footer.vue';
import { mdiAccountCircleOutline } from "@mdi/js";
import { mdiAccount } from "@mdi/js";
// eslint-disable-next-line no-unused-vars
import Stripe from 'stripe';
const fb = require('../../firebaseConfig')

// let stripe = Stripe('pk_test_51GyzvrC1J6TO6Ly8xRkTx8XxsCakFhpoFvM3JUGgYaKloAQT8U38f0VIj14446Sku4YCgTOToCXdY1PRccnTYk0q00fwfwUW0d'),
//     elements = stripe.elements(),
//     card = undefined;

// let style = {
//   base: {
//     border: '1px solid #D8D8D8',
//     borderRadius: '4px',
//     color: "#000",
//   },

//   invalid: {
//     // All of the error styles go inside of here.
//   }

// };

export default {
    components: {
        'app-bar-user': AppBarUser,
        'footer-app': Footer,
    },
    mounted: function() {
        // card = elements.create('card');
        // card.mount(this.$refs.card);
    },

    data() {
        return {
            // Icons
            acctIcon: mdiAccountCircleOutline,
            newAcctIcon: mdiAccount,

            //Js code
            test: [
                'Real Account'
            ],
            titles: ['Mr.', 'Mrs.'],
            countries: ['Nigeria', 'South Africa'],

            // Firebase
            checkbox: null,
            invoice: null,
            userName: null,
            userEmail: null,
            userNumber: null,
            userId: null,
        }
    },

    computed() {
        // eslint-disable-next-line no-unused-labels
        // userEmail: () => {
        //     return this.$store.state.currentUserEmail;
        // }
    },
    created() {
        this.otherUserDetails()
    },

    methods: {
        otherUserDetails() {
            const obj = fb.auth.currentUser
            this.userName = obj.displayName
            this.userEmail = obj.email
            this.userId = obj.uid
            const dataObj = fb.usersCollection.doc(obj.uid.toString())
            dataObj.get().then(doc => {
                if(doc.exists) {
                    console.log(doc.data())
                    const userData = doc.data()
                    this.userNumber = userData.number
                } else {
                    console.log('No such data')
                }
            })
        },
        save() {
            alert("Details successfully saved!");
        },
        reset() {
            alert("Details successfully erased!");
        },
        // pay() {
        //     const client  = new BitPay.Client({ apiKey: ''  });
        //     client.createInvoice({ price: 0.001, currency: 'BTC' }, function(err, invoice) {
        //         if (err) {
        //             console.error(err)
        //         } else {
        //             console.log(invoice)
        //             this.invoice = invoice
        //         }
        //     });
        //     client.getInvoice(this.invoice.id, (err, invoice) => {
        //         if (err) {
        //             console.error(err)
        //         } else {
        //             console.log(invoice)
        //         }
        //     })
        // }


        // purchase: function () {
        //     let self = this;

        //     stripe.createToken(card).then(function(result) {
        //         if (result.error) {
        //         self.hasCardErrors = true;
        //         self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
        //         return;
        //         }

        //     });
        // },
    },

    
}
</script>

<style scoped>
    #money {
        text-decoration-line: line-through !important;
    }
</style>