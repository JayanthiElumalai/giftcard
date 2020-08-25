//import AddBlog from "../components/AddBlog.vue";
//import ShowBlog from "../components/ShowBlog.vue";
//import HelloWorld from "../components/HelloWorld.vue";
//import Blog from "../components/Blog.vue";
import Register from "../components/Register.vue";
import GiftOrder from "../components/Users/GiftOrder.vue";
import OrderHistory from "../components/Users/OrderHistory.vue";

import adminReport from "../components/Admin/Report.vue";
import adminUpdateOrder from "../components/Admin/UpdateOrder.vue";

import Login from "../components/Login.vue";
import UserNav from "../components/UserNav.vue";



export default [
    {
        path:'/user',
        component:UserNav
   },
    {
        path:'/',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/giftOrder',
        component:GiftOrder
    },
    {
        path:'/orderHistory',
        component:OrderHistory
    },
    {
        path:'/adminReport',
        component:adminReport
    },
    {
        path:'/adminUpdateOrder',
        component:adminUpdateOrder
    }
]