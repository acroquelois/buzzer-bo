import Vue from 'vue'

import './styles/quasar.styl'
import lang from 'quasar/lang/fr.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QFile,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QChip,
  Notify
} from 'quasar'

Vue.use(Quasar, {
  config: {notify: { /* Notify defaults */ }},
  components: {
    QLayout,
    QHeader,
    QFile,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QChip
  },
  directives: {
  },
  plugins: {
    Notify
  },
  lang: lang
 })