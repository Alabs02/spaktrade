<template>
  <v-footer
    dark
    padless  
    id="footer"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  >
    <v-card
      flat
      tile
      class="grey darken-4 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <br>
Trading spot currencies involves substantial risk and there is always the potential for loss. Your trading results may vary. Because the risk factor is high in the foreign exchange market trading, only genuine "risk" funds should be used in such trading. If you do not have the extra capital that you can afford to lose, you should not trade in the foreign exchange market. No "safe" trading system has ever been devised, and no one can guarantee profits or freedom from loss. Past performance is not indicative of future results.

Forex Brokers and SparkTrade are compensated for their services through the spread between the bid/ask prices or there may be a cost to initiate a trade through the bid/ask spread. Profit sharing accounts are subject to a monthly subscription fee and a monthly performance fee per selected trading system.

Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. In fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program.

One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. In addition, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk in actual trading. For example, the ability to withstand losses or to adhere to a particular trading program in spite of trading losses are material points which can also adversely affect actual trading results. There are numerous other factors related to the markets in general or to the implementation of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results and all of which can adversely affect actual trading results. Please click here to see full disclaimer.
      </v-card-text>

      <v-container>
        <v-row justify="center">
            <v-col cols="12" md="6" sm="12">
                <v-list disabled class="grey darken-3 listz">
                    <v-card-title class="text-center font-weight-bold" style="text-align: center !important;">Connect</v-card-title>
                    <v-card-text style="text-align: left !important;">
                        Join the Social Trading revolution. Connect with other traders, discuss trading strategies, and 
                        use our patented CopyTrader™ technology to automatically copy their trading portfolio performance.
                    </v-card-text>
                </v-list>
            </v-col>

            <v-col cols="12" md="5" sm="12">
                <v-sheet color="grey darken-4">
                    <v-form>
                        <v-text-field
                        label="Contact Us"
                        outlined
                        rounded
                        solo-inverted
                        color="purple"
                        ></v-text-field>
                    </v-form>
                </v-sheet>

                <v-btn color="purple" >send <v-icon right>{{ sendIcon }}</v-icon></v-btn>
            </v-col>
        </v-row>
    </v-container>

      <v-divider></v-divider>

      <v-card-text class="white--text purple darken-4">
        {{ new Date().getFullYear() }} — <span class="ml-2" id="footer-text"> All Rights reserved ®</span>  <span><strong class="overline">spark trade</strong></span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
import { mdiSendCircleOutline } from "@mdi/js";

  export default {
    data: () => ({
        sendIcon: mdiSendCircleOutline,
        icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
        ],
        footerItems: [
            { text: "Lorem Ipsum Dolor", icon: mdiSendCircleOutline },
            { text: "Lorem Ipsum Dolor", icon: mdiSendCircleOutline },
            { text: "Lorem Ipsum Dolor", icon: mdiSendCircleOutline },
            { text: "Lorem Ipsum Dolor", icon: mdiSendCircleOutline },
            { text: "Lorem Ipsum Dolor", icon: mdiSendCircleOutline },
        ]
    }),
  }
</script>

<style scoped>
    #footer-text {
        text-transform: capitalize !important;
    }
    .listz {
        border-radius: 2rem 0rem 2rem 0rem !important;
    }
    #footer {
      z-index: 12 !important;
    }
</style>