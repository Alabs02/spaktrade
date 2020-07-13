<template>
  <div>
    <app-bar />
    <v-main>
      <v-container>
        <v-row justify="center">
          <h1 class="text-center display-1 pink--text text--darken-3 mt-5">Welcome {{ getUserName }}</h1>
          <v-col cols="12" md="12" sm="12">
            <v-card class="mx-auto text-center white" elevation="0">
              <v-container>
                <v-card-text
                  class="body-1"
                >You need to deposit $500 to proceeed and start trading on the spaktrade platform</v-card-text>
                <v-card-actions>
                  <v-row justify="center">
                    <!-- <form action="https://bitpay.com/checkout" method="post">
                      <input type="hidden" name="action" value="checkout" />
                      <input type="hidden" name="posData" value />
                      <input
                        type="hidden"
                        name="data"
                        value="7TjkyyGzmOARMXPoMPDYOr3jmrniunvNS9lq36O09adsqC7+RhMpI0PKIUKeghs8K8txPuwjXOKOsyW/abpiEwpj9qEytCHjmnIRJbeRkFFr6K6OWXBpu31Rp/hlRlCdo1sGwqKgn6RuyJnbprR012dmBM2GTdu0wqoiBYu3LR6eDGi6CP/fRESN6x/swF+gx5SUGUdP2+ckIi4aNX68Sd1dgNNhKeMLFOmGgRd6rwt4OuGvu4y2ayl4pay/uZRgDtX7CcvkrRR3Sg83rdzL2/fHDwhXTUFoClLMWlmw7VYfOIOQtFkgQrdoD0P/xYxGWAli8O/YKWRWk9JnNCpkGzEfI3+9iqsjXr5Thbrc4d6Mgd9PyaIkDUbIiAlcsXuD"
                      />
                      <v-btn
                        dark
                        large
                        @click.prevent="payment"
                        color="pink darken-3"
                        type="submit"
                        name="submit"
                        alt="BitPay, the easy way to pay with bitcoins."
                      >
                        <v-icon left>{{ payIcon }}</v-icon>Yes i am ready to deposit
                      </v-btn>
                    </form> -->

                    <!-- <form action="https://www.coinpayments.net/index.php" method="post"> -->
                      <!-- <input type="hidden" name="cmd" value="_pay_simple">
                      <input type="hidden" name="reset" value="1">
                      <input type="hidden" name="merchant" value="eb25b2d4cb01926ff020297f633d510b">
                      <input type="hidden" name="item_name" value="Trade">
                      <input type="hidden" name="item_desc" value="Deposit">
                      <input type="hidden" name="item_number" value="001">
                      <input type="hidden" name="invoice" value="Deposited Successfully">
                      <input type="hidden" name="currency" value="BTC">
                      <input type="hidden" name="amountf" value="0.05400000">
                      <input type="hidden" name="want_shipping" value="0">
                      <input type="hidden" name="success_url" value="sparktrade.netlify.app/dashboard">
                      <input type="hidden" name="cancel_url" value="sparktrade.netlify.app/welcome"> -->
                      <!-- <input @click="payment"  type="image" src="https://www.coinpayments.net/images/pub/buynow-wide-yellow.png" alt="Buy Now with CoinPayments.net"> -->
                      <!-- <v-btn
                        dark
                        large
                        @click.prevent="payment"
                        color="pink darken-3"
                        type="submit"
                        name="submit"
                        alt="Buy Now with CoinPayments.net"
                      >
                        <v-icon left>{{ payIcon }}</v-icon>Yes i am ready to deposit
                      </v-btn> -->
                    <!-- </form> -->
                  </v-row>
                </v-card-actions>
              </v-container>
              <form @submit.prevent="paymentWithPaystack" action="" id="paymentForm">
                  <v-row justify="center">
                      <v-col cols="12" md="5" sm="12">
                        <v-text-field
                            v-model="paymentForm.email"
                            outlined
                            color="purple darken-4"
                            label="Email"
                            type="email"
                            placeholder="customer@email.com"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="paymentForm.amount"
                            outlined
                            color="purple darken-4"
                            label="Amount"
                            type="tel"
                            placeholder="500"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="paymentForm.fname"
                            outlined
                            color="purple darken-4"
                            label="First Name"
                            type="text"
                            placeholder="John"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="paymentForm.lname"
                            outlined
                            color="purple darken-4"
                            label="Last Name"
                            type="text"
                            placeholder="Deo"
                            required
                        ></v-text-field>

                        <div class="text-center">
                            <v-btn color="indigo large darken-4" dark>
                                <v-icon left>{{ payIcon }}</v-icon>
                            <pay-stack
                                :amount="paymentForm.amount * 100"
                                :email="paymentForm.email"
                                :paystackkey="publicCode"
                                :reference="reference"
                                :callback="processPayment"
                                :close="close"
                            >
                                <span style="text-transform: capitalise !important;">Yes i am ready to deposit ${{ paymentForm.amount }}</span>
                            </pay-stack>
                            </v-btn>
                        </div>
                      </v-col>
                  </v-row>
                  
              </form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-sheet class="hidden-lg-only" height="220"></v-sheet>
    </v-main>
    <footer-app />
    <v-snackbar
       v-model="paySnackbar"
       :timeout="timeout"
       :top="y === 'top'"
       :color="color"
       dark
      >
        <span class="body-1">{{ text }}</span>
      </v-snackbar>
  </div>
