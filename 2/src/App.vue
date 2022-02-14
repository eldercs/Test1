<template>
<!-- <h1>{{check}}</h1> -->
  <router-view :check = "check"></router-view>
</template>
<script>
import Login from './components/Login.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  props: {},
  data(){
    return{
      check: false
    }
  },
  components: {
    Login, 
    Main
  },

  mounted(){
      try{
        let check_userL = localStorage.getItem("login")
        let check_userP = localStorage.getItem("password")
        /* console.log("pass " + check_userL)
        console.log(check_userL != '') */
        if(check_userL != '' && check_userP != '' && check_userL != null && check_userP != null){
          this.check = true
          this.$router.push({path: "/main", params:{data:this.check}})
          return check
        }
        else{
          this.$router.push({path: "/", params:{data:this.check}})
          this.check = false
          return check
        }
      }catch{
      }
    }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
