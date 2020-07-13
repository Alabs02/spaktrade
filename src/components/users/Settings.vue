<template>
    <div>
        <dash-bar />
        <v-main>
            <v-sheet>
                <v-divider></v-divider>
                <v-container>
                    <v-row justify="start">
                        <v-container>
                            <v-row justify="start" id="rowTop">
                                <div class="title font-weight-bold pink--text text--darken-4  ml-4">Name: {{ userName }}</div>
                                <span class="ml-4 body-1 mt-1 font-weight-bold pink--text text--darken-4">Phone: {{ userNumber }}</span>
                                <span class="ml-4 body-1 mt-1 font-weight-bold pink--text text--darken-4">ID: {{ userId }}</span>
                                <span class="ml-2 mt-0" id="chip"><v-chip dark color="purple lighten-2">Traders copy trade</v-chip></span>
                                <v-spacer></v-spacer>
                                <v-btn router to="/tool" class="mr-2" rounded dark color="pink darken-4" id="tradeBtn">Buy and Sell</v-btn>
                            </v-row>
                        </v-container>
                    </v-row>
                </v-container>
            </v-sheet>
            <v-divider></v-divider>
            <v-sheet>
                <v-row justify="center" no-gutters>
                    <v-col cols="12" md="12" sm="12">
                        <v-container>
                            <v-text-field
                            rounded
                            solo
                            label="Trade Dashboard"
                            disabled
                            color="purple"
                            ></v-text-field>
                        </v-container>
                    </v-col>
                </v-row>
            </v-sheet>
            <v-divider class="mt-n6"></v-divider>
            <v-sheet>
                <v-container>
                    <v-row justify="center">
                        <v-col cols="12" md="4" sm="12">
                            <v-card class="mx-auto" min-height="146" elevation="5">
                                <v-container>
                                    <v-row justify-sm="center" justify-md="center" no-gutters>
                                        <v-col cols="12" md="5" sm="12" class="col1">
                                            <v-avatar tile id="img" >
                                                <v-img
                                                 src="@/assets/fund.svg"
                                                ></v-img>
                                            </v-avatar>
                                        </v-col>

                                        <v-col cols="12" md="7" sm="12" class="col1">
                                            <p class="ml-8 headline font-weight-bold green--text amt">${{ amount }}.00</p>
                                            <p class="text-center body-2 mt-n3">Account Balance</p>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" no-gutters>
                                        <span class="display-1 purple--text text--darken-2 font-weight-bold">Funds</span>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4" sm="12">
                            <v-card class="mx-auto" min-height="146" elevation="5">
                                <v-container>
                                    <v-row no-gutters>
                                        <v-col cols="12" md="5" sm="12" class="col1">
                                            <v-avatar tile>
                                                <v-img
                                                 src="@/assets/money.svg"
                                                ></v-img>
                                            </v-avatar>
                                        </v-col>

                                        <v-col cols="12" md="7" sm="12" class="col1">
                                            <p class="ml-8 headline font-weight-bold green--text amt">$0.00</p>
                                            <p class="text-center body-2 mt-n3">Total Income</p>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" no-gutters>
                                        <span class="display-1 purple--text text--darken-2 font-weight-bold">Gains</span>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4" sm="12" class="col1">
                            <v-card class="mx-auto" min-height="146" elevation="5">
                                <v-container>
                                    <v-row no-gutters>
                                        <v-col cols="12" md="5" sm="12">
                                            <v-avatar tile>
                                                <v-img
                                                 src="@/assets/information.svg"
                                                ></v-img>
                                            </v-avatar>
                                        </v-col>

                                        <v-col cols="12" md="7" sm="12">
                                            <p class="title font-weight-bold green--text amt">Latest Bitcoin Dip</p>
                                            <p class="text-center body-2 mt-n3"></p>
                                        </v-col>
                                    </v-row>
                                    <v-card-text class="caption">
                                        <span class="tex-cemter">
                                            Bitcoin (BTC) has made a quick bounce from a dip to below $4,000 seen early on Friday
                                        </span>
                                    </v-card-text>
                                </v-container>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12">
                            <v-alert
                                :icon="lockIcon"
                                prominent
                                text
                                type="info"
                                >
                                    <span class="textSmall">Bitcoins, the security of transaction blockchains</span>
                                    
                                    <v-btn @click="soon" rounded outlined color="primary" class="ml-6">check it out</v-btn>
                            </v-alert>
                        </v-col>
                    </v-row>
                    <p class="text-center headline font-weight-medium grey--text text--darken-1">Download world class trading ebooks!</p>

                    <v-row>
                        <v-col cols="12" md="6" sm="12">
                           <v-card flat elevation="0" id="card">
                                <v-container>
                                    <v-row v-for="n in 5" :key="n" class="mt-2 mb-4" no-gutters justify="center">
                                        <v-avatar tile size="35">
                                            <v-img
                                                src="@/assets/doc.svg"
                                            ></v-img>
                                        </v-avatar>

                                        <span class="body-1 ml-3 mt-2 font-weight-medium">Ebook 1</span>
                                        <v-spacer></v-spacer>
                                        <span><v-btn @click="downloadOne" dark color="purple darken-4"><v-icon left>{{ downIcon}}</v-icon>download</v-btn></span>
                                    </v-row>
                                </v-container>
                           </v-card>
                        </v-col>

                        <v-col cols="12" md="6" sm="12">
                           <v-card flat elevation="0" id="card2">
                                <v-container>
                                    <v-row v-for="n in 5" :key="n" class="mt-2 mb-4" no-gutters justify="center">
                                        <v-avatar tile size="35">
                                            <v-img
                                                src="@/assets/doc.svg"
                                            ></v-img>
                                        </v-avatar>

                                        <span class="body-1 ml-3 mt-2 font-weight-medium">Document 1</span>
                                        <v-spacer></v-spacer>
                                        <span><v-btn dark  color="purple darken-4"><v-icon left>{{ downIcon}}</v-icon>download</v-btn></span>
                                    </v-row>
                                </v-container>
                           </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
            <v-sheet height="50"></v-sheet>
            <v-snackbar
                v-model="soonTuto"
                top
                light
                :timeout="timeout"
            >
                <span class="body-1 font-weight-medium purple--text text--darken-1">Coming soon!</span>
                
                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="pink darken-4"
                    text
                    v-bind="attrs"
                    @click="soonTuto = false"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </v-main>
        <footer-app />
    </div>