</template>

<script>
import AppBar from "@/components/core/AppBar.vue";
import Footer from "@/components/core/Footer.vue";
import { mdiContactlessPaymentCircleOutline } from "@mdi/js";
import { mdiClose } from "@mdi/js";
// eslint-disable-next-line no-unused-vars
import Paystack from 'vue-paystack'
const fb = require("../../firebaseConfig")

export default {
  components: {
    "app-bar": AppBar,
    "footer-app": Footer,
    "pay-stack": Paystack // NEW LINE
  },
  data() {
    return {
      payIcon: mdiContactlessPaymentCircleOutline,

      // Js Code
      deposited: false,
      timeout: 4000,
      y: "top",
      paySnackbar: false,
      closeIcon: mdiClose,
      color: "",
      text: "",
      publicCode: "sk_test_bee59459435316f6cc334e772b237efecf7b444b",

      // Firebase || Paystack
        paymentForm: {
            email: null,
            amount: null,
            fname: "",
            lname: ""
        },
        status: false,


    };
  },

  computed: {
    getUserName() {
      return this.$store.state.userName;
    },
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  },

  methods: {
    paymentWithPaystack() {
        // window.open("https://bitpay.com/checkout", "_blank");
        this.deposited = true
        if (this.deposited === false) {
          this.color = "error"
          this.text = "Deposit not successful!"
          this.paySnackbar  = true
          // alert("Deposit Before you poceed!")
        } else {
          this.color = "green"
          this.text = "Deposit is successful!"
          this.paySnackbar  = true
          setTimeout(() => {
            this.$router.push('/goto')
          }, 5000);
        }
        
    },

    getPaymentDetails() {
        const userObj = fb.auth.currentUser
        fb.paymentCollection.doc(userObj.uid.toString()).set({
            amount: this.paymentForm.amount.AppBar,
            email: this.paymentForm.email,
            fname: this.paymentForm.fname,
            lname: this.paymentForm.lname,
            status: this.status
        }).then(() => {
            console.log("Payment details writen successfully")
        }).catch(error => {
            console.error("Error writing document: ", error);
        })
    },

    processPayment: () => {
        this.color = "green"
        this.text = "Deposited successfully!"
        this.paySnackbar  = true
        window.alert("Deposited successfully")
        this.status = true
        this.getPaymentDetails()
        setTimeout(() => {
            this.$router.push('/goto')
        }, 5000); 
    },

    close: () => {
        console.log("Deposit Page closed")
    }


  }
};
</script>