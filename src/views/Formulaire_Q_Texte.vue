<template>
<div class="div_max_height_layout background">
    <div class="q-pa-xl">
        <q-card flat bordered class="my-card q-ma-xl background-green">
            <q-card-section>
                <div class="text-h6">Formulaire : Question Texte</div>
            </q-card-section>
            <q-separator inset />

            <q-card-section>
                <div class="row q-gutter-sm">
                    <div class="column col">
                        <div class="q-pl-lg text-h7">Question :</div>
                        <q-input class="q-mt-lg" rounded standout v-model="interogation"/>
                        <div class="q-mt-lg q-pl-lg text-h7">Réponse :</div>
                        <q-input class="q-mt-md" rounded standout v-model="reponse"/>
                    </div>
                    <div class="column col">
                        <div class="q-pl-lg text-h7">Propositions :</div>
                        <q-input class="q-mt-lg" rounded standout v-model="proposition1"/>
                        <q-input class="q-mt-lg" rounded standout v-model="proposition2"/>
                        <q-input class="q-mt-lg" rounded standout v-model="proposition3"/>
                    </div>
                </div>
            </q-card-section>
            <q-card-actions>
                <q-btn class="q-ml-md q-mb-md" @click="submit" outline>Envoyer</q-btn>
            </q-card-actions>
        </q-card>
        <!-- <div>
            
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
      </div>-->
    </div>
</div>
</template>

<script>
import http from '../api/http'

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
    name: 'Formulaire_Q_Texte',

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
            interogation : null,
            reponse : null,
            proposition1 : null,
            proposition2 : null,
            proposition3 : null
        }
    },
    methods:{
        submit(){
            try {
                http.post('question/postquestiontexte', 
                {interogation: this.interogation,
                 reponse: 1,
                 questionTypeId : "TEXTE",
                propositions : [
                {proposition : this.proposition1}
                ,{proposition : this.reponse}
                ,{proposition : this.proposition2}
                ,{proposition : this.proposition3}
                ]}).then( () => {}).catch((e) => { console.log(e)})
                this.$router.push('/accueil')
            } catch (e) {
                  console.log(e)
              }
        },
    async mounted(){
        if (this.$route.params.id) {
            const id = this.$route.params.id
            console.log('verif', id)
        }
    }
    }
}
</script>

<style>
.div_max_height{
    min-height: 100vh;
}
</style>
