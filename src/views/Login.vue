<template>
    <div class="row justify-center items-center bg-blue div_max_height">
        <div class="col-3 column q-pa-md bg-white q-gutter-md">
            <div>
                <q-input
                v-model="username"
                label="Nom d'utilisateur"
                stack-label
                />
            </div>
            <div>
                <q-input
                v-model="password"
                label="Mot de passe"
                stack-label
                />
            </div>
            <div class="row justify-end">
                <q-btn 
                color="black" 
                label="Connexion"
                @click="connexion"
                />
            </div>
            
        </div>
    </div>
</template>

<script>
    import{
        QInput,
        QBtn,
    } from 'quasar'
    export default {
        name: 'Login',

        components: {
            QInput,
            QBtn
        },

        data () {
            return {
                username: null,
                password: null
            }
        },
        methods:{
            connexion(){
                this.$router.push('/accueil')
            }
        }
    }
</script>

<style>
.div_max_height{
    min-height: 100vh;
}
</style>