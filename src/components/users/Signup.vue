<template>
    <div>
        <app-bar />
        <v-main>
            <v-container>
                <v-row justify="center">
                    <v-card class="mx-auto" min-width="400">
                        <v-container>
                            <form action="">
                                <v-row justify="center">
                                    <v-col cols="12" md="12">
                                        <v-text-field 
                                        v-model="user.fname"
                                        color="indigo"
                                        label="First Name"
                                        outlined
                                        disabled
                                        type="text"
                                        >
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12">
                                        <v-text-field 
                                        v-model="user.lname"
                                        color="indigo"
                                        label="Last Name"
                                        type="text"
                                        outlined
                                        disabled
                                        >
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12">
                                        <v-text-field 
                                        v-model="user.email"
                                        color="indigo"
                                        label="E-mail"
                                        type="email"
                                        value="johnbon@me.com"
                                        outlined
                                        >
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12">
                                        <v-text-field 
                                        v-model="user.password"
                                        color="indigo"
                                        label="Password"
                                        type="password"
                                        @keyup.enter="register"
                                        outlined
                                        value="12345678"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <v-card-actions>
                                    <v-btn @click="register" dark rounded color="indigo">Register</v-btn>
                                </v-card-actions>
                            </form>
                        </v-container>
                    </v-card>
                </v-row>
            </v-container>
        </v-main>
        <footer-app />
    </div>
</template>

<script>
import firebase from 'firebase';
import AppBar from '@/components/core/AppBar.vue'
import Footer from '@/components/core/Footer.vue'

export default {
    components: {
        'app-bar': AppBar,
        'footer-app': Footer,
    },
    data() {
        return {
            dialog: false,
            user: {
                fname: "",
                lname: "",
                email: "",
                password: ""
            }
        }
    },

    methods: {
        register() {
            firebase.auth().createUserWithEmailAndPassword(
                this.user.email,
                this.user.password
            )
            // eslint-disable-next-line no-unused-vars
                .then(cred => {
                    this.$router.replace('account-details');
                    console.log(cred);
                })
                .catch(function(err) {
                    let errCode = err.code;
                    let errMsg = err.message;
                    if(errCode == 'auth/weak-password') {
                        alert("Password should be atleast 8 characters!");
                    } else {
                        alert(errMsg);
                    }
                    console.error(err);
                });
        }
    }
}
</script>