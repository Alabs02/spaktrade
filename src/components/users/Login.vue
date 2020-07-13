<template>
   <div>
       <app-bar />

        <v-main class="text-center">
            <v-container>
                <h5 class="display-1 font-weight-medium text-cenmter grey--text text--darekn-1">Welcome Back</h5>
                <v-container></v-container>
                <v-row justify="center">
                    <v-col cols="12" md="6" sm="12">
                        <v-card elevation="1">
                            <v-container>
                                <form action="">
                                    <v-row>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field
                                                v-model="loginForm.email"
                                                label="E-mail"
                                                type="email"
                                                outlined
                                                required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12" sm="12">
                                            <v-text-field
                                                v-model.trim="loginForm.password"
                                                label="Password"
                                                @keyup.enter="login"
                                                type="password"
                                                outlined
                                                required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <div class="text-center">
                                        <v-container>
                                            <v-btn @click="login" dark rounded block class="text-center indigo">Login</v-btn>
                                        </v-container>
                                        <v-container>
                                            <v-row>
                                                <v-btn router to="/reset" text rounded color="green">Forgot Password</v-btn>
                                                <v-spacer></v-spacer>
                                                <v-btn router to="/signup" text rounded color="green">Create an Account</v-btn>
                                            </v-row>
                                        </v-container>
                                    </div>
                                    <v-row justify="center">
                                        <v-col cols="12" md="3" sm="4"><v-divider></v-divider></v-col>
                                        <v-col cols="12" md="4" sm="4"><span class="ml-6 signUp">Or Sign up using </span></v-col>
                                        <v-col cols="12" md="3" sm="4"><v-divider></v-divider></v-col>
                                    </v-row>
                                    <v-container>
                                        <v-btn router to="/signup" text rounded color="green">Sign-Up</v-btn>
                                    </v-container>
                                    <!-- <v-row justify="center">
                                        <v-col cols="12" md="4" sm="6">
                                        <v-btn rounded block dark class="facebook font-weight-bold" style="text-transform: lowercase !important; font-size: 1.2rem !important;">facebook</v-btn>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6">
                                            <v-btn rounded outlined color="blue-grey darken-4" class="text--capitalize" block style="text-transform: none !important; font-size: 1.2rem !important;">
                                                <span class="googleB font-weight-bold">G</span>
                                                <span class="googleR font-weight-bold">o</span>
                                                <span class="googleY font-weight-bold">o</span>
                                                <span class="googleB font-weight-bold">g</span>
                                                <span class="googleG font-weight-bold">l</span>
                                                <span class="googleR font-weight-bold">e</span>
                                            </v-btn>
                                        </v-col>
                                    </v-row> -->
                                    <div class="text-center">
                                        <p class="caption blue-grey--text">We will never post anything without your permission</p>
                                    </div>
                                </form>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-snackbar
                v-model="loginState"
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
                    @click="loginState = false"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>

            <v-overlay :value="performingRequest">
                <v-progress-circular color="indigo lighten-4" indeterminate size="65"></v-progress-circular>
            </v-overlay>
        </v-main>
       <footer-app />
   </div>
</template>


<script>
import AppBar from '@/components/core/AppBar.vue';
import Footer from '@/components/core/Footer.vue';
const fb = require.ensure('../../firebaseConfig')


export default {
    components: {
        'app-bar': AppBar,
        'footer-app': Footer,
    },

    data() {
        return {
            loginForm: {
                email: "",
                password: "",
            },
            showLoginForm: true,
            performingRequest: false,
            color: "purple--text text--darken-2 body-1 font-weight-medium",
            currentUserEmail: "",
            loginState: false,
            desc: "",
            timeout: 4000,

        }
    },

    methods: {
        toggleForm() {
            this.showLoginForm = !this.showLoginForm;
        },

        login() {
            this.performingRequest = true
            fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
                .then(user => {
                    this.$store.commit('SETCURRENTUSER', user.user)
                    // alert(`${user.user.email} is logged in successfully!`)
                    this.performingRequest = false
                    this.desc = 'Logged in successfully!'
                    this.loginState = true
                    setTimeout(this.$router.replace("/dashboard"), 4100)
                }).catch(error => {
                    let errCode = error.code;
                    let errMsg = error.message;
                    if(errCode == 'auth/wrong-password') {
                        console.log('Wrong Password')
                        this.performingRequest = false
                        this.color  = "error--text text--darken-2 body-1 font-weight-medium"
                        this.desc = "Wrong password!"
                        this.loginState = true
                    } else {
                        console.log(errMsg)
                        // alert(`${errMsg}`)
                        this.performingRequest = false
                        this.color = "error--text text--darken-2 body-1 font-weight-medium"
                        this.desc = "An error happened, check your internet connection..."
                        this.loginState = true
                    }
                    console.log(`${error}`)
                });
        },

        mounted() {
            window.onpopstate = event => {
                console.log(event)
                if (
                    window.localStorage.getItem("info") !== null &&
                    this.$route.path == "/login"
                ) {
                    this.$router.push("/"); // redirect to home, for example
                }
            };
        }
        
    }
}
</script>


<style scoped>
    .signUp {
        transform: translateY(-1.5rem) !important;
    }
    .facebook {
        background-color:  #3b5998 !important;
    } 
    .googleB {
        color: #4885ed !important;
    }
    .googleG {
        color: #3cba54 !important;
    }
    .googleR {
        color: #db3236 !important;
    }
    .googleY {
        color: #f4c20d !important;
    }
 