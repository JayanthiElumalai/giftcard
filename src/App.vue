<template>
  <div id="app">
   <router-view></router-view>
    
  </div>
</template>

<script>

//import NavBar from "./components/UserNav.vue";
//import NavBar from "./components/Login.vue";

export default {
  name: 'App',
  //components:{
    //'navbar':NavBar
  //},
  mounted: function(){
   // console.log("App Component mounted!")
   // console.log(process.env.MYMESSAGE)
  }

}
</script>

<style>
body{
   font-family: 'Segoe UI', sans-serif;;
    font-size: 1rem;
    line-height: 1.6;
     background: #fafafa;
}
#app {
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display:flex;
  flex-direction:column;
  background: #fafafa;
}
</style>
