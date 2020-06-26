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
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

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
                        v-for="(item, i) in featureItems"
                        :key="i"
                        link
                    >
                        <v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>

            </v-menu>
            <span class="caption mt-2 ml-1">me@gmail.com</span>
            <v-menu
             transition="scale-y-transition"
             bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" icon text class="ml-1">
                        <v-icon size="30" dark>{{ acctIcon }}</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, i) in userDetails"
                    :key="i"
                    link
                    @click="go"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                
            </v-menu>
            
        </v-app-bar>
    </div>
</template>


<script>
import { mdiTrademark } from '@mdi/js';
import { mdiShopping } from '@mdi/js';
import { mdiFeatureSearchOutline } from '@mdi/js';
import { mdiBitcoin } from '@mdi/js';
import { mdiContactsOutline } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiHomeCityOutline } from '@mdi/js';
import { mdiFormatListBulletedTriangle } from '@mdi/js';
import { mdiWall } from '@mdi/js';
import { mdiCalendarOutline } from '@mdi/js';
import { mdiForumOutline } from '@mdi/js';
import { mdiAlphaC } from '@mdi/js';
import { mdiChartTree } from '@mdi/js';
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

            // Js code
            barItems: [
                { title: "Home", icon: mdiHomeCityOutline, to: "/" },
                { title: "Traders", icon: mdiTrademark, to: "/traders/all" },
                { title: "Combos", icon: mdiShopping, to: "/combos" },
                { title: "Cryptos", icon: mdiBitcoin, to: "#!" },
                { title: "Contact Us", icon: mdiContactsOutline, to: "/contact" }
            ],

            featureItems: [
                { title: "Combos Plus", icon: mdiAlphaC,  to: '#!' },
                { title: "Social Charts", icon: mdiChartTree, to: '#!' },
                { title: "UserLists", icon: mdiFormatListBulletedTriangle, to: '#!' },
                { title: "TradeWall", icon: mdiWall, to: '#!' },
                { title: "Calender", icon: mdiCalendarOutline, to: '#!' },
                { title: "Forum", icon: mdiForumOutline, to: '#!' },
            ],

            userDetails: [
                { title: "Logout", icon: mdiOpenInNew, to: "/"}
            ]
        }
    },

    methods: {
        go() {
            alert("Logout Clicked");
        }
    }
}
</script>


<style scoped>
    .bar {
        background-image: linear-gradient(to bottom left, #1A237E, #4A148C, #880E4F);
    }
</style>