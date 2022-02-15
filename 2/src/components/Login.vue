<template>
<div class = "login-form">
  <img alt="Vue logo" src="../assets/logo.png">
  <form  class = "login" @submit.prevent = "loginSubmit('/main')">
    <h2>Вход</h2>
    <div class = "login__container">
      <label for="login">Логин</label>
      <input type="text" name ="login" v-model="form.login" class = "input__login" placeholder="Введите логин(admin)">
    </div>
    <div class = "login__container">
      <label for="password">Пароль</label>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.12 14.12C13.8454 14.4147 13.5141 14.6511 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.481 9.80385 14.1961C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4858 9.58525 10.1546 9.88 9.87999M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68189 3.96914 7.6566 6.06 6.05999L17.94 17.94ZM9.9 4.23999C10.5883 4.07887 11.2931 3.99833 12 3.99999C19 3.99999 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19L9.9 4.23999Z" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 1L23 23" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <input type="password" name ="password" v-model="form.password" class = "input__login" placeholder="Введите пароль(admin)">  
    </div>
    <button type = "submit" class = "button" >Войти</button>
  </form>
  <!-- <div>
      <h2 v-for ="user in users"
      :key="user.login">{{user.login}}</h2>
    </div> -->
</div>
</template>

<script>
import App from '../App'
import users from '../mocks/users'
export default {
  data(){
    return{
      messages: "hello",
      form:{
        login: '',
        password: ''
      },
      users
    }
  },
  components: {
    App
  },
  methods:{
    loginSubmit(path){  

     /*  console.log(typeof(users))
      console.log(this.form.login) */
      for(let user in users){
        //console.log(this.users[user])
        if(this.form.login == this.users[user].login && this.form.password == this.users[user].password){
          console.log("Авторизация успешна")
          let meL = this.users[user].login
          localStorage.setItem("login",meL)
          let meP = this.users[user].login
          localStorage.setItem("password",meP)
          this.$router.push(path)
        }
        else{
          console.log("error")
          break
        }
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@font-face {
	font-family: 'Roboto'; 
  font-style: normal;
  font-weight: 400;
	src: url(../fonts/Roboto-Regular.ttf); 
}
@font-face {
	font-family: 'Roboto'; 
    font-style: normal;
    font-weight: 500;
	src: url(../fonts/Roboto-Medium.ttf); 
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login{
  h2{
    margin-top:40.6px;
    font-size:18px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }
}
.login-form{
  width: 510px;
  height: 520px;
  margin: 0 auto;
  margin-top:140px;
  background-color:white;
  img{
    height:88px;
    width:88px;

  }
}
.login__container{
  display:flex;
  position:relative;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top:20px;
  label{
    width:117px;
    text-align: left;
    font-family: Roboto;
    font-size:16px;
    line-height: 22px;
    color: rgba(23, 23, 25, 0.3);
  }
  svg{
    position:absolute;
    right:15px;
    top:36px;
  }
}
.input__login{
  border-radius: 5px;
  padding:12px 15px;
  font-size:20px;
  ::placeholder{
    font-size:20px;
  }
}
.button{
  margin-top:40px;
  padding:14px 20px;
  background-color:#1390E5;
  color:white;
  border: none;
  font-family: Roboto;
  font-size: 20px;
  line-height: 24px;
  border-radius: 5px;
}
.input__login autofocus{
  font-size:20px;
}

</style>
