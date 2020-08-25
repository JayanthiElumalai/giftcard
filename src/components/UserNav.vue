<template>
    <div>
        <ul id="userView" style="">
            <li>
            <!--<router-link to="/register" exact>Register</router-link>-->
              <router-link to="/giftOrder" exact>Gift Order</router-link>
            </li>
             <li>
            <!--<router-link to="/register" exact>Register</router-link>-->
              <router-link to="/orderHistory" exact>Gift Order History</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

.router-link-active{
    background-color: lightgrey;
    color: red;
}

li{
    display: inline-block;
padding-right:5px;
 flex:auto;
}

ul{
    list-style-type: none;
    flex:auto;
    justify-content:space-between;
}


</style>