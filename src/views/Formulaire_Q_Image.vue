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
                    <div class="column col" v-if="!question.mediaQuestions">
                        <div class="q-pl-lg text-h7">Images :</div>
                        <q-file class="q-mt-lg" bottom-slots v-model="image1" label="Zoom 1" rounded standout>
                            <template v-slot:prepend>
                            <q-icon name="cloud_upload" @click.stop />
                            </template>
                            <template v-slot:append>
                            <q-icon name="close" @click.stop="image1 = null" class="cursor-pointer" />
                            </template>
                        </q-file>
                        <q-file class="q-mt-sm" bottom-slots v-model="image2" label="Zoom 2" rounded standout>
                            <template v-slot:prepend>
                                <q-icon name="cloud_upload" @click.stop />
                            </template>
                            <template v-slot:append>
                                <q-icon name="close" @click.stop="image2 = null" class="cursor-pointer" />
                            </template>
                        </q-file>
                        <q-file class="q-mt-sm" bottom-slots v-model="image3" label="Zoom 3" rounded standout>
                            <template v-slot:prepend>
                                <q-icon name="cloud_upload" @click.stop />
                            </template>
                            <template v-slot:append>
                                <q-icon name="close" @click.stop="image3 = null" class="cursor-pointer" />
                            </template>
                        </q-file>
                    </div>
                    <div class="column col" v-else>
                        <div class="q-pl-lg text-h7">Images :</div>
                        <q-chip class="q-pa-md q-mt-lg sizeSpanChip" v-for="(image, index) in question.mediaQuestions" :key="index"
                            clickable
                            removable
                            rounded 
                            standout
                            @click="download(image)"
                        >
                            {{ image.url }}
                        </q-chip>
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
import {FORCE_DOWNLOAD} from "../mixins/Mixins";

import{
    QInput,
    QCard,
    QSeparator,
    QCardSection,
    QCardActions,
    QBtn,
    QFile,
    QUploader,
    QChip
} from 'quasar'
export default {
    name: 'Formulaire_Q_Image',
    mixins:[FORCE_DOWNLOAD],
    components: {
        QInput,
        QCard,
        QSeparator,
        QCardSection,
        QCardActions,
        QBtn,
        QFile,
        QUploader,
        QChip
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
            },
            image1: null,
            image2: null,
            image3: null
        }
    },
    methods:{
        createQuestion(question, images){
            var bodyFormData = new FormData();
            bodyFormData.append('question', JSON.stringify(question));
            images.forEach(image => {
            bodyFormData.append('file', image);   
            });
            axios({
                method: 'post',
                url: `${URL_API}question/postquestion/image`,
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
         updateQuestion(question, images){
            var bodyFormData = new FormData();
            bodyFormData.append('question', JSON.stringify(question));
            images.forEach(image => {
            bodyFormData.append('file', image);   
            });
            axios({
                method: 'post',
                url: `${URL_API}question/postquestion/image`,
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
                this.updateQuestion(this.question, [this.image1, this.image2, this.image3]) 
            }else{
                this.createQuestion(this.question, [this.image1, this.image2, this.image3])
            }
            this.$router.push('/accueil')
        },
        download(file) {
            console.log('file', file)
            axios.get(file.url, {
                responseType: 'arraybuffer'
            })
            .then(response => {
                let randomName = Math.random().toString(36).substring(7)
                this.forceFileDownload(response, `${randomName}.jpg`)
            })
            .catch(e =>{
                console.log(e)
            })
        },
    },
    mounted(){
        if (this.$route.params.id) {
            const id = this.$route.params.id
            http.get(`question/getquestionimage/${id}`)
                .then((ret) => {
                    this.question = ret.data;
                    console.log('data', ret.data)
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

.sizeSpanChip{
    max-width: 180px; 
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #1F8EE7 !important;
}
</style>
