<template>
  <div class="background div_max_height_layout">
    <div class="row q-pa-md justify-end">
      <q-btn class="background-green" text-color="white" icon="add" label="Ajouter une question" @click="choix"  />
    </div>
    <div class="row q-mt-xl justify-center">
      <q-table
        class="transparent"
        :data="data"
        :columns="columns"
        row-key="name"
      >
        <q-td slot="body-cell-delete" slot-scope="props" :props="props">
          <q-btn flat icon="delete" color="red" @click="deleteQuestion(props.row.id)" />
        </q-td>
        <q-td slot="body-cell-edit" slot-scope="props" :props="props">
          <q-btn flat icon="edit" color="green-13" @click="updateQuestion(props.row.id,props.row.questionType.id)" />
        </q-td>
      </q-table>
    </div>
  </div>
</template>

<script>
import http from '../api/http'

import {
  Quasar,
  QTable,
  QTh,
  QTr,
  QTd,
  QBtn
} from 'quasar'

    export default {
        name: 'Accueil',

        components: {
        QTable,
        QTh,
        QTr,
        QTd,
        QBtn
        },


        data () {
            return {
              test: [],
              columns: [
                {
                  name: 'questionType',
                  label: 'Type de la question',
                  field: 'questionType',
                  format: val => val.type,
                  align: 'left',
                  sortable: true
                },
                { 
                  name: 'interogation',
                  label: 'Intitulé de la question',
                  field: 'interogation',
                  align: 'left',
                  sortable: true 
                },
                { 
                  name: 'Url de limage',
                  label: 'Url de image', 
                  field: 'url', 
                  align: 'left' 
                },
                { name: 'edit',
                  label: 'Editer',
                  field: 'edit'
                },
                { 
                  name: 'delete',
                  label: 'Supprimer',
                  field: 'delete'
                }
              ],
              data: []
            }
        },
        methods:{
        async deleteQuestion(toDelete){
             await http.delete('question/deletequestion',{params : {id:toDelete}})
                .then( () => {}).catch((e) => { console.log(e)})
             window.location.reload()
        },
        updateQuestion(toEdit,Type){
          if(Type == "TEXTE"){
            this.$router.push({name: 'formulaireqtid', params: { id: toEdit }})
          } else if(Type == "IMAGE"){
            this.$router.push({name: 'formulaireqiid', params: { id: toEdit }})
          } else if(Type == "AUDIO"){
            this.$router.push({name: 'formulaireqaid', params: { id: toEdit }})
          }
        },
        choix(){
                this.$router.push('/choixf')
            }
        },
        async mounted() {
          await http.get('question/getlistquestions')
            .then((result) =>{
                this.data = result.data
            })
        }
    }
</script>

<style>
.background {
    background: url(../assets/background.png) ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: white;
}

thead tr:first-child th {
  background-color:#2D2B2B;
  color:white;
}

tr:nth-child(n+1) {
  background-color: rgba(255,255,255, 0.5);
}

.q-table__bottom{
  background-color: white;
  opacity: 0.7;
}

.background-green{
  background-color: #58dd88 !important;
}

</style>