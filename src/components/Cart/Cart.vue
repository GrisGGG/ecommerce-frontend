<template>
   <div class="cart-dimmer" :class="{ open: showCart }" @click="closeCart" />
  <div class="cart " :class="{ open: showCart }">
    <div>
      <CartHeader :closeCart="closeCart" />
      <CartBody :products="products"   :reloadCartFn="reloadCartFn" ></CartBody>
     
    </div>
      <CartFooter 
      :products="products"
       v-if="products"
        :closeCart="closeCart"
       ></CartFooter>
   
  </div>
</template>

<script>
import CartHeader from './CartHeader.vue'
import CartBody from './CartBody.vue'
import CartFooter from './CartFooter.vue';
import { ref, computed, watchEffect } from 'vue';
import { useStore } from 'vuex';
  import { getProductsCartApi } from '../../api/cart'
export default {
    name: "Cart",
    components:{
    CartHeader,
    CartBody,
    CartFooter
},
    setup(){
      const store = useStore();
      const showCart = computed(() => store.state.showCart);
       let products = ref(null)
      let reloadCart = ref(false)
      
     const getProductsCart = async () =>{
        const response = await getProductsCartApi();
        products.value = response
      }
      watchEffect(()=>{
        showCart.value; //Cada que esta variable cambie la funcion  getProductsCart(), se vuelve a ejecutar
       reloadCart.value;
        getProductsCart()
      });
       const closeCart = ()=>{ store.commit("setShowCart", false)}
      const reloadCartFn = () => { reloadCart.value = !reloadCart.value}
      return { showCart, closeCart, products,  reloadCartFn }
    }
}
</script>

<style lang="scss" scoped>
.cart-dimmer {
  opacity: 0;
  transition: opacity 0.5 ease;
  &.open {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
  }
}
.cart {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px 0px 26px 5px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.9s ease;
  transform: translateX(150%);
  z-index: 4;
  &.open {
    transform: translateX(0);
  }
}
</style>
