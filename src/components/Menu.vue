<template>
    <div class="ui secondary menu mob-view">
        <div class="ui container">
            <div class="left menu">
                <router-link class="item" to="/">
                  <h3 class="logo">Brand<span>Name</span></h3>
                    <!-- <img class="ui small image" src="../assets/logo.png" alt="Ecomerce logo" /> -->
                      <template v-for="category in categories" :key="category.id" >
                        <router-link  class="item" :to="category.attributes.slug">
                  {{ category.attributes.slug}}
                        </router-link>
                      </template>
                </router-link>
            </div>
              <div class="right menu">
                <router-link class="item" to="/login" v-if="!token">
                    Log In
                </router-link>
                 <template v-if="token">
          <router-link class="item" to="/orders">Orders</router-link>
          <span class="ui item cart" @click="openCart">
            <i class="cart plus icon"></i>
          </span>
          <span class="ui item logout" @click="logout">
            <i class="sign out alternate icon"></i>
          </span>
        </template>
                    </div>
        </div>
    </div>
</template>

<script>

import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { getTokenApi, deleteTokenApi } from "../api/token";
import { getCategoriesApi } from "../api/category";



export default {
    name: "Menu",
    setup(){
      let categories = ref({})
      const token = getTokenApi();
      const store =  useStore();

      onMounted( async () =>{
        const response = await getCategoriesApi()
       categories.value = response.data
      })

      const logout = () =>{
          deleteTokenApi();
          location.replace("/")
      }
      const openCart = () =>{
        store.commit("setShowCart", true)
      }

      return{ token, logout, categories, openCart,}
    }

}
</script>
<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #16202b;
  position: fixed;
  width: 100vw;
  display: flex;
  z-index: 1;
  .item {
    color: #fff;
    &:hover {
      color: #237ab1;
    }
  }
  .menu.left {
    width: 50%;
    .logo {
      padding-top: 1em;
      font-size: 1.1rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2px;
      span {
  font-weight: 200;
}
    }


    .ui.image {
      width: 40px;
    }
  }
  .menu.right {
    width: 50%;
    justify-content: flex-end;
    .logout,
    .cart {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
@media (max-width:500px) {
 .ui.menu.secondary{
  flex-direction: column;
 }

.item{
  font-size: .9em;
}
}
</style>