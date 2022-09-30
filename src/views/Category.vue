<template>
  <BasicLayout>
    <div class="ui grid">  
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
       <Product :product="product" />  
       </div>
    </div>
  </BasicLayout>
<Footer></Footer>
</template>


<script>
import BasicLayout from '@/layouts/BasicLayout.vue'
import Product from '@/components/Product.vue';
import Footer from '@/components/Footer.vue';
import { getProductsCategory } from '../api/product'
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: "Category",
    components:{
    BasicLayout,
    Product,
    Footer
},//para que este pendiente de cambios en las rutas
    watch:{
        $route(to, from){
            this.getProducts(to.params.category)           
        },
    }, setup(){
        const { params } = useRoute();
        let products = ref(null);

        onMounted(async () =>{
            getProducts(params.category) 
            
        })
        
        const getProducts = async (category) =>{
            const response = await getProductsCategory(category);
            products.value = response.data;
            // console.log(products.value);
        }
        return { getProducts, products}
    }
}
</script>

<style>

</style>