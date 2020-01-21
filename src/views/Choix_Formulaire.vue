<template>
    <div class="div_max_height_layout items-center background">
        <div class="row col-12 q-pa-xl choice justify-between">
            <q-btn class="texte q-pa-xl" @click="fqt" align="between" icon="description">Formulaire Question Texte</q-btn>
            <q-btn class="image q-pa-xl" @click="fqi" align="between" icon="insert_photo">Formulaire Question Image</q-btn>
            <q-btn class="audio q-pa-xl" @click="fqa" align="between" icon="volume_up">Formulaire Question Audio</q-btn>
        </div>
    </div>
</template>

<script>
import http from '../api/http'
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
            test: "test local storage"
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
            }
    },
    mounted(){
    }
}
</script>

<style>
.div_max_height{
    min-height: 100vh;
}

.background {
    background: url(../assets/background.png) ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: white;
}

.choice {
    background-color:rgba(255, 255, 255, 0);
}

.choice .texte {
    background-color: #58dd88;
    box-shadow: none;
}

.choice .image {
    background-color: #60bbef;
    box-shadow: none;
}


.choice .audio {
    background-color: #ff840e;
    box-shadow: none;
}
</style>    