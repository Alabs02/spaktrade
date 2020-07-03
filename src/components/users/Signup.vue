<template>
    <div>
        <app-bar />
        <v-main>
            <v-container>
                <v-row justify="center">
                    <v-card class="mx-auto" elevation="0" min-width="400">
                        <v-row>
                            <v-col cols="12" md="5" sm="12" class="hidden-md-and-down">
                                <v-img
                                    src="@/assets/signin.svg"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" md="7" sm="12">
                                <v-container>
                                    <h5 class="text-center display-1 indigo-text text--darken-4 font-weight-bold">Signup</h5>
                                    <form action="">
                                        <v-row justify="center">
                                            <v-col cols="12" md="12">
                                                <v-text-field 
                                                v-model.trim="signupForm.name"
                                                color="indigo"
                                                label="Name"
                                                outlined
                                                type="text"
                                                >
                                                </v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field 
                                                v-model.trim="signupForm.number"
                                                color="indigo"
                                                label="Phone Number"
                                                type="text"
                                                outlined
                                                >
                                                </v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field 
                                                v-model.trim="signupForm.email"
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
                                                v-model.trim="signupForm.password"
                                                color="indigo"
                                                label="Password"
                                                type="password"
                                                @keyup.enter="signup"
                                                outlined
                                                value="12345678"
                                                >
                                                </v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-card-actions class="text-center">
                                            <v-row justify="center">
                                                <v-container>
                                                    <v-btn @click="signup" rounded dark  block color="indigo">sign up</v-btn>
                                                </v-container>
                                            </v-row>
                                        </v-card-actions>
                                    </form>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-row>
            </v-container>
            <v-overlay :value="performingRequest">
                <v-progress-circular color="indigo lighten-4" indeterminate size="65"></v-progress-circular>
            </v-overlay>
        </v-main>
        <footer-app />
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue'
import Footer from '@/components/core/Footer.vue'
const fb = require('../../firebaseConfig')

export default {
    components: {
        'app-bar': AppBar,
        'footer-app': Footer,
    },
    data() {
        return {
            dialog: false,
            signupForm: {
                name: "",
                number: "",
                email: "",
                password: ""
            },
            users: [],
            newUser: "",
            performingRequest: false,
            userSignupEmail: null,

        }
    },

    methods: {
        verifyEmail() {
            const user  = fb.auth.currentUser;
            user.sendEmailVerification().then(() => {
                alert('Verification email sent successfully...')
            }).catch(error => {
                if(error) {
                    alert('Error occured, please try again...')
                    throw error
                }
            });
        },

        signup: function() {
            this.performingRequest = true
            fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password)
                .then(user => {
                    this.$store.commit('SETCURRENTUSER', user)
                    console.log(user)

                    // create user object

                    const newUser = fb.auth.currentUser
                    newUser.updateProfile({
                        displayName: this.signupForm.name,
                    }).then(() => {
                        alert('Users profile updated successfully')
                        alert(`${user.user.email}, ${user.user.emailVerified}, ${user.user.displayName},  ${user.user.uid}`)
                        this.verifyEmail()
                        this.performingRequest = false
                        this.$router.push('/account-details')

                        fb.usersCollection.doc(user.user.uid.toString()).set({
                            number: this.signupForm.number,
                            timestamp: new Date(),
                        }).then(() => {
                            alert('Document successfully written!')
                            const userDocRef = fb.usersCollection.doc(user.user.uid.toString())

                            userDocRef.get().then(doc => {
                                if (doc.exists) {
                                    console.log('Document data', doc.data())
                                    this.performingRequest = false
                                } else {
                                    console.log('No such document!')
                                    this.performingRequest = false
                                }
                            })
                            this.performingRequest = false
                        }).catch(error => {
                            console.error("Error writing document: ", error)
                            this.performingRequest = false
                        })
                    }).catch(error => {
                        alert('An error occured, please try...')
                        this.performingRequest = false
                        throw error
                    })
                }).catch(error => {
                    let errCode = error.code;
                    let errMsg = error.message;
                    if (errCode == 'auth/weak-password') {
                        alert('Password is too weak...')
                        console.error(errCode)
                    } else {
                        alert('An error happened, check your internet connection...')
                        this.performingRequest = false
                        console.error(errMsg)
                    }
                })      
        },
    }
}
</script>