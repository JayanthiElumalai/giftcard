<template>
    <div>
       
    <div class="wrap">
        <form class="login-form" action="">
            <div class="form-header">
                <h3>Login</h3>
            </div>
<!--<div>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
 
 </div>-->

  <div>
          <span v-if="error.length">
            <span class="error" v-for="(err, index) in error" v-bind:key="index">
              {{err}}
            </span>
          </span>
      </div>
             <!--Email Input-->
            <div class="form-group">
                <input type="text" class="form-input" v-model="login.userName" maxlength="30" placeholder="email@example.com">
            </div>
            <!--Password Input-->
            <div class="form-group">
                <input type="password" v-model="login.password" maxlength="10"  class="form-input" placeholder="password">
            </div>
            <!--Login Button-->
            <div class="form-group">
                <button class="form-button" v-on:click.prevent="getLogin()" type="submit">Login</button>
                 <button class="form-button" v-on:click.prevent="getRegister()" type="submit">Register</button>
            </div>
            <div class="form-footer">
            </div>
        </form>
    </div><!--/.wrap-->

    </div>
</template>

<script>

export default {
    created() {
    console.log('Component has been created!');
    localStorage.clear();
  },
name: 'Login',
  data: function(){
    return {
      msg: 'Login',
      login:{
          userName:"",
          password:""
      },
       error:[]
    }
  },
  methods:{
      getRegister:function(){
           this.$router.push({path:'/register'})
      },
      getLogin:function(){

           let validLogin = this.validateLogin()
            if(validLogin)
{
                this.$http.get('http://localhost:2000/users'+'?emailId='+ this.login.userName+'&password='+this.login.password)
                    .then(res=>{
                         if(res.data.length>0){
                             //user
                                if(res.data[0].isAdmin=="False")
                                {
                                     if(localStorage){
                                        localStorage.setItem("emailId", this.login.userName)
                                        }
                                    this.$router.push({path:'/giftOrder'})
                                }
                                //admin
                                if(res.data[0].isAdmin=="True")
                                {
                                    this.$router.push({path:'/adminUpdateOrder'})
                                }
                         }
                         else{
                               // alert("Login details doesnot exist Please register your details");
                                this.error.push("Login details doesnot exist. Please register your details")
                         }
                            }, err=>{
                                console.log(err)
                            })
}
                
      },
       validateLogin: function(){
           this.error=[];
     if(this.login.userName == ""){
       this.error.push("Please enter email Id")
       return false
     }
     if(this.login.password == ""){
       this.error.push("Please enter Password")
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
    width: 45%;
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
}
.wrap ul{
    display:flex;
    justify-content:center;
    flex-direction:row;
    list-style-type:none;
}
.error{
    color:red;
}

</style>