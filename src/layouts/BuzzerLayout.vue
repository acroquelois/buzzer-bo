<template>
    <q-layout view="lHh Lpr lff" class="default">
        <q-header elevated class="bgcolorstyle">
            <q-toolbar>
                <q-toolbar-title>
                    Buzzer
                </q-toolbar-title>
                <q-btn color="white" text-color="black" class="btn" label="Accueil" @click="menu"/>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <q-page>
                    <router-view></router-view>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
    import {
        QToolbar,
        QLayout,
        QHeader,
        QPage,
        QPageContainer,
    } from 'quasar'

    export default {
        name: 'BuzzerLayout',
        components: {
            QToolbar,
            QLayout,
            QHeader,
            QPage,
            QPageContainer,
        },
        data () {
            return {
            }
        },
        methods:{
            menu(){
                this.$router.push('/accueil')
            }
        }
    }
</script>

<style scoped>
.bgcolorstyle{
    background: #2d2b2b;
}
</style>