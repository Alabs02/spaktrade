<template>
    <div>
        <v-app-bar
         app
         dark
         shrink-on-scroll
         prominent
         id="appbar"
         class="bar"
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Spak Trade</v-toolbar-title>

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
                        router to="/tutorials"
                    >
                        <v-list-item-icon><v-icon>{{ tutoIcon }}</v-icon></v-list-item-icon>
                        <v-list-item-title >Trading Tutorials</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                        link
                        router to="/calendar"
                    >
                        <v-list-item-icon><v-icon>{{ calendarIcon }}</v-icon></v-list-item-icon>
                        <v-list-item-title >Calendar</v-list-item-title>
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
            <span class="caption mt-2 ml-1">johnbon@me.com</span>
            <v-menu
             transition="scale-y-transition"
             bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" icon text class="ml-1">
                        <v-icon size="30" dark>{{ acctIcon }}</v-icon>
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

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list-item>
                <v-list-item-avatar>
                    <v-avatar size="100">
                        <v-img
                            src="@/assets/spaktrade.png"
                        ></v-img>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="title indigo--text">SpakTrade</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider class="mx-4"></v-divider>
            <v-list
            nav
            dense
            >
                <v-list-item
                    link
                    @click="userList"
                >
                    <v-list-item-icon><v-icon>{{ listIcon }}</v-icon></v-list-item-icon>
                    <v-list-item-title >User Lists</v-list-item-title>
                </v-list-item>
            
                <v-list-item
                    link
                    router to="/tutorials"
                >
                    <v-list-item-icon><v-icon>{{ tutoIcon }}</v-icon></v-list-item-icon>
                    <v-list-item-title >Trading Tutorials</v-list-item-title>
                </v-list-item>

                <v-list-item
                    link
                    router to="/calendar"
                >
                    <v-list-item-icon><v-icon>{{ calendarIcon }}</v-icon></v-list-item-icon>
                    <v-list-item-title >Calendar</v-list-item-title>
                </v-list-item>

                <v-list-item
                    link
                    @click="myForum"
                >
                    <v-list-item-icon><v-icon>{{ forumIcon }}</v-icon></v-list-item-icon>
                    <v-list-item-title >Forum</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>


<script>
import firebase from 'firebase';
import { mdiTrademark } from '@mdi/js';
import { mdiShopping } from '@mdi/js';
import { mdiFeatureSearchOutline } from '@mdi/js';
// import { mdiBitcoin } from '@mdi/js';
import { mdiContactsOutline } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiHomeCityOutline } from '@mdi/js';
import { mdiFormatListBulletedTriangle } from '@mdi/js';
import { mdiCalendarOutline } from '@mdi/js';
import { mdiForumOutline } from '@mdi/js';
import { mdiAccountBox } from '@mdi/js';
import { mdiTeach } from '@mdi/js';
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiOpenInNew } from '@mdi/js';

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

            // Js code
            drawer: false,
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

    methods: {
        signOut() {
            firebase.auth().signOut()
                .then(user => {
                    this.$router.replace('/');
                    console.log(`${user} logout successfully!`);
                }).catch(err => {
                    console.error(err);
                });
        },
    }
}
</script>


<style scoped>
    .bar {
        background-image: linear-gradient(to bottom left, #1A237E, #4A148C, #880E4F);
    }
</style>