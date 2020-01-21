<template>
<div class="row justify-center items-center div_max_height background">
    <div class="col-3 column q-pa-md bg-white q-gutter-md">
        <div>
            <p>Formulaire : Question Image</p>
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
                <q-uploader
                    url="http://localhost:8080/upload"
                    label="Image 1"
                    color="blue"
                    square
                    flat
                    bordered
                    style="max-width: 300px"
                />
            </div>
            <div>
                <q-uploader
                    url="http://localhost:8080/upload"
                    label="Image 2"
                    color="blue"
                    square
                    flat
                    bordered
                    style="max-width: 300px"
                    />
            </div>
        </div>
        <div>
              <q-uploader
                 url="http://localhost:8080/upload"
                 label="Image 3"
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
    name: 'Formulaire_Q_Image',

    components: {
        QInput,
        QBtn,
        QUploader
    },

    data () {
        return {
            title: 'Que représente cette image ?',
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
