<template>
    <div id="contact">
        <app-bar />
        <v-main>
            <v-sheet id="contact">
                <v-container>
                <v-row justify="center">
                    <v-icon size="50" color="grey">{{ timeIcon }}</v-icon>
                    <h5 class="ml-3 mt-2 headline font-weight-bold grey--text">Customer Service Hours</h5>
                </v-row>
                <v-container>
                    <p class="text-center body-2 mt-4">
                            At SpakTrade we speak English, German, French, Italian, Spanish,
                            Portuguese, Russian, Arabic, Chinese, Japanese and Greek.
                        </p>
                        <v-container>
                            <p class="text-center body-2">
                                Our customer support team is available 24/5
                                from <b>Sunday 21:00 (GMT-4)to Friday 22:00 (GMT-4)</b>
                            </p>
                        </v-container>
                </v-container>
                <v-row justify="center">
                    <v-col cols="12" md="6" sm="12">
                        <v-card class="mx-auto text-center">
                            <v-container>
                                    <v-avatar tile>
                                        <v-icon color="purple darken-3">{{ msgIcon }}</v-icon>
                                    </v-avatar>

                                    <v-card-text class="body-1">On-line support</v-card-text>

                                    <v-container>
                                        <v-btn dark rounded color="purple darken-4" style="text-transform: capitalize !important;">live chat</v-btn>
                                    </v-container>

                                    <p class="caption grey--text">All Languages</p>
                            </v-container>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="6" sm="12">
                        <v-card class="mx-auto text-center">
                            <v-container>
                                    <v-avatar tile>
                                        <v-icon color="purple darken-3">{{ atIcon }}</v-icon>
                                    </v-avatar>

                                    <v-card-text class="body-1">Email support</v-card-text>

                                    <v-container>
                                        <v-card-text class="title mt-n7 purple--text text--darken-4">support@spaktrade.com</v-card-text>
                                    </v-container>

                                    <p class="caption grey--text">All Languages</p>
                                </v-container>
                        </v-card>
                    </v-col>
                </v-row>
                </v-container>
            </v-sheet>

            <v-sheet class="mt-3 text-center">
                <v-container>
                    <v-row justify="center">
                        <div class="text-center">
                            <v-avatar tile>
                                <v-icon color="purple darken-3">{{ cellIcon }}</v-icon>
                            </v-avatar>
                            <h6 class="headline mt-2 grey--text text--darken-2"><b>Phone support</b></h6>
                            <h6 class="indigo--text text--darken-4 mt-3 font-weight-bold title">+1 (701) 234-5678</h6>
                            <v-container>
                                <p class="body-2 font-weight-light mt-n1">Central Support Hotline</p>
                                <p class="body-2 font-weight-light mt-n2">(International charges might occur)</p>
                            </v-container>
                        </div>
                    </v-row>
                </v-container>
            </v-sheet>


            <v-sheet class="mt-3">
                <v-container>
                    <v-row justify="center">
                        <v-col cols="12" md="4" sm="12">
                            <v-card flat elevation="0" class="mx-auto text-center">
                                <v-avatar tile >
                                    <v-img
                                        src="@/assets/internet.svg"
                                    ></v-img>
                                </v-avatar>
                                <p>USA</p>
                                <v-container>
                                    <v-divider class="mx-12 mt-n4"></v-divider>
                                </v-container>

                                <v-card-text class="body-1 mt-n3">
                                    New York
                                    <p class="body-2"><b>+1 7012345678</b></p>
                                </v-card-text>

                                <v-card-text class="body-1 mt-n5">
                                    Los Angeles
                                    <p class="body-2"><b>+1 646 980 4741</b></p>
                                </v-card-text>

                                <v-card-text class="body-1 mt-n5">
                                    San Francisco
                                    <p class="body-2"><b>+14245351258</b></p>
                                </v-card-text>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4" sm="12">
                            <v-card flat elevation="0" class="mx-auto text-center">
                                <v-avatar tile >
                                    <v-img
                                        src="@/assets/internet.svg"
                                    ></v-img>
                                </v-avatar>
                                <p>Canada</p>
                                <v-container>
                                    <v-divider class="mx-12 mt-n4"></v-divider>
                                </v-container>

                                <v-card-text class="body-1 mt-n3">
                                    Ontario
                                    <p class="body-2"><b>+14378863247</b></p>
                                </v-card-text>

                                <v-card-text class="body-1 mt-n5">
                                    Toronto
                                    <p class="body-2"><b>+14378863201</b></p>
                                </v-card-text>

                                <v-card-text class="body-1 mt-n5">
                                    Ottawa
                                    <p class="body-2"><b>+14378862645</b></p>
                                </v-card-text>
                            </v-card>
                        </v-col>

                        <v-col cols="12" md="4" sm="12">
                            <v-card flat elevation="0" class="mx-auto text-center">
                                <v-avatar tile >
                                    <v-img
                                        src="@/assets/internet.svg"
                                    ></v-img>
                                </v-avatar>
                                <p>Australia.</p>
                                <v-container>
                                    <v-divider class="mx-12 mt-n4"></v-divider>
                                </v-container>

                                <v-card-text class="body-1 mt-n3">
                                    Sydney
                                    <p class="body-2"><b>+14378861462</b></p>
                                </v-card-text>

                                <v-card-text class="body-1 mt-n5">
                                    Melbourne
                                    <p class="body-2"><b>+14378861292</b></p>
                                </v-card-text>

                                <v-card-text class="body-1 mt-n5">
                                    Brisbane
                                    <p class="body-2"><b>+14378862821</b></p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>

            <v-sheet class="mt-3" id="contact">
                <v-row justify="center">
                    <v-col cols="12" md="6" sm="12">
                        <v-card class="mx-auto">
                            <v-container>
                                <v-row justify="center"> 
                                    <v-icon color="purple darken-4" size="50">{{ emailIcon }}</v-icon>
                                    <span class="headline ml-2 mt-2 font-weight-bold">Feedback</span>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="6" sm="12">
                        <v-card class="mx-auto">
                            <v-container>
                                <v-row justify="center"> 
                                    <v-icon color="purple darken-4" size="50">{{ msgMul }}</v-icon>
                                    <span class="headline ml-2 mt-2 font-weight-bold">Forum</span>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-main>
        <footer-app />
    </div>
</template>

<script>
import { mdiTimelineClockOutline } from '@mdi/js';
import { mdiMessageBulleted } from '@mdi/js';
import { mdiAt } from '@mdi/js';
import { mdiPhoneCheckOutline } from '@mdi/js';
import { mdiEmailNewsletter } from '@mdi/js';
import { mdiEmailMultipleOutline } from '@mdi/js';
import Footer from '@/components/core/Footer.vue';
import AppBar from '@/components/core/AppBar.vue';


export default {
    components: {
        'footer-app': Footer,
        'app-bar': AppBar,
    },

    data() {
        return {
            timeIcon: mdiTimelineClockOutline,
            msgIcon: mdiMessageBulleted,
            atIcon: mdiAt,
            cellIcon: mdiPhoneCheckOutline,
            emailIcon: mdiEmailNewsletter,
            msgMul: mdiEmailMultipleOutline,
        }
    }
}
</script>


<style scoped>
    #contact {
        background-color: #ECEFF1 !important;
    }
</style>