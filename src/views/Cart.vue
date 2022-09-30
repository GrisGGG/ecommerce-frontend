<template>
  <BasicLayout>
    <h2>Cart</h2>
    <table class="ui celled table" v-if="products">
    <thead>
      <th>Product</th>
      <th>Quantity</th>
      <th>Price</th>
      <th></th>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.data.id">
      <td> {{  product.data.attributes.name }}</td>
      <td> {{  product.quantity }} </td>
      <td> {{ product.data.attributes.price }} </td>
      <td style="text-align: center">
        <i class="close icon" @click="deleteAllCartProducts(product.data.id)"></i>
      </td>
      </tr>
      <tr>
        <td></td>
        <td>Total:</td>
        <td colspan="2"> {{ getTotal()}} </td>
      </tr>
    </tbody>
    </table>
    <button 
    class="ui button primary fluid" 
    @click="createOrder"
    v-if="products" 
    >Generate order</button>
    <h3 v-if="!products">No select products</h3>
 </BasicLayout>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import BasicLayout from '@/layouts/BasicLayout.vue'
import jwtDecode from 'jwt-decode'
import { getProductsCartApi, deleteAllProductCart, deleteCartApi} from '@/api/cart';
import { getTokenApi } from '@/api/token' 
import { createOrdenApi } from '@/api/order';

export default {
    name: "Cart",
    components:{
      BasicLayout, 
    },
    setup(){
      let products = ref(null);
      let reloadCart = ref(false)
      const router = useRouter();
      
      watchEffect(async () =>{
        reloadCart.value
        const response = await  getProductsCartApi()
        products.value = response
      })
      const getTotal = () =>{
        let totalTemp = 0
        products.value.forEach((product) => {
          totalTemp += product.data.attributes.price * product.quantity
        });
        return totalTemp.toFixed(2)
      }
      const deleteAllCartProducts = (id) =>{
        deleteAllProductCart(id)
        reloadCart.value = !reloadCart.value
      }
      const createOrder = async () =>{
        const token = getTokenApi();
        const { id } = jwtDecode(token)

        const data = { "data": {
        "user" : id,
          "totalPayment" : getTotal(),
          "data": products.value
        }
         
        }
      //  console.log(data);
       try{
        const response = await createOrdenApi(data);
        deleteCartApi()
        router.push("/orders")
       }catch(error){
        console.log(error);
       }
      }

      return{ products, getTotal, deleteAllCartProducts, createOrder }
    }

}
</script>

<style>

</style>