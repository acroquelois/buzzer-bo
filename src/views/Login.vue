<template>
    <div class="row justify-center items-center div_max_height background">
        <div class="log">
            <div class="pic">
              <img src="../assets/log_pic.png" alt="logpic">
              <p>LOGIN</p>
            </div>
            <div class="user">
                <q-input color="white" v-model="usernam" label="Nom d'utilisateur">
                  <template v-slot:prepend>
                    <q-avatar>
                      <img src="../assets/user.png"/>
                    </q-avatar>
                  </template>
                </q-input>
            </div>
            <div class="password">
                <q-input color="white" v-model="password" label="Mot de passe">
                  <template v-slot:prepend>
                    <img src="../assets/user.png"/>
                  </template>
                </q-input>
            </div>
            <div class="row justify-center">
                <q-btn class="btn"
                label="Login"
                @click="connexion"
                />
            </div>
            <div class="reset">
              <a href="#">reset password</a>
            </div>
        </div>
    </div>
</template>

<script>
    import{
        QInput,
        QBtn,
    } from 'quasar'
    export default {
        name: 'Login',

        components: {
            QInput,
            QBtn
        },

        data () {
            return {
                username: null,
                password: null
            }
        },
        methods:{
            connexion(){
                this.$router.push('/accueil')
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

.log {
    background-color: #58dd88;
    height: 464px;
    width: 324px;
    color: white;
    border-radius: 20px;
    text-align: center;
    padding: 2em 3em 2em;
}

.log img {
  height: 64px;
  margin: 1em;
}

.log .btn {
  margin: 3em 0em 4em;
  background-color: white;
  color: black;
  border-radius: 20px;
  font-weight: 300;
  box-shadow: none;
  width: 93px;
}

.log .reset a {
  color: white;
  text-decoration: none;
}

.log p{
  font-size: 1.4em;

}

.log .user img {
  height: 10px;
}

.log .password img {
  height: 10px;
}

.q-field--standard .q-field__control::before {
    border-bottom: 1px solid rgba(1,1,1,1.24);
    transition: border-color 0.36s cubic-bezier(1, 1, 1, 1);
}

.q-btn--rectangle {
    border-radius: 20px;
}


.btn {
    border-radius: 20px
}

</style>
