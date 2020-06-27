<template>
    <div>
        <app-bar-user />

        <v-main>
            <v-sheet>
                <v-divider></v-divider>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4" sm="12">
                            <v-row>
                                <v-avatar size="80" color="indigo darken-2">
                                    <v-icon dark>{{ acctIcon }}</v-icon>
                                </v-avatar>
                                <span class="body-2 font-weight-medium">Usman Aliyu</span>
                                <v-container>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-container>
                                                <v-row justify="left">
                                                    <v-col cols="12" md="5">
                                                        <v-select
                                                            v-on="on"
                                                            :items="test"
                                                            label="user"
                                                            outlined
                                                            shaped
                                                            dense
                                                            style="font-size: 1rem !important; transform: translateY(-1rem) !important;"
                                                        ></v-select>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                            
                                        </template>
                                        <span>Usman Demo Account</span>
                                    </v-tooltip>
                                </v-container>
                            </v-row>
                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="12" md="7" sm="12">
                            <v-row>
                                <v-col cols="12" md="6" sm="12">
                                    <h6 class="text-left ml-5 title mt-8">Balance: <span id="money">N</span>{{ 10000 }}</h6>
                                </v-col>

                                <v-col cols="12" md="6" sm="12">
                                    <v-btn rounded dark class="ml-4 mt-8 text-right indigo darken-3" style="float: right !important;">open real account</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
            <v-divider></v-divider>
            <v-sheet>
                <v-container>
                    <v-tabs>
                        <v-tab href="#tab1">Account</v-tab>
                        <v-tab href="#tab2">History</v-tab>
                    </v-tabs>
                </v-container>
            </v-sheet>
            <v-divider></v-divider>
            <v-sheet>
                <v-container>
                    <v-card elevation="12">
                        <v-container>
                            <v-row>
                                <v-icon class="mt-1 ml-2 grey--text text--darken-3" size="30">{{ newAcctIcon }}</v-icon>
                                <h6 class="ml-2 body-2 mt-3 font-weight-medium grey--text text--darken-4">Personal Details</h6>
                            </v-row>
                        </v-container>
                            
                        <v-card-text>
                            <v-container>
                                This is the email address associated with your ZuluTrade account. If you would like to change it, please send your request from this 
                                email address to support@zulutrade.com, indicating the new email address.
                            </v-container>

                            <v-container>
                                <v-text-field
                                 outlined
                                 dense
                                 value="me@gmail.com"
                                ></v-text-field>
                            </v-container>
                            <v-container>
                                <h6 class="ml-2 body-2 mt-3 font-weight-medium grey--text text--darken-4">Full Name</h6>
                                <v-card-text>
                                    This must be your real full name (first name, middle name and last name).
                                    <v-row>
                                        <v-col cols="12" md="2" sm="12">
                                            <v-select
                                                :items="titles"
                                                label="title"
                                                outlined
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="12">
                                            <v-text-field
                                             value="John"
                                             outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="12">
                                            <v-text-field
                                             value="Harvey"
                                             outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="12">
                                            <v-text-field
                                             value="Spectar"
                                             outlined
                                            ></v-text-field>
                                        </v-col>
                                        
                                    </v-row>
                                </v-card-text>

                                <v-row>
                                    <v-col cols="12" md="6" sm="12">
                                        <h6 class="ml-2 body-2 mt-3 font-weight-medium grey--text text--darken-4">Country of Residence</h6>
                                        <v-card-text>
                                            <span>Choose your country of residence.</span>
                                            <v-select
                                                :items="countries"
                                                outlined
                                                label="country"
                                            ></v-select>

                                        </v-card-text>
                                    </v-col>

                                    <v-col cols="12" md="6" sm="12" class="mt-n2">
                                        <h6 class="ml-2 body-2 mt-3 font-weight-medium grey--text text--darken-4">Phone Number</h6>
                                        <v-card-text>
                                            <span>Enter your phone number without any leading zeros or prefixes.</span>
                                            <v-row>
                                                <v-col cols="12" md="3" sm="12">
                                                    <v-select
                                                        :items="countries"
                                                        outlined
                                                        label="country"
                                                    ></v-select>
                                                </v-col>

                                                <v-col cols="12" md="6" sm="12">
                                                    <v-text-field
                                                    outlined
                                                    type="number"
                                                    label="Phone Number"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                                <h6 class="ml-2 body-2 mt-3 font-weight-medium grey--text text--darken-4">Receive Newsletters</h6>
                                <v-card-text class="caption">
                                    Allow SpakTrade to send you newsletters and other notifications. 
                                    Your email will not be used for any kind of third party advertisements.
                                </v-card-text>

                                <v-checkbox
                                    v-model="checkbox"
                                    :error-messages="checkboxErrors"
                                    label="Yes, I would like to receive newsletters"
                                    required
                                    checked
                                    @change="$v.checkbox.$touch()"
                                    @blur="$v.checkbox.$touch()"
                                ></v-checkbox>
                            </v-container>
                        </v-card-text>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-actions>
                            <v-btn dark rounded color="indigo darken-3">save settings</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn text class="grey--text">Reset Changes</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-sheet>

        </v-main>
        <footer-app />
    </div>
</template>


<script>
import AppBarUser from '@/components/core/AppBarUser.vue';
import Footer from '@/components/core/Footer.vue';
import { mdiAccountCircleOutline } from "@mdi/js";
import { mdiAccount } from "@mdi/js";

export default {
    components: {
        'app-bar-user': AppBarUser,
        'footer-app': Footer,
    },

    data() {
        return {
            // Icons
            acctIcon: mdiAccountCircleOutline,
            newAcctIcon: mdiAccount,

            //Js code
            test: [
                'Demo Account',
                'Real Account'
            ],
            titles: ['Mr.', 'Mrs.'],
            countries: ['Nigeria', 'South Africa'],
        }
    }
}
</script>

<style scoped>
    #money {
        text-decoration-line: line-through !important;
    }
</style>