<template>
    <div>
        <app-bar />

        <v-main>
            <v-container>
                <v-row justify="center">
                    <v-card elevation="0" class="text-center">
                        <p class="display-2">Proceed to dashboard</p>
                    </v-card>
                    <v-btn router to="/user" large dark color="purple darken-3" class="mt-12">Goto Dashboard</v-btn>
                </v-row>
            </v-container>
        </v-main>
        <footer-app />
    </div>
</template>
    
<script>
import AppBar from '@/components/core/AppBarUser'
import Footer from '@/components/core/Footer'

export default {
    components: {
        'app-bar': AppBar,
        'footer-app': Footer,
    },

    data() {
        return {

        }
    },

    created() {

    },

    methods: {

    }
}
</script>