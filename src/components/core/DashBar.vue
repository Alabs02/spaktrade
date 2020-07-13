<template>
    <div>
        <v-app-bar
         dark
         id="appbar"
         color="purple darken-4"
         app
        >
            <v-app-bar-nav-icon class="hidden-lg-only" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>SparkTrade</v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="hidden-md-and-down">
                <v-btn 
                 v-for="(bar, i) in barItems"
                 :key="i"
                 text
                 router :to="bar.to"
                 class="ml-1 mr-1"
                >{{ bar.title }}<v-icon right>{{ bar.icon }}</v-icon></v-btn>
            </div>
            <v-menu
             bottom
             origin="center center"
             transition="scale-transition"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                     text 
                     dark
                     v-on="on"
                     class="hidden-md-and-down"
                    >Features<v-icon right>{{ featureSIcon }}</v-icon></v-btn>
                </template>

                <v-list>
                    <v-list-item
                        link
                        @click="userList"
                    >
                        <v-list-item-icon><v-icon>{{ listIcon }}</v-icon></v-list-item-icon>
                        <v-list-item-title >User Lists</v-list-item-title>
                    </v-list-item>
                
                    <v-list-item
                        link
                        router to="/dashboard"
                    >
                        <v-list-item-icon><v-icon>{{ tutoIcon }}</v-icon></v-list-item-icon>
                        <v-list-item-title >Trading Tutorials</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                        link
                        @click="myForum"
                    >
                        <v-list-item-icon><v-icon>{{ forumIcon }}</v-icon></v-list-item-icon>
                        <v-list-item-title >Forum</v-list-item-title>
                    </v-list-item>
                </v-list>

            </v-menu>
            <span class="body-2 mt-1 ml-1">{{ userEmail }}</span>
            <v-menu
             transition="scale-y-transition"
             bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" icon text class="ml-1">
                        <v-icon color="yellow">{{ dotIcon }}</v-icon>
                    </v-btn>
                </template>
                <v-list dense>
                    <v-list-item
                        link
                        @click="signOut"
                    >
                        <v-list-item-icon>
                            <v-icon color="purple">{{ accountIcon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="purple--text">Sign out</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer
         v-model="drawer"
         :mobile-breakpoint="mobileBreakPoint"
         app="true"
         :permanent="permanent"
        >
            <v-row class="fill-height" no-gutters>
                <v-navigation-drawer
                 dark
                 mini-variant 
                 mini-variant-width="56"
                 :mobile-breakpoint="mobileBreakPoint"
                 :permanent="permanent"
                 class="purple darken-4"
                >
                    <v-list-item class="px-2">
                        <v-list-item-avatar>
                            <v-img src="@/assets/avatar.svg"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-divider class="mt-2"></v-divider>

                    <v-list
                        dense
                        nav
                    >
                        <v-list-item
                         link
                         router to="/"
                        >
                            <v-list-item-action>
                                <v-icon>{{ homeIcon }}</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Home</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                         link
                         router to="/traders/all"
                        >
                            <v-list-item-action>
                                <v-icon>{{ tradersIcon }}</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Traders</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                         link
                         router to="/combos"
                        >
                            <v-list-item-action>
                                <v-icon>{{ combosIcon }}</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Combos</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                         link
                         @click="myForum"
                        >
                            <v-list-item-action>
                                <v-icon>{{ forumIcon }}</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Forum</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                         link
                         router to="/contact"
                        >
                            <v-list-item-action>
                                <v-icon>{{ contactIcon }}</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Contact Us</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>

                <v-list class="grow">
                    <v-list-item>
                        <v-list-item-title class="font-weight-bold headline purple--text text--darken-1">{{ userName.slice(0, 8) }}</v-list-item-title>
                    </v-list-item>
                    <v-divider class="mt-2"></v-divider>

                    <v-list-item
                     link
                     router to="/"
                    >
                        <v-list-item-title class="mt-5 purple--text text--darken-4 body-1">Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                     link
                     router to="/traders/all"
                    >
                        <v-list-item-title class="mt-6 purple--text text--darken-4 body-1">Traders</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                     link
                     router to="/combos"
                    >
                        <v-list-item-title class="mt-7 purple--text text--darken-4 body-1">Combos</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                     link
                     @click="myForum"
                    >
                        <v-list-item-title class="mt-8 purple--text text--darken-4 body-1">Forum</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                     link
                     router to="/contact"
                    >
                        <v-list-item-title class="mt-9 purple--text text--darken-4 body-1">Contact Us</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-row>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn @click="signOut" block large dark color="purple darken-4">Logout</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-snackbar
            v-model="logOutState"
            top
            light
            :timeout="timeout"
        >
            <span class="body-1 font-weight-medium purple--text text--darken-1">{{ desc }}</span>
            
            <template v-slot:action="{ attrs }">
                <v-btn
                color="pink darken-4"
                text
                v-bind="attrs"
                @click="logOutState = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>

        <v-snackbar
            v-model="userListState"
            top
            light
            :timeout="timeout"
        >
            <span class="body-1 font-weight-medium purple--text text--darken-1">Users list not available at the moment</span>
            
            <template v-slot:action="{ attrs }">
                <v-btn
                color="pink darken-4"
                text
                v-bind="attrs"
                @click="userListState = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>


<script>
import { mdiTrademark } from '@mdi/js';
import { mdiShopping } from '@mdi/js';
import { mdiFeatureSearchOutline } from '@mdi/js';
import { mdiContactsOutline } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiHomeCityOutline } from '@mdi/js';
import { mdiFormatListBulletedTriangle } from '@mdi/js';
import { mdiCalendarOutline } from '@mdi/js';
import { mdiForumOutline } from '@mdi/js';
import { mdiAccountBox } from '@mdi/js';
import { mdiTeach } from '@mdi/js';
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiPhoneOutline } from '@mdi/js';
import { mdiOpenInNew } from '@mdi/js';
import { mdiDotsVertical } from '@mdi/js'
const fb = require('../../firebaseConfig')

