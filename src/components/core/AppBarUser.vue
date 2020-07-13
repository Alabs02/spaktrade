<template>
    <div>
        <v-app-bar
         app
         dark
         id="appbar"
         color="purple darken-4"
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Spark Trade</v-toolbar-title>

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
                        <v-icon size="30" color="amber">{{ dotIcon }}</v-icon>
                    </v-btn>
                </template>
                <v-list shaped>
                    <v-list-item
                        link
                        @click="signOut"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ accountIcon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Sign out</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer class="fix-nav" v-model="drawer" absolute temporary>
            <v-list-item>
                <v-list-item-avatar>
                    <v-avatar tile size="40">
                        <v-img
                            src="@/assets/spakLogo.svg"
                        ></v-img>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="title indigo--text">SparkTrade</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider class="mx-4"></v-divider>
            <v-list
            nav
            dense
            >
                <v-list-item
                    link
                    router to="/"
                    color="pink darken-4"
                >
                    <v-list-item-icon><v-icon>{{ homeIcon }}</v-icon></v-list-item-icon>
                    <v-list-item-title >Home</v-list-item-title>
                </v-list-item>
            
                <v-list-item
                    link
                    router to="/traders/all"
                    color="pink darken-4"
                >
                    <v-list-item-icon><v-icon>{{ tradersIcon }}</v-icon></v-list-item-icon>
                    <v-list-item-title >Traders</v-list-item-title>
                </v-list-item>

                <v-list-item
                    link
                    router to="/combos"
                    color="pink darken-4"
                >
                    <v-list-item-icon><v-icon>{{ combosIcon }}</v-icon></v-list-item-icon>
                    <v-list-item-title >Combos</v-list-item-title>
                </v-list-item>

                <v-list-item
                    link
                    @click="userList"
                    color="pink darken-4"
                >
                    <v-list-item-icon><v-icon>{{ listIcon }}</v-icon></v-list-item-icon>
                    <v-list-item-title >User Lists</v-list-item-title>
                </v-list-item>
            
                <v-list-item
                    link
                    router to="/dashboard"
                    color="pink darken-4"
                >
                    <v-list-item-icon><v-icon>{{ tutoIcon }}</v-icon></v-list-item-icon>
                    <v-list-item-title >Trading Tutorials</v-list-item-title>
                </v-list-item>


                <v-list-item
                    link
                    @click="myForum"
                    color="pink darken-4"
                >
                    <v-list-item-icon><v-icon>{{ forumIcon }}</v-icon></v-list-item-icon>
                    <v-list-item-title >Forum</v-list-item-title>
                </v-list-item>

                <v-list-item
                    link
                    router to="/contact"
                    color="pink darken-4"
                >
                    <v-list-item-icon><v-icon>{{ contactIcon }}</v-icon></v-list-item-icon>
                    <v-list-item-title >Contact Us</v-list-item-title>
                </v-list-item>
            </v-list>
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
import { mdiDotsVertical } from '@mdi/js';

const fb = require('../../firebaseConfig')

export default {
    components: {
       
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
            dotIcon: mdiDotsVertical,
            calendarIcon: mdiCalendarOutline,
            forumIcon: mdiForumOutline,
            homeIcon: mdiHomeCityOutline,
            tradersIcon: mdiTrademark,
            combosIcon: mdiShopping,
            contactIcon: mdiPhoneOutline,

            // Js code
            drawer: false,
            logOutState: false,
            userListState: false,
            timeout: 4000,
            desc: "",
            userEmail: null,
            barItems: [
                { title: "Home", icon: mdiHomeCityOutline, to: "/" },
                { title: "Traders", icon: mdiTrademark, to: "/traders/all" },
                { title: "Combos", icon: mdiShopping, to: "/combos" },
                // { title: "Cryptos", icon: mdiBitcoin, to: "#!" },
                { title: "Contact Us", icon: mdiContactsOutline, to: "/contact" }
            ],

            // featureItems: [
            //     // { title: "Combos Plus", icon: mdiAlphaC,  to: '#!' },
            //     // { title: "Social Charts", icon: mdiChartTree, to: '#!' },
            //     { title: "UserLists", icon: mdiFormatListBulletedTriangle, to: '#!' },
            //     // { title: "TradeWall", icon: mdiWall, to: '#!' },
            //     { title: "Calender", icon: mdiCalendarOutline, to: '#!' },
            //     { title: "Forum", icon: mdiForumOutline, to: '#!' },
            // ],

            userDetails: [
                { title: "Logout", icon: mdiOpenInNew, to: "/"}
            ]
        }
    },

    created() {
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
                    this.$router.replace('/');
                }).catch(err => {
                    this.desc = "An error occured, please try again!"
                    this.logOutState = true
                    console.error(err);
                });
        },

        displayDetails() {
            const obj = fb.auth.currentUser
            this.userEmail = obj.email
        },

        myForum() {
            window.open("https://sparktrade.discussion.community/", "_blank");
        },
        userList() {
            this.userListState = true
            console.log('No Users at the momemnt.');
        },
    },

    computed: {
        // userEmail() {
        //     return this.$store.state.currentUserEmail;
        // }
    }
}
</script>


<style scoped>
    /* .bar {
        background-image: linear-gradient(to bottom left, #1A237E, #4A148C, #880E4F);
    } */
    .fix-nav {
        height: 100% !important;
        width: 20% !important;
        position:fixed !important;
    }
</style>