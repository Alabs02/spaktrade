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
            <v-btn router to="/login" color="white" rounded outlined class="ml-2">Login</v-btn>
        </v-app-bar>
    </div>
</template>


<script>
import { mdiTrademark } from '@mdi/js';
import { mdiShopping } from '@mdi/js';
import { mdiFeatureSearchOutline } from '@mdi/js';
// import { mdiBitcoin } from '@mdi/js';
import { mdiContactsOutline } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiHomeCityOutline } from '@mdi/js';
import { mdiFormatListBulletedTriangle } from '@mdi/js';
// import { mdiWall } from '@mdi/js';
import { mdiCalendarOutline } from '@mdi/js';
import { mdiForumOutline } from '@mdi/js';
import { mdiTeach } from '@mdi/js';
// import { mdiChartTree } from '@mdi/js';

// import Login from '@/components/users/Login.vue';
// import SignUp from '@/components/users/Signup.vue';


export default {
    components: {
        // 'login': Login,
        // 'sign-up': SignUp,
    },

    data() {
        return {
            searchIcon: mdiMagnify, 
            featureSIcon: mdiFeatureSearchOutline,
            listIcon: mdiFormatListBulletedTriangle,
            tutoIcon: mdiTeach,
            calendarIcon: mdiCalendarOutline,
            forumIcon: mdiForumOutline,
            barItems: [
                { title: "Home", icon: mdiHomeCityOutline, to: "/" },
                { title: "Traders", icon: mdiTrademark, to: "/traders/all" },
                { title: "Combos", icon: mdiShopping, to: "/combos" },
                { title: "Contact Us", icon: mdiContactsOutline, to: "/contact" }
            ],
        }
    },

    methods: {
        myForum() {
            window.open("https://usman2.discussionchatroom.com/chatroom", "_blank");
        },
        userList() {
            alert('No Users at the momemnt.');
        },
        calendar() {
            alert('Calendar Under developement!');
        }
    }
}
</script>


<style scoped>
    
        /* //background: linear-gradient(to buttom right, #1A237E, #1A237E) !important; */
    .bar {
        /* background-image: linear-gradient(to bottom right, #F44336, #E65100, #FFEB3B); */
        background-image: linear-gradient(to bottom left, #1A237E, #4A148C, #880E4F);
    }
</style>