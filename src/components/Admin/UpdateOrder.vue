<template>
  <div class="">
<nav class="navbar">
  <ul class="menu">
    <li>
      <router-link to="/adminReport" exact>Monthly Report</router-link>
    </li>
    <li>
       <router-link to="/adminUpdateOrder" exact>Update Order</router-link>
    </li>
    <li>
       <router-link to="/" exact>Log out</router-link>
    </li>
    </ul>
</nav>

    <table id="firstTable">
  <thead>
    <tr>
      <th>Order Id</th>
      <th>Recipient Name</th>
      <th>Ordered Date</th>
      <th>Gift Card Value</th>
      <th>Commission <br> (5%)</th>
      <th>Delivery Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(GiftOrder, index) in getOrders" v-bind:key="index">
      <td>GF000{{GiftOrder.id}}</td>
      <td>{{GiftOrder.firstName}} {{GiftOrder.lastName}}</td>
      <td>{{GiftOrder.orderDate}}</td>
      <td>{{GiftOrder.giftCardVal}}</td>
      <td>{{GiftOrder.totAmount}}</td>
      <td>{{GiftOrder.status}}</td>
      <td><button class="form-button" v-on:click.prevent="UpdateOrder(GiftOrder)">Mark Delivered</button></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>


export default {
 // name: 'Update Order',
  data: function(){
      return {
          msg:'View order history',
          GiftOrder:{
          }
      }
  },
  methods:{
       getOrderList: function(){
        this.$http.get('http://localhost:3000/GiftOrder?status=Undelivered')
              .then(res=>{
                this.GiftOrder = res.data
              }, err=>{
                console.log(err)
              })
    },
    UpdateOrder:function(message){
      this.GiftOrder=message;
      this.GiftOrder.status="delivered";
           this.$http.put('http://localhost:3000/GiftOrder/'+message.id, this.GiftOrder)
            .then(res=>{
                this.GiftOrder=res.data; 
                this.getOrderList();
              }, err=>{
                console.log(err)
              })

    }
  },
computed:{
        getOrders: function(){
        return this.GiftOrder;
      }
     
      },
created:function(){
    this.getOrderList();
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: 'Open Sans', sans-serif;
  width: 820px;
  border-collapse: collapse;
  border: 1px solid #44475C;
  margin: 20px auto 0;
}

table th {
  text-align: left;
  background: #FFEEDB;
  padding: 8px;
  min-width: 30px;
  border: 1px solid #7D82A8;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 1px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #FFEEDB;
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
.form-button{
    background: #69d2e7;
    border: 1px solid #ddd;
    color: #ffffff;
    padding: 10px;
    text-transform: uppercase;
    margin:5px;
}


</style>
