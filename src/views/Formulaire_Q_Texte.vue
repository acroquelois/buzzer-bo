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
                        <q-input class="q-mt-lg" rounded standout v-model="question.interogation" placeholder="Question"/>
                        <div class="q-mt-lg q-pl-lg text-h7">Réponse :</div>
                        <q-input 
                        class="q-mt-md" 
                        rounded 
                        standout 
                        v-model="question.reponse.reponse"
                        placeholder="Réponse"
                        />
                    </div>
                    <div class="column col">
                        <div class="q-pl-lg text-h7">Propositions :</div>
                        <q-input 
                        class="q-mt-lg" 
                        v-for="(proposition, index) in this.question.propositions" 
                        :key="index"
                        rounded 
                        standout 
                        v-model="proposition.proposition"
                        placeholder="Proposition"
                        />
                    </div>
                </div>
            </q-card-section>
            <q-card-actions>
                <q-btn class="q-ml-md q-mb-md" @click="submit" outline>Envoyer</q-btn>
            </q-card-actions>
        </q-card>
    </div>
</div>
</template>

<script>
import http from '../api/http'
import {URL_API} from '../constants/constant'

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
            question:{
                interogation : null,
                questionType :{
                    id: "TEXTE"
                },
                propositions: [],
                reponse:{
                    reponse: null
                },
                propositions:[
                    {
                        proposition: null,
                    },
                    {   
                        proposition: null,
                    },
                    {   
                        proposition: null,
                    }
                ]
            }
        }
    },
    methods:{
        createQuestion(question){
            var bodyFormData = new FormData();
            bodyFormData.append('question', JSON.stringify(question));
            axios({
                method: 'post',
                url: `${URL_API}question/postquestion/texte`,
                data: bodyFormData,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(() => {
                this.$q.notify({
                    color: 'positive',
                    textColor: 'white',
                    icon: 'done',
                    message: "La question a été crée avec succès"
                })
            }).catch(() => {
                this.$q.notify({
                    color: 'negative',
                    textColor: 'white',
                    icon: 'warning',
                    message: "Impossible de créer la question"
                })
            })
        },
        updateQuestion(question){
            var bodyFormData = new FormData();
            bodyFormData.append('question', JSON.stringify(question));
            axios({
                method: 'post',
                url: `${URL_API}question/updatequestion/texte`,
                data: bodyFormData,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(() => {
                this.$q.notify({
                    color: 'positive',
                    textColor: 'white',
                    icon: 'done',
                    message: "La question a été modifiée avec succès"
                })
            }).catch(() => {
                this.$q.notify({
                    color: 'negative',
                    textColor: 'white',
                    icon: 'warning',
                    message: "Impossible de modifier la question"
                })
            })
        },
        submit(){
            if (this.$route.params.id) {
                this.updateQuestion(this.question) 
            }else{
                this.createQuestion(this.question) 
            }
            this.$router.push('/accueil')
        }
    },
    mounted(){
        if (this.$route.params.id) {
            const id = this.$route.params.id
            http.get(`question/getquestiontexte/${id}`)
                .then((ret) => {
                    this.question = ret.data;
                })
                .catch((err) =>{
                    console.log('err', err)
                })
        }
    }
}
</script>

<style>
.div_max_height{
    min-height: 100vh;
}
</style>
