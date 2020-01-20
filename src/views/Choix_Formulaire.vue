<template>
    <div class="row justify-center items-center div_max_height background">
        <div class="choice">
                <q-btn class="texte" @click="fqt" align="between" icon="description">Formulaire Question Texte</q-btn>
                <q-btn class="image" @click="fqi" align="between" icon="insert_photo">Formulaire Question Image</q-btn>
                <q-btn class="audio" @click="fqa" align="between" icon="volume_up">Formulaire Question Audio</q-btn>
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
        fqt(){
                this.$router.push('/fqt')
            },
        fqi(){
                this.$router.push('/fqi')
            },
        fqa(){
                this.$router.push('/fqa')
            }
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
    margin: 10em 10em 10em;
    background-color: #58dd88;
    box-shadow: none;
    width: 270px;
    height: 70px;
}

.choice .image {
    margin: 10em 10em 10em;
    background-color: #60bbef;
    box-shadow: none;
    width: 270px;
    height: 70px;
}


.choice .audio {
    margin: 10em 10em 10em;
    background-color: #ff840e;
    box-shadow: none;
    width: 270px;
    height: 70px;
}
</style>    