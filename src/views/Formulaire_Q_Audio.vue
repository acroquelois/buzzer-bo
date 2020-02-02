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
                        <q-input v-model="question.interogation" class="q-mt-lg" rounded standout/>
                        <div class="q-mt-lg q-pl-lg text-h7">Réponse :</div>
                        <q-input v-model="question.reponse.reponse" class="q-mt-md" rounded standout />
                    </div>
                    <div class="column col q-pl-xl">
                        <div class="q-pl-lg text-h7">Audio :</div>
                        <q-file class="q-mt-lg" bottom-slots v-model="audio" label="Audio" rounded standout>
                            <template v-slot:prepend>
                            <q-icon name="cloud_upload" @click.stop />
                            </template>
                            <template v-slot:append>
                            <q-icon name="close" @click.stop="audio = null" class="cursor-pointer" />
                            </template>
                        </q-file>
                    </div>
                </div>
            </q-card-section>
            <q-card-actions>
                <q-btn class="q-ml-md q-mb-md" outline @click="submit">Envoyer</q-btn>
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
            answer: null,
            question:{
                interogation : null,
                questionType :{
                    id: "AUDIO"
                },
                reponse:{
                    reponse: null
                },
            },
            audio: null
        }
    },
    methods:{
         createQuestion(question, audio){
            var bodyFormData = new FormData();
            bodyFormData.append('question', JSON.stringify(question));
            bodyFormData.append('file', audio);   
            axios({
                method: 'post',
                url: `${URL_API}question/postquestion/audio`,
                data: bodyFormData,
                headers: {'Content-Type': 'multipart/form-data' }
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
            });
        },
        updateQuestion(question, audio){
            var bodyFormData = new FormData();
            bodyFormData.append('question', JSON.stringify(question));
            bodyFormData.append('file', audio);   
            axios({
                method: 'post',
                url: `${URL_API}question/postquestion/audio`,
                data: bodyFormData,
                headers: {'Content-Type': 'multipart/form-data' }
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
            });
        },
        submit(){
            if (this.$route.params.id) {
                this.updateQuestion(this.question, this.audio)
            }else{
                this.createQuestion(this.question, this.audio)
            }
            this.$router.push('/accueil')
        }
    },
    mounted(){
        if (this.$route.params.id) {
            const id = this.$route.params.id
            http.get(`question/getquestionimage/${id}`)
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
