<template>
<div class="background">
    <div class="row q-pa-md q-gutter-sm justify-end">
    <q-btn color="blue" text-color="black" label="Ajouter une question"  @click="choix"  />
</div>
<div class="row justify-center items-center div_max_height">
<q-table
  class="transparent"
  :data="data"
  :columns="columns"
  row-key="name"
>

<q-td slot="body-cell-delete" slot-scope="props" :props="props">
    <q-btn flat icon="delete" color="red" @click="goToViewLog(cell.row)" />
  </q-td>
  <q-td slot="body-cell-edit" slot-scope="props" :props="props">
    <q-btn flat icon="edit" color="green-13" @click="goToViewLog(cell.row)" />
  </q-td>
</q-table>
</div>
</div>
</template>

<script>
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
            columns: [
        {
          name: 'type de la question',
          required: true,
          label: 'Type de la question',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'Intitulé de la question', label: 'Intitulé de la question', field: 'intitulé', align: 'left', sortable: true },
        { name: 'Url de limage', label: 'Url de image', field: 'url', align: 'left' },
        { name: 'edit', label: 'Editer', field: 'edit'},
        { name: 'delete', label: 'Supprimer', field: 'delete'}
      ],
      data: [
        {
          name: 'Gautier coutu',
          intitulé: "toast"
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]

            }
        },
        methods:{
        choix(){
                this.$router.push('/choixf')
            }
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


</style>