// import Login from '@/components/users/Login.vue';
// import SignUp from '@/components/users/Signup.vue';


export default {
    components: {
        // 'login': Login,
        // 'sign-up': SignUp,
    },

    data() {
        return {
            // Icon
            searchIcon: mdiMagnify, 
            featureSIcon: mdiFeatureSearchOutline,
            acctIcon: mdiAccountCircleOutline,
            accountIcon: mdiAccountBox,
            listIcon: mdiFormatListBulletedTriangle,
            tutoIcon: mdiTeach,
            calendarIcon: mdiCalendarOutline,
            forumIcon: mdiForumOutline,
            homeIcon: mdiHomeCityOutline,
            tradersIcon: mdiTrademark,
            combosIcon: mdiShopping,
            contactIcon: mdiPhoneOutline,
            dotIcon: mdiDotsVertical,


            // Js code
            drawer: false,
            logOutState: false,
            userListState: false,
            timeout: 4000,
            desc: "",
            // userEmail: null,
            // userName: null,
            // userId: null,
            mobileBreakPoint: 991,
            permanent: true,
            app: true,
            barItems: [
                { title: "Home", icon: mdiHomeCityOutline, to: "/" },
                { title: "Traders", icon: mdiTrademark, to: "/traders/all" },
                { title: "Combos", icon: mdiShopping, to: "/combos" },
                // { title: "Cryptos", icon: mdiBitcoin, to: "#!" },
                { title: "Contact Us", icon: mdiContactsOutline, to: "/contact" }
            ],
            userDetails: [
                { title: "Logout", icon: mdiOpenInNew, to: "/"}
            ]
        }
    },

    created() {
        this.responsive()
        this.displayDetails()
    },

    methods: {
        signOut() {
            fb.auth.signOut()
                .then(user => {
                    this.desc = "Logged out successfully!"
                    this.logOutState = true
                    setTimeout(() => {
                      this.$router.replace('/');  
                    }, 4200);
                    console.log(user)
                }).catch(err => {
                    console.error(err);
                    this.desc = "An error occured, please try again!"
                    this.logOutState = true
                });
        },
        myForum() {
            window.open("https://sparktrade.discussion.community/  ", "_blank");
        },
        userList() {
            this.userListState = true
            console.log('No Users at the momemnt.');
        },
        responsive() {
            if (window.matchMedia('screen and (max-width: 1024px)').matches) {
                this.permanent = false
                this.app = false
            } else {
                this.permanent = true
                this.app = true
            }
        }
    },

    computed: {
        userName() {
            return this.$store.state.userName
        }
    }
}
</script>


<style scoped>
   
</style>