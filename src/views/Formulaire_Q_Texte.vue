<template>
<div class="row justify-center items-center bg-blue div_max_height">
    <div class="col-3 column q-pa-md bg-white q-gutter-md">
        <div>
            <p>Formulaire : Question Texte</p>
        </div>
        <div>
            <div>
                <q-input
                v-model="title"
                label="Intitulé de la question"
                stack-label
                />
            </div>
          <div>
            <div>
              <q-input
              v-model="answer"
              label="Fausse réponse 1"
              stack-label
              />
          </div>
          <div>
              <q-input
              v-model="answer"
              label="Fausse réponse 2"
              stack-label
              />
          </div>
          <div>
              <q-input
              v-model="answer"
              label="Fausse réponse 3"
              stack-label
              />
          </div>
            <div>
                <q-input
                v-model="answer"
                label="Bonne Réponse"
                stack-label
                />
            </div>
            <div class="row justify-end">
                <q-btn
                color="black"
                label="Soumettre"
                @click="submit"
                />
            </div>
        </div>
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
    name: 'Formulaire_Q_Texte',

    components: {
        QInput,
        QBtn,
        QUploader
    },

    data () {
        return {
            answer: null
        }
    },
    methods:{
        submit(){
            this.$router.push('/accueil')
        }
    },
    mounted() {
        console.log('page2', localStorage.test)
    },
}
</script>

<style>
.div_max_height{
    min-height: 100vh;
}
</style>
