<template>
    <div>
        <app-bar />
        <v-main>
            <v-sheet>
                <v-container>
                    <v-row justify="center">
                        <v-card class="text-center" width="50%">
                            <v-container>
                                <v-card-title class="title indigo--text">Purchase Our eTrading E-books Tutorials</v-card-title>
                                <v-container>
                                    <v-card-text>These E-book will show detail guidelines of how to trade on SpakTrade.</v-card-text>
                                </v-container>

                                <v-row justify="center">
                                    <v-col cols="12" md="12" sm="12">
                                        <v-row>
                                            <v-icon color="red darken-3" class="ml-2" size="50">{{ pdfIcon }}</v-icon>
                                            <span class="font-weight-medium mt-3 ml-3 body-1">Ebook 1</span>
                                            <span><v-btn @click="download1" dark rounded color="green darken-2" class="ml-4">download</v-btn></span>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-row>
                                            <v-icon color="red darken-3" class="ml-2" size="50">{{ pdfIcon }}</v-icon>
                                            <span class="font-weight-medium mt-3 ml-3 body-1">Ebook 2</span>
                                            <span><v-btn dark rounded color="green darken-2" class="ml-4">download</v-btn></span>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-row>
                                            <v-icon color="red darken-3" class="ml-2" size="50">{{ pdfIcon }}</v-icon>
                                            <span class="font-weight-medium mt-3 ml-3 body-1">Ebook 3</span>
                                            <span><v-btn dark rounded color="green darken-2" class="ml-4">download</v-btn></span>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-row>
                                            <v-icon color="red darken-3" class="ml-2" size="50">{{ pdfIcon }}</v-icon>
                                            <span class="font-weight-medium mt-3 ml-3 body-1">Ebook 4</span>
                                            <span><v-btn dark rounded color="green darken-2" class="ml-4">download</v-btn></span>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-row>
                                            <v-icon color="red darken-3" class="ml-2" size="50">{{ pdfIcon }}</v-icon>
                                            <span class="font-weight-medium mt-3 ml-3 body-1">Ebook 5</span>
                                            <span><v-btn dark rounded color="green darken-2" class="ml-4">download</v-btn></span>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-row>
                                            <v-icon color="red darken-3" class="ml-2" size="50">{{ pdfIcon }}</v-icon>
                                            <span class="font-weight-medium mt-3 ml-3 body-1">Ebook 6</span>
                                            <span><v-btn dark rounded color="green darken-2" class="ml-4">download</v-btn></span>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-row>
                                            <v-icon color="red darken-3" class="ml-2" size="50">{{ pdfIcon }}</v-icon>
                                            <span class="font-weight-medium mt-3 ml-3 body-1">Ebook 7</span>
                                            <span><v-btn dark rounded color="green darken-2" class="ml-4">download</v-btn></span>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-row>
                                            <v-icon color="red darken-3" class="ml-2" size="50">{{ pdfIcon }}</v-icon>
                                            <span class="font-weight-medium mt-3 ml-3 body-1">Ebook 8</span>
                                            <span><v-btn dark rounded color="green darken-2" class="ml-4">download</v-btn></span>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="12" sm="12">
                                        <v-row>
                                            <v-icon color="red darken-3" class="ml-2" size="50">{{ pdfIcon }}</v-icon>
                                            <span class="font-weight-medium mt-3 ml-3 body-1">Ebook 9</span>
                                            <span><v-btn dark rounded color="green darken-2" class="ml-4">download</v-btn></span>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-main><br><br>
        <footer-app />
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue';
import Footer from '@/components/core/Footer.vue';
import { mdiPdfBox } from '@mdi/js';
const download = require('downloadjs')
// import { mdiPdfBox } from '@mdi/js';
// const fs = require('fs')
// const request = require('request')

// const url = ""
// const path = '../../assets/docs/Trade Ebook.pdf'

// const download = (url, path, callback) => {
//     request.head(url, (err, res, body) => {
//         console.log(err, res, body)
//         request(url)
//             .pipe(fs.createWriteStream(path))
//             .on('close', callback)
//     })
// }


export default {
    components: {
        'app-bar': AppBar,
        'footer-app': Footer,
    },
    data() {
        return {
            pdfIcon: mdiPdfBox,
        }
    },

    methods: {
        download1() {
            download('../assets/docs/Brand_Guildine.pdf')
        },
        download2() {
            download('../assets/docs/Andrew_Robinson_bio_final.docx')
        },
        download3() {
            download('../assets/docs/MPAlfonsoBio.docx')
        },
        download4() {
            download('../assets/docs/MPCraigBio.docx')
        },
        download5() {
            download('../assets/docs/MPJeffreyBio.docx')
        },
        download6() {
            download('../assets/docs/SpakTrade_Ed_Moya_bio.docx')
        },
        download7() {
            download('../assets/docs/SpakTrade_Boilerplate.docx.zipx')
        },
        download8() {
            download('../assets/docs/SpakTrade_Boilerplate.docx')
        },
        download9() {
            download('../assets/docs/Brand_Guildine.pdf')
        },
        
    }

}
</script>