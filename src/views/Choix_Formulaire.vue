<template>
<div class="row justify-center items-center bg-blue div_max_height">
    <div class="col-3 column q-pa-md bg-white q-gutter-md">
        <div>
            <p>Choix du Formulaire</p>
        </div>
        <div>
            <div>
                <q-btn color="white" class="text-black" @click="fqt">Formulaire Question Texte</q-btn>
            </div>
            <div>
                <q-btn color="white" class="text-black" @click="fqi">Formulaire Question Image</q-btn>
            </div>
             <div>
               <q-btn color="white" class="text-black" @click="fqa">Formulaire Question Audio</q-btn>
            </div>
        </div>
          <div class="row justify-end">
              <q-btn
              color="black"
              label="Retourner à l'accueil"
              @click="accueil"
              />
          </div>
    </div>
</div>
</template>

<script>
import{
    QInput,
    QBtn,
    QUploader
} from 'quasar'
export default {
    name: 'Choix_Formulaire',

    components: {
        QInput,
        QBtn,
        QUploader
    },

    data () {
        return {
        }
    },
    methods:{
        fqt(){
                this.$router.push('/fqt')
            },
        fqi(){
                this.$router.push('/fqi')
            },
        fqa(){
                this.$router.push('/fqa')
            },
        accueil(){
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
