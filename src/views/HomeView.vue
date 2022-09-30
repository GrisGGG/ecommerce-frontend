<template> 
  <BasicLayout>
    <h2 class="title">New Arrivals</h2>
    <div class="ui grid" style="padding-bottom: 4em">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
        <Product :product="product" />
      </div>
    </div>
    <Categories></Categories>
   
  </BasicLayout>
  <Footer></Footer> 
</template>

<script>


import { ref, onMounted } from "vue";
import { getProducts } from "../api/product";
import Product from "../components/Product";
import BasicLayout from '@/layouts/BasicLayout'
import Categories from "@/components/Categories.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: 'HomeView',
  components: {
    BasicLayout,
    Product,
    Categories,
    Footer
},setup(){
  let products = ref(null);

  onMounted( async () =>{
    const response = await getProducts(8);
    products.value = response.data;
  })
 
  return{ products, }
}
}
</script>
<style lang="scss">
  .ui.grid{
    margin-left: 5em;
  }
.box{
  height: 80vh;
  width: 100vw;
  display:flex ;
  .box-hero{
    background: #000;
  }
  .box-img{
    background: #f4f4;
  }
}
.title{
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 2em;
  padding-top:2em ;
  padding-bottom: 2em;
}

</style>