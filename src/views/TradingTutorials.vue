<template>
    <div>
        <app-bar />
        <v-main>
            <v-sheet height="200">
                <v-container>
                    <v-row justify="center">
                        <h1>Tutorials not available at the moment</h1>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-main>
        <footer-app />
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue';
import Footer from '@/components/core/Footer.vue';


export default {
    components: {
        'app-bar': AppBar,
        'footer-app': Footer,
    }
}
</script>