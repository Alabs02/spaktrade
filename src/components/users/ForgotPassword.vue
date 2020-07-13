<template>
    <div>
        <app-bar />
        <v-main>
            <v-row justify="center">
                <v-col cols="12" md="5" sm="12">
                    <v-card>
                        <h6 class="text-center mt-2 mx-4 body-1 font-weight-medium">Reset Password</h6>
                        <v-container>
                            <form action="">
                                <v-row>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-text-field
                                            v-model="emailAddress"
                                            label="email address"
                                            outlined
                                            color="indigo darken-4"
                                            @keyup.enter="reset"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-card-actions>
                                    <v-row justify="center">
                                        <v-btn @click.prevent="reset" color="pink darken-3" large dark  class="">Send</v-btn>
                                    </v-row>
                                </v-card-actions>
                            </form>
                        </v-container>
                    </v-card>
                </v-col>
                <v-overlay :value="performingRequest">
                    <v-progress-circular color="indigo lighten-4" indeterminate size="65"></v-progress-circular>
                </v-overlay>
            </v-row>
        </v-main>
        <footer-app />
        <v-snackbar
            v-model="forgotPassState"
            top
            light
            :timeout="timeout"
        >
            <v-card-text  :class="color">{{ desc }}</v-card-text>
            
            <template v-slot:action="{ attrs }">
                <v-btn
                color="pink darken-4"
                text
                v-bind="attrs"
                @click="forgotPassState = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>


<script>
import AppBar from '@/components/core/AppBar.vue';
import Footer from '@/components/core/Footer.vue';
const fb = require('../../firebaseConfig')

export default {
    components: {
        'app-bar': AppBar,
        'footer-app': Footer,
    },
    data() {
        return {
            emailAddress: "",
            performingRequest: false,
            forgotPassState: false,
            timeout: 4000,
            desc: "",
            color: "purple--text text--darken-2 body-1 font-weight-medium",

        }
    },

    methods: {
        reset() {
            this.performingRequest = true
            fb.auth.sendPasswordResetEmail(this.emailAddress)
                .then(() => {
                    console.log('Email sent successfully');
                    this.performingRequest = false
                    this.desc = "Email sent successfully"
                    this.forgotPassState = true
                }).catch(error => {
                    console.log('An error occured, please try again...')
                    console.error(error)
                    this.performingRequest = false
                    this.desc = "An error occured please check your internet connection..."
                    this.color  = "error--text text--darken-2 body-1 font-weight-medium"
                    this.forgotPassState = true

                })
        }
    }
}
</script>