</template>


<script>
import DashBar from '@/components/core/DashBar.vue';
import FooterCard from '@/components/core/FooterCard.vue';
import { mdiAccountCircleOutline } from "@mdi/js";
import { mdiAccount } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { mdiShieldLockOutline } from "@mdi/js";
import { mdiDownloadCircleOutline } from "@mdi/js";
const fb = require('../../firebaseConfig')
const download = require('downloadjs')


export default {
    components: {
        'dash-bar': DashBar,
        'footer-app': FooterCard,
    },

    data() {
        return {
            // Icons
            acctIcon: mdiAccountCircleOutline,
            newAcctIcon: mdiAccount,
            magIcon: mdiMagnify,
            lockIcon: mdiShieldLockOutline,
            downIcon: mdiDownloadCircleOutline,

            //Js code
            test: [
                'Real Account'
            ],
            soonTuto: false,
            logOutState: false,

            // Firebase
            checkbox: null,
            userName: null,
            userEmail: null,
            userNumber: null,
            userId: null,
            amount: 550,
            timeout: 4000,
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
            this.$store.commit('USERNAME', this.userName)
            this.userEmail = obj.email
            this.userId = obj.uid
            const dataObj = fb.usersCollection.doc(obj.uid.toString())
            dataObj.get().then(doc => {
                if(doc.exists) {
                    console.log(doc.data())
                    const userData = doc.data()
                    this.userNumber = userData.number
                    this.$store.dispatch('getUserNumb', this.userNumber)
                } else {
                    console.log('No such data')
                }
            })
        },
        downloadOne() {
            download('../../assets/docs/Trade Ebook.pdf')
        },
        soon() {
            this.soonTuto = true;
        },
        save() {
            alert("Details successfully saved!");
        },
        reset() {
            alert("Details successfully erased!");
        },
        
    },

    
}
</script>

<style scoped>
    #money {
        text-decoration-line: line-through !important;
    }
    #card {
        border: 1px solid #1A237E;
        background-color: transparent;
        border-radius: 0rem 0rem 0rem 2.5rem;
    }
    #card2 {
        border: 1px solid #1A237E;
        background-color: transparent;
        border-radius: 0rem 0rem 2.5rem 0rem;
    }
    @media screen and (max-width: 1024px) {
        #tradeBtn {
            margin: auto 30% !important;
            margin-top: 10px !important;
            /* transform: translateX(3rem) !important; */
        }
        #chip {
            margin: auto 30% !important;
            margin-top: 2px !important;
        } 
        #img {
            text-align:center !important;
            /* margin: auto 20% !important; */
        }
        .col1 {
            text-align: center !important;
        }
        .amt {
            margin-left: 0px !important;
            font-size: 1.3rem !important;
        }
        .textSmall {
            font-size: .8rem !important;
        }
    }
</style>