<template>
  <span>
        <nav class="navbar">
  <ul class="menu">
    <li>
      <router-link to="/giftOrder" exact>Gift Order</router-link>
    </li>
    <li>
       <router-link to="/orderHistory" exact>Gift Order History</router-link>
    </li>
     <li>
       <router-link class="right" to="/" exact>Log out</router-link>
    </li>
    </ul>
</nav>

<!-- End Navigation Bar -->
    <div class='some-page-wrapper'>
     <form class="login-form" action="">
      <div class="form-header">
                <h3>Gift Card Order</h3>
            </div>
            <div>
          <span v-if="error.length">
            <span class="error" v-for="(err, index) in error" v-bind:key="index">
              {{err}}
            </span>
          </span>
      </div>
  <div class='row'>
    <div class='column'>
      <div class='blue-column'>
       Order Date
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
      {{myDate}}
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
      </div>
    </div>
  </div>

  <div class='row'>
    <div class='column'>
      <div class='blue-column'>
      First Name
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
       <input type="text" v-model="giftOrder.firstName" maxlength="15" required>
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
      Last Name
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        <input type="text" v-model="giftOrder.lastName" maxlength="10" required>
      </div>
    </div>
  </div>

  <div class='row'>
    <div class='column'>
      <div class='blue-column'>
      Gift Card Value(INR)
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        <input type="number" v-model="giftOrder.giftCardVal" max="9999" v-on:keyup="test(giftOrder.giftCardVal)" maxlength="5" required>
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
     Amount payable<br>(5% commission inclusive)
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
       <input type="number" v-model="giftOrder.totAmount" disabled maxlength="5" required>
      </div>
    </div>
  </div>

   <div class='row'>
    <div class='column'>
      <div class='blue-column'>
      Mobile Number
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        <input type="number" maxlength="10" v-model="giftOrder.mobileNo" required>
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
     Address
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
       <textarea cols="30" rows="3" v-model="giftOrder.Address" maxlength="30"></textarea>
      </div>
    </div>
  </div>

  <div class="row row-button">
              <button class="form-button" v-on:click.prevent="addOrder()">Place Order</button>
    </div>
   
  
  </form>
</div>
  </span>

</template>

<script>

export default {
  name: 'GiftOrder',
  data: function(){
    return {
      msg: 'Gift Order',
      myDate : new Date().toISOString().slice(0,10),
      giftOrder:{
        firstName:"",
        lastName:"",
        orderDate:new Date().toISOString().slice(0,10),
        giftCardVal:"",
        mobileNo:"",
        totAmount:0,
        Address:"",
        status:"Undelivered",
        orderedBy:""
      },
        error:[]
       // successMsg:"test"
    }
  },
  methods:
  {
      test:function(val){
       let num = +val + +(((5 / 100) * val).toFixed(2));
        this.giftOrder.totAmount=num;
      },
      addOrder:function(){
 let validOrder = this.validOrder()
 if(validOrder){
        if(localStorage){
             this.giftOrder.orderedBy=localStorage.getItem("emailId")
            }
        this.$http.post('http://localhost:3000/GiftOrder',this.giftOrder)
        .then(res=>{
                console.log(res)
                 alert("Order has been created successfully!");
                  // this.successMsg="Order has been created successfully!"
                  this.$router.push({path:'/orderHistory'})
              }, err=>{
                console.log(err)
              })
      }
      },
      validOrder: function(){
        /* eslint-disable no-debugger */
    debugger
           this.error=[];
     if(this.giftOrder.firstName == ""){
       this.error.push("Please enter First Name")
       return false
     }
     if(this.giftOrder.lastName == ""){
       this.error.push("Please enter Last Name")
       return false
     }
     if(this.giftOrder.giftCardVal == 0){
       this.error.push("Please enter Gift card value")
       return false
     }
     if(this.giftOrder.mobileNo == ""){
       this.error.push("Please enter Mobile Number")
       return false
     }
     if(this.giftOrder.Address == ""){
       this.error.push("Please enter Address")
       return false
     }
     return true
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #fafafa;
}
.login-form{
    width: 760px;
    margin: 0 auto;
    border: 1px solid #ddd;
    padding: 2rem;
    background: #ffffff;
}
.right {
    margin-right:auto;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
.form-button{
    background: #69d2e7;
    border: 1px solid #ddd;
    color: #ffffff;
    padding: 10px;
    width: 22%;
    text-transform: uppercase;
  /*  margin:5px;*/
  margin-right:24px;
}
.form-button:hover{
    background: #69c8e7;
}
.blue-column {
   width:100%;
  margin-bottom: 1rem;
}

.green-column {
  width:100%;
  margin-bottom: 1rem;
}
.row-button{
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  justify-content:flex-end;
}
.form-header{
    text-align: center;
    margin-bottom : 2rem;
}
textarea{
width:85%;
}

/* Start Navigation Bar */

.navbar {
  background-color: #25283D;
  color: #ffffff;
  border-radius: 4px;
  width: 100vw;
  max-width: 820px;
  margin: 20px auto 0;
}

.navbar .menu {
  display: flex;
  position: relative;
}

@media (max-width: 820px) {
  .navbar .menu {
    display: block;
    position: relative;
  }
}

.navbar .menu li {
  display: flex;
  text-align: center;
  transition: background-color 0.5s ease;
}

.navbar .menu a {
  flex: 1;
  justify-content: center;
  display: inline-flex;
  color: #ffffff;
  text-decoration: none;
  padding: 10px;
  position: relative;
}

.navbar .menu a > .fa {
  font-weight: bold;
  margin-left: 8px;
}

.navbar .menu li:hover {
  background-color: #8F3985;
}

.navbar .menu li:hover .container {
  display: flex;
}

@media (max-width: 820px) {
  .navbar .menu li:hover .container {
    display: none;
  }
  
}

a.hasDropdown:after {
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  height: 0;
  width: 0;
  border: 8px solid transparent;
  border-top-color: #25283d;
  z-index: 2;
}

@media (max-width: 820px) {
  li:hover a.hasDropdown:after {
    display: none;
  }
}

li:hover a.hasDropdown:after {
  content: '';
  border-top-color: #8F3985;
}

/* End Navigation Bar */

.error{
  color:red;
}

</style>
