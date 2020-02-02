<template>
<div class="div_max_height_layout background">
    <div class="q-pa-xl">
        <q-card flat bordered class="my-card q-ma-xl bg-blue">
            <q-card-section>
                <div class="text-h6">Formulaire : Question Image</div>
            </q-card-section>
            <q-separator inset />

            <q-card-section>
                <div class="row q-gutter-sm">
                    <div class="column col">
                        <div class="q-pl-lg text-h7">Intitulé de la question :</div>
                        <q-input v-model="question.interogation" class="q-mt-lg" rounded standout/>
                        <div class="q-mt-lg q-pl-lg text-h7">Réponse :</div>
                        <q-input v-model="question.reponse.reponse" class="q-mt-md" rounded standout />
                    </div>
                    <div class="column col q-pl-xl">
                        <div class="q-pl-lg text-h7">Image dézoomée :</div>
                        <q-uploader color="blue"/>
                        <div class="q-pl-lg text-h7">Image zoom 1 :</div>
                        <q-uploader color="blue"/>
                        <div class="q-pl-lg text-h7">Image zoom 2 :</div>
                        <q-uploader color="blue"/>
                    </div>
                </div>
            </q-card-section>
            <q-card-actions>
                <q-btn class="q-ml-md q-mb-md" outline rounded>Envoyer</q-btn>
            </q-card-actions>

            </q-card>
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
    name: 'Formulaire_Q_Image',

    components: {
        QInput,
        QCard,
        QSeparator,
        QCardSection,
        QCardActions,
        QBtn,
        QUploader
    },

    data () {
        return {
            title: 'Que représente cette image ?',
            answer: null,
            question:{
                interogation : null,
                questionType :{
                    id: "IMAGE"
                },
                reponse:{
                    reponse: null
                },
            }
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
