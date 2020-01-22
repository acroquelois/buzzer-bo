<template>
<div class="div_max_height_layout background">
    <div class="q-pa-xl">
        <q-card flat bordered class="my-card q-ma-xl bg-orange">
            <q-card-section>
                <div class="text-h6">Formulaire : Question Audio</div>
            </q-card-section>
            <q-separator inset />

            <q-card-section>
                <div class="row q-gutter-sm">
                    <div class="column col">
                        <div class="q-pl-lg text-h7">Intitulé de la question :</div>
                        <q-input class="q-mt-lg" rounded standout placeholder="Exemple" />
                        <div class="q-mt-lg q-pl-lg text-h7">Réponse :</div>
                        <q-input class="q-mt-md" rounded standout placeholder="Exemple" />
                    </div>
                    <div class="column col q-pl-xl">
                        <div class="q-pl-lg text-h7">Audio :</div>
                        <q-uploader class="" color="orange"/>
                    </div>
                </div>
            </q-card-section>
            <q-card-actions>
                <q-btn class="q-ml-md q-mb-md" outline rounded>Envoyer</q-btn>
            </q-card-actions>

            </q-card>
        <!--<div>
            <div>
                <q-input
                v-model="title"
                label="Intitulé de la question"
                stack-label
                />
            </div>
            <div>
                <q-uploader
                    url="http://localhost:8080/upload"
                    label="Piste audio"
                    color="blue"
                    square
                    flat
                    bordered
                    style="max-width: 300px"
                />
            </div>
          <div>
          <div>
              <q-input
              v-model="answer"
              label="Réponse"
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
      </div>-->
    </div>
</div>
</template>

<script>
import{
    QInput,
    QCard,
    QSeparator,
    QCardSection,
    QCardActions,
    QBtn,
    QUploader
} from 'quasar'
export default {
    name: 'Formulaire_Q_Audio',

    components: {
        QInput,
        QBtn,
        QUploader,
        QSeparator,
        QCard,
        QCardSection,
        QCardActions,
    },

    data () {
        return {
            title: 'Quelle est cette musique ?',
            answer: null
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
