<template>
    <div>
        <app-bar />

        <v-main>
            <v-container>
                <v-row justify="center">
                    <v-card elevation="0" class="text-center">
                        <p class="display-2 mt-3 indigo--text text--lighten-1">Proceed to dashboard</p>
                    </v-card>
                    <v-container>
                        <v-row justify="center">
                            <v-btn router to="/dashboard" large dark color="purple darken-3" class="mt-12"><v-icon color="white" left>{{ dashIcon  }}</v-icon>Goto Dashboard</v-btn>
                        </v-row>
                    </v-container>
                </v-row>
            </v-container>
        </v-main>
        <footer-app />
    </div>
</template>
    
<script>
import AppBar from '@/components/core/AppBarUser'
import Footer from '@/components/core/Footer'
import { mdiApps } from "@mdi/js"

export default {
    components: {
        'app-bar': AppBar,
        'footer-app': Footer,
    },

    data() {
        return {
            dashIcon: mdiApps,
        }
    },

    created() {

    },

    methods: {

    }
}
</script>