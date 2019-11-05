<template>
<div class="q-pa-md">
<q-table
  title="TABLEAU DE QUESTION"
  :data="data"
  :columns="columns"
  row-key="name"
  dark
  color="amber"
/>
</div>
</template>

<script>
import {
  Quasar,
  QTable,
  QTh,
  QTr,
  QTd
} from 'quasar'

    export default {
        name: 'Accueil',

        components: {
        QTable,
        QTh,
        QTr,
        QTd
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
        { name: 'reponse', label: 'Réponse', field: 'reponse', align: 'left' },
        { name: 'actions', label: 'Actions', align: 'left' }
      ],
      data: [
        {
          name: 'Notissimus',
          intitulé: "Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus",
          reponse: 'Inplorans subsidia'
        },
        {
          name: 'Notissimus',
          intitulé: "Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus",
          reponse: 'Inplorans subsidia'
        },
        {
          name: 'Notissimus',
          intitulé: "Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus",
          reponse: 'Inplorans subsidia'
        },
        {
          name: 'Notissimus',
          intitulé: "Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus",
          reponse: 'Inplorans subsidia'
        },
        {
          name: 'Notissimus',
          intitulé: "Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus",
          reponse: 'Inplorans subsidia'
        },
        {
          name: 'Notissimus',
          intitulé: "Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus",
          reponse: 'Inplorans subsidia'
        },
        {
          name: 'Notissimus',
          intitulé: "Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus",
          reponse: 'Inplorans subsidia'
        },
        {
          name: 'Notissimus',
          intitulé: "Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus",
          reponse: 'Inplorans subsidia'
        },
        {
          name: 'Notissimus',
          intitulé: "Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus",
          reponse: 'Inplorans subsidia'
        },
        {
          name: 'Notissimus',
          intitulé: "Inter has ruinarum varietates a Nisibi quam tuebatur accitus Vrsicinus",
          reponse: 'Inplorans subsidia'
        }
      ]

            }
        }
    }
</script>

<style>

</style>
