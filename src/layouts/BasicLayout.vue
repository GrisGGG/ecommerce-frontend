<template>
    <div class="basic-layout">
        <Menu /> 
    <div class="ui container">
      <slot />
    </div>
  </div>
  <Cart></Cart>
 
</template>

<script>
import Menu from '@/components/Menu.vue';
import Cart from '@/components/Cart/Cart.vue';

export default {
    name: "BasicLayout",
    components: { Menu, Cart }
}
</script>

<style scoped>
  .basic-layout{
    height: 100%;
    width: 100vw;
   background-color: #ece2dd;
  }
.container{
  padding-top: 4em;
}

@media (max-width: 600px) {
  .container{
    padding-top: 6em;
  }
}
</style>