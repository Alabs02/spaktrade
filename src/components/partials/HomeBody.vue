<template>
  <div>
    <v-container>
      <v-card elevation="0" class="mx-auto text-center">
        <v-container>
          <!-- <span class="title mt-8">How it works</span> -->
          <v-row justify="center">
            <v-col cols="12" md="4" sm="12">
              <v-avatar tile size="100">
                <v-icon color="purple darken-1">{{ chartIcon }}</v-icon>
              </v-avatar>
              <p
                class="subtitle-1 font-weight-bold"
                style="text-align: center !important;"
              >Join SparkTrade</p>
              <v-container>
                <v-card-text class="workText caption">
                  connect their account and
                  <br />share their trading strategy
                </v-card-text>
              </v-container>
            </v-col>

            <v-col cols="12" md="4" sm="12">
              <v-avatar tile size="100">
                <v-icon color="purple darken-1">{{ testIcon }}</v-icon>
              </v-avatar>
              <p
                class="subtitle-1 font-weight-bold"
                style="text-align: center !important;"
                id="workTitle"
              >SparkTrade ranks Traders</p>
              <v-container>
                <v-card-text class="workText caption">
                  based on their ROI and risk
                  <br />behavior
                </v-card-text>
              </v-container>
            </v-col>

            <v-col cols="12" md="4" sm="12">
              <v-avatar tile size="100">
                <v-icon color="purple darken-1">{{ transferIcon }}</v-icon>
              </v-avatar>
              <p
                class="subtitle-1 font-weight-bold"
                style="text-align: center !important;"
                id="workTitle"
              >
                Investors select the
                <br />strategies to copy
              </p>
              <v-container>
                <v-card-text class="workText caption">
                  according to their capital and risk
                  <br />appetite
                </v-card-text>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>

    <v-sheet class="mt-5">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="4" sm="12">
            <v-btn
              router
              to="/welcome"
              color="purple darken-3"
              large
              rounded
              dark
              block
              class="ml-2"
            >Join now</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet height="30"></v-sheet>
    <v-sheet class="sheet2 mt-12" min-height="500" id="sheetGif">
      <v-container>
        <v-row class="mt-8">
          <v-col cols="12" md="6" sm="12">
            <v-card flat class="mx-auto disc">
              <v-card-text class="mb-3 blue-grey--text body-1 mt-5">
                <h1>Learn How To Trade</h1>
                <br />Effective training on how to trade. Professional analysis and support 24/7.
                We've taught more than 150,000 traders. You can join us too! Major & Minor
                Currencies. Free Demo Account. Stock & Forex Trading. MetaTrader 4 & 5.
                For Beginners & Experts. 20 Years Of Experience.
              </v-card-text>
              <!-- <v-card-text style="text-align: center !important;" class="ml-n-5">
                <v-icon size="100" color="pink darken-2">{{ speedIcon2 }}</v-icon>
                <span class="purple--text font-weight-bold" style="font-size: 2rem !important;">221</span>
              </v-card-text>-->
            </v-card>
            <v-row>
              <v-col cols="12" md="6" sm="12">
                  <!-- <v-btn router to="/tutorials" large ripple outlined color="purple darken-4">
                    Buy trading Tutorials
                    <v-icon right>{{ speedIcon1 }}</v-icon>
                  </v-btn> -->
              </v-col>

              <v-col cols="12" md="6" sm="12">
                <v-btn @click="security" large dark color="purple darken-4" class="ml-2 hidden-md-and-down">
                  <v-icon left>{{ findIcon }}</v-icon>Start Trading
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6" sm="12" id="tradeGif">
              <v-container>
                  <v-img src="@/assets/head.gif"></v-img>
              </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet class="mt-8 mb-12" min-height="550">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="6" sm="12">
                    <v-card class="mx-auto text-left" elevation="0">
                        <v-card-text>
                            <div class="display-1">
                                <span class="font-weight-bold">Explore an ever-expanding variety of cryptocurrencies,</span> 
                                <span class="font-weight-light">
                                    and buy and sell the underlying asset on SparkTrade’s Cryptocurrency Trading Platform. 
                                    Build your crypto-based portfolio and enjoy benefits not offered by most exchanges, 
                                    such as near-immediate execution of market orders.
                                </span>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn router to="/dashboard" outlined color="purple" large class="ml-2 mt-2">Explore Cryptocurrencies</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-container>
                        <v-img
                         src="@/assets/bit.svg"
                        ></v-img>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
    <v-sheet height="50"></v-sheet>

    <v-sheet class="mx-auto" id="user" width="100%">
        <v-slide-group 
            show-arrows
        >
            <v-slide-item>
                <v-container>
                    <v-card id="userRemark" class="mx-auto" elevation="5" height="300" max-width="400">
                        <v-container>
                            <v-card-title class="title font-weight-medium headComment">Very nice, keep it up</v-card-title>
                            <v-card-text class="body-1 font-weight-light">
                                I am satisfied with the services SparkTrade platform provides
                            </v-card-text>
                            <v-card-actions>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-avatar size="50">
                                            <v-img
                                                src="https://images.unsplash.com/photo-1530649298728-6dbb4c3f5bc8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=piotr-wilk-LcCvM4vZEyg-unsplash.jpg&w=640" 
                                            ></v-img>
                                        </v-avatar>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <div class="blockquote">Alexis</div>
                                        <div class="text-center">
                                            <v-rating size="35" color="amber darken-2" v-model="rating"></v-rating>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-container>
                    </v-card>
                </v-container>
            </v-slide-item>

            <v-slide-item>
                <v-container>
                    <v-card id="userRemark" class="mx-auto" height="300" elevation="5" max-width="400">
                        <v-container>
                            <v-card-title class="title font-weight-medium headComment">Sparktrade is great</v-card-title>
                            <v-card-text class="body-1 font-weight-light">
                                Sparktrade  is a fantastic  trading  platform,  both from and  ease of use  and technical  perspective.
                            </v-card-text>
                            <v-card-actions>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-avatar size="50">
                                            <v-img
                                                src="https://images.unsplash.com/photo-1590086782974-e6e7b85e738e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=ludovic-migneault-B9YbNbaemMI-unsplash.jpg&w=640" 
                                            ></v-img>
                                        </v-avatar>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <div class="blockquote">Michael</div>
                                        <div class="text-center">
                                            <v-rating size="35" color="amber darken-2" v-model="rating"></v-rating>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-container>
                    </v-card>
                </v-container>
            </v-slide-item>

            <v-slide-item>
                <v-container>
                    <v-card id="userRemark" class="mx-auto" height="300" elevation="5" max-width="400">
                        <v-container>
                            <v-card-title class="title font-weight-medium headComment">It's been a pleasure trading with Sparktrade</v-card-title>
                            <v-card-text class="body-1 font-weight-light">
                                SparkTrade has been making my trading experience  enjoyable and secure
                            </v-card-text>
                            <v-card-actions>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-avatar size="50">
                                            <v-img
                                                src="https://randomuser.me/api/portraits/women/75.jpg" 
                                            ></v-img>
                                        </v-avatar>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <div class="blockquote">Sofia</div>
                                        <div class="text-center">
                                            <v-rating size="35" color="amber darken-2" v-model="rating"></v-rating>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-container>
                    </v-card>
                </v-container>
            </v-slide-item>

            <v-slide-item>
                <v-container>
                    <v-card id="userRemark" class="mx-auto" height="300" elevation="5" max-width="400">
                        <v-container>
                            <v-card-title class="title font-weight-medium headComment">Easy and fun</v-card-title>
                            <v-card-text class="body-1 font-weight-light">
                                Great  platform for starting traders. Great selection and  transparent fee system
                            </v-card-text>
                            <v-card-actions>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-avatar size="50">
                                            <v-img
                                                src="https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jackson-schaal-AR9mvykzSOA-unsplash.jpg&w=640" 
                                            ></v-img>
                                        </v-avatar>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <div class="blockquote">Charles</div>
                                        <div class="text-center">
                                            <v-rating size="35" color="amber darken-2" v-model="rating"></v-rating>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-container>
                    </v-card>
                </v-container>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>

    <v-sheet height="50"></v-sheet>
    
    <v-sheet class="account white lighten-5">
      <v-container>
        <h5 class="text-center title" id="join">Join us at Sparktrade</h5>
        <v-card-text style="text-align: center !important;" class="body-1">
          Create an account to begin
          <v-container>
            <v-btn @click="security" dark large rounded color="purple darken-2">Start Trading</v-btn>
          </v-container>
        </v-card-text>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import { mdiSpeedometerMedium } from "@mdi/js";
