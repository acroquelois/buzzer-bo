<template>
<div class="row justify-center items-center bg-blue div_max_height">
    <div class="col-3 column q-pa-md bg-white q-gutter-md">
        <div>
            <p>Choix du Formulaire</p>
        </div>
        <div>
            <div>
                <q-btn color="white" class="text-black">Standard</q-btn>
            </div>
            <div>
                <q-btn color="white" class="text-black">Standard</q-btn>
            </div>
             <div>
               <q-btn color="white" class="text-black">Standard</q-btn>
            </div>
        </div>
          <div class="row justify-end">
              <q-btn
              color="black"
              label="Retourner à l'accueil"
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
        submit(){
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
