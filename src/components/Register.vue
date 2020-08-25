<template>
  <span>
  <div class="wrap">
        <form class="login-form" action="">
            <div class="form-header">
                <h3>Register</h3>
            </div>
            <div>
              <span v-if="error.length">
                <span class="error" v-for="(err, index) in error" v-bind:key="index">
                  {{err}}
                </span>
              </span>
            </div>
            <!--User Name-->
            <div class="form-group">
                <input type="text" class="form-input" v-model="users.userName" maxlength="30" placeholder="User name">
            </div>
            <!--Password-->
            <div class="form-group">
                <input type="password" v-model="users.password" maxlength="10"  class="form-input" placeholder="Password">
            </div>
             <!--Confirm Password-->
            <div class="form-group">
                <input type="password" v-model="users.confirmPwd" maxlength="10"  class="form-input" placeholder="Confirm password">
            </div>
             <!--Email-->
            <div class="form-group">
                <input type="text" v-model="users.emailId" maxlength="40"  class="form-input" placeholder="Email id">
            </div>
            <!--Login Button-->
            <div class="form-group">
                 <button class="form-button" v-on:click.prevent="addRegister()" type="submit">Register</button>
                <button class="form-button" v-on:click.prevent="getLogin()" type="submit">Login</button>
            </div>
            <div class="form-footer">
            {{this.successMsg}}
            </div>
        </form>
    </div><!--/.wrap-->
  </span>

</template>

<script>
export default {
  name: 'Register',
  data: function(){
    return {
      msg: 'Registeration',
      users:{
        userName:"",
        password:"",
        confirmPwd:"",
        emailId:"",
        isAdmin:"False"
      },
      error:[],
      successMsg:""
    }
  },
  methods:
  {
    getLogin:function(){
       this.$router.push({path:'/'})
    },
      addRegister:function(){
          let validRegister = this.validateRegister()

          if(validRegister)
          {
        this.$http.post('http://localhost:2000/users',this.users)
       {
                this.successMsg="Registered sucessfully. Please login."
       }
          }
      },
      validateRegister: function(){
        /* eslint-disable no-debugger */
    debugger
           this.error=[];
     if(this.users.userName == ""){
       this.error.push("Please enter User name")
       return false
     }
     if(this.users.password == ""){
       this.error.push("Please enter Password")
       return false
     }
      if(this.users.confirmPwd == ""){
       this.error.push("Please enter Confirm password")
       return false
     }
     if(this.users.confirmPwd != this.users.password){
       this.error.push("Password and confirm password should be same")
       return false
     }
      if(this.users.emailId == ""){
       this.error.push("Please enter emailId")
       return false
     }
     return true
   }
  }
}
</script>

<style scoped>
body{
    font-family: 'Segoe UI', sans-serif;;
    font-size: 1rem;
    line-height: 1.6;
    height: 100%;
     
}
.wrap {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #fafafa;
}
.login-form{
    width: 350px;
    margin: 0 auto;
    border: 1px solid #ddd;
    padding: 2rem;
    background: #ffffff;
}
.form-input{
    background: #fafafa;
    border: 1px solid #eeeeee;
    padding: 10px;
    width: 100%;
}
.form-group{
    margin-bottom: 1rem;
}
.form-button{
    background: #69d2e7;
    border: 1px solid #ddd;
    color: #ffffff;
    padding: 10px;
    width:45%;
    text-transform: uppercase;
    margin:5px;
}
.form-button:hover{
    background: #69c8e7;
}
.form-header{
    text-align: center;
    margin-bottom : 2rem;
}
.form-footer{
    text-align: center;
    color:orange;
}
.wrap ul{
    display:flex;
    justify-content:center;
    flex-direction:row;
    list-style-type:none;
}
.error
{
  color:red;
}

</style>