import { mdiFindReplace } from "@mdi/js";
import { mdiSpeedometer } from "@mdi/js";
import { mdiHome } from "@mdi/js";
import { mdiNewspaper } from "@mdi/js";
import { mdiChartDonutVariant } from "@mdi/js";
import { mdiBankTransferOut } from "@mdi/js";
import { mdiCart } from "@mdi/js";

//eslint-disable-next-line no-unused-vars
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
];

export default {
    components: {
        
    },
  data() {
    return {
      speedIcon1: mdiSpeedometerMedium,
      speedIcon2: mdiSpeedometer,
      cartIcon: mdiCart,
      findIcon: mdiFindReplace,
      testIcon: mdiHome,
      newsIcon: mdiNewspaper,
      chartIcon: mdiChartDonutVariant,
      transferIcon: mdiBankTransferOut,

      // Sparkline
      fill: true,
      gradient: gradients[3],
      gradients,
      padding: 8,
      radius: 10,
      value: [0, 4, 6, 7, 8, 9, 10, 6, 9, 0],
      width: 2,

      // progress
      active: true,
      height: 7,
      progressValue: 0,
      rating: 4,

      items: [
        {
          name: "Fujinch",
          amount: "$4k",
          investors: 19
        },
        {
          name: "John smith",
          amount: "$100",
          investors: 2180
        },
        {
          name: "Alex00",
          amount: "$4k",
          investors: 120
        },
        {
          name: "PORTO",
          amount: "$21",
          investors: 69
        },
        {
          name: "Veronica",
          amount: "$67",
          investors: 1109
        }
      ]
    };
  },

  methods: {
    downloadApp() {
      alert("Mobile not available at the moment.");
    },

    security() {
      const newState = this.$store.state.payStatus
      if (newState === true) {
        this.$router.replace("/dashboard")
      } else {
        this.$router.replace("/welcome")
      }
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 2.1rem !important;
}

.workText {
  transform: translateY(-2rem) !important;
}
.display-1 {
  font-size: 2.5rem !important;
}
.sheet2 {
  background-color: #edeef8 !important;
  border-radius: 0rem 0rem 0rem 11rem !important;
}
.subBuy {
  font-size: 0.8rem !important;
}
.xrow {
  padding: 0px !important;
  margin: 0px !important;
}
.card3 {
  border-radius: 20px !important;
  background-color: transparent !important;
}
.tradeVolume {
  background-color: #f8eafa;
  margin-top: 7rem !important;
}
.volume {
  transform: translateY(-4rem) !important;
}
.buyBtn {
  font-size: 0.7rem !important;
  color: #1a237e !important;
}
.sellBtn {
  font-size: 0.7rem !important;
}
.buyBtnSub {
  font-size: 0.5rem !important;
  color: #1a237e !important;
}
.sellBtnSub {
  font-size: 0.5rem !important;
}
.disc {
  background-color: transparent !important;
}
.signUp {
  transform: translateY(-1.5rem) !important;
}
.facebook {
  background-color: #3b5998 !important;
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
@media screen and (max-width: 1024px) {
  .funds {
    font-size: 1.2rem !important;
  }
  .account {
    transform: translateZ(-30rem) !important;
  }
  .volume {
    width: 200px !important;
  }
  .headComment {
    font-size: .9rem !important;
  }
  #join {
      margin-top: 40px !important;
  }
  #userRemark {
    height: 450px !important;
    width: 200px !important;
  }
  #spacer {
    height: 400px !important;
  }
  #tradeGif {
      margin-top: -1rem !important;
      margin-bottom: .9rem !important;
  }
  .sheet2 {
    background-color: #edeef8 !important;

    border-radius: 5rem 0rem 5rem 0rem !important;
    }
  #sheetGif {
      height: 700px !important;
  }
}
</style>