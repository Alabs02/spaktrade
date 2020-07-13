<template>
    <div>
        <app-bar />

        <v-main>
            <v-sheet>
                <v-card>
                    <v-tabs
                     v-model="tab"
                     icons-and-text
                    >
                        <v-tab-slider></v-tab-slider>

                        <v-tab href="#tab1" class="pink--text text--darken-3">
                            Top Traders
                            <v-icon>{{ topTIcon }}</v-icon>
                        </v-tab>

                        <v-tab href="#tab2" class="pink--text text--darken-3">
                            All Traders
                            <v-icon>{{ allTIcon }}</v-icon>
                        </v-tab>

                        <v-spacer></v-spacer>

                        <v-sheet>
                            <v-row>
                                <v-col cols="12" md="5" sm="5">
                                    <v-text-field
                                    rounded
                                    label="Search for traders"    
                                    solo     
                                    color="grey"  
                                    :prepend-inner-icon="searchIcon"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6" sm="5">
                                <v-btn outlined rounded color="pink darken-4" class="mt-2" style="float: right !important;">join as a trader</v-btn>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-tabs>
                    <v-divider></v-divider>
                    <v-tabs class="pink lighten-5">
                        <v-tab>All</v-tab>
                        <v-tab class="green--text">$ Live</v-tab>
                    </v-tabs>
                </v-card>

                <v-sheet>
                    <v-tabs-items v-model="tab">
                        <v-tab-item
                            id="tab1"
                        >
                            <v-sheet>
                                <v-container>
                                    <v-row justify="center">
                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-sheet>
                        </v-tab-item>

                        <v-tab-item
                            id="tab2"
                        >
                            <v-sheet>
                                <v-container>
                                    <v-row justify="center">
                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>


                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col> 

                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                        <v-col cols="12" md="3" sm="12">
                                            <v-card class="mx-auto">
                                                <v-list-item>
                                                    <v-list-item-avatar color="grey lighten-3">
                                                        <v-icon color="grey darken-4">{{ accountIcon }}</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="headline font-weight-medium">Jonhn02</v-list-item-title>
                                                        <v-list-item-subtitle>Markets</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-sparkline
                                                    :fill="fill"
                                                    :gradient="gradient"
                                                    :line-width="width"
                                                    height="140"
                                                    :padding="padding"
                                                    :smooth="radius || false"
                                                    :value="value"
                                                    auto-draw
                                                ></v-sparkline>
                                                <v-divider></v-divider>
                                                <v-row>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text class="caption">
                                                            ROI: <span class="font-weight-medium green--text">+123.10%</span>
                                                            <p>Drawdown (ALL): <span class="font-weight-medium pink--text text--darken-3">-3%</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                    <v-col cols="12" md="6" sm="6">
                                                        <v-card-text>
                                                            <v-icon>{{ acctIcon }}</v-icon><span class="ml-2">30</span>
                                                            <p><v-icon>{{ acctIcon }}</v-icon><span class="ml-2">14.5k</span></p>
                                                        </v-card-text>
                                                    </v-col>
                                                </v-row>
                                                <v-card-actions class="text-center">
                                                    <v-container>
                                                        <v-row justify="center">
                                                            <v-btn rounded block dark color="pink darken-3" >Follow</v-btn>
                                                        </v-row>
                                                    </v-container>
                                                    
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-sheet>
                        </v-tab-item>

                    </v-tabs-items>
                </v-sheet>
            </v-sheet>
        </v-main>
        <footer-app />
    </div>
</template>


<script>
import AppBar from '@/components/core/AppBar.vue';
import Footer from '@/components/core/Footer.vue';
import { mdiAccountMultipleOutline } from "@mdi/js";
import { mdiAccountMultiplePlusOutline } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { mdiAccountCircleOutline } from "@mdi/js";
import { mdiAccount } from "@mdi/js";

//eslint-disable-next-line no-unused-vars
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['#7B1FA2', '#CE93D8'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
]

export default {
    components: {
        'app-bar': AppBar,
        'footer-app': Footer,
    },

    data() {
        return {
            // Icons
            topTIcon: mdiAccountMultipleOutline,
            allTIcon: mdiAccountMultiplePlusOutline,
            searchIcon: mdiMagnify,
            acctIcon: mdiAccountCircleOutline,
            accountIcon: mdiAccount,

            // Sparkline
            fill: true,
            gradient: gradients[3],
            gradients,
            padding: 8,
            radius: 10,
            value: [0, 4, 6 ,5, 7 ,7 ,10],
            width: 2,

            // Js code
            tab: null,
        }
    }
}
</script>

<style scoped>
    .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
        color: rgba(167, 15, 121, 0.103);
    }
</style>
