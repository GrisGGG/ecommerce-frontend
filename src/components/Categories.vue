<template>
  <div 
  class="ui container container-categories"
 :class="{ hoverLeft:splitEf, hoverRight: splitRg }"
  >
    <div class="split left"
     @mouseover="splitEf = true"
    @mouseleave="splitEf = false"
    >
        <h4>Women</h4>
            <router-link to="/women">
                <button class="btn btn-left">Click Here ></button>
            </router-link>      
    </div>
    <div class="split right"
        @mouseover="splitRg = true"
        @mouseleave="splitRg = false"
    >
        <h4>Men</h4>
        <router-link to="men">
            <button class="btn btn-right">Click Here ></button>
        </router-link>
        
    </div>
    </div>
</template>

<script>

import { ref, onMounted } from 'vue';
import { getCategoriesApi } from "../api/category";

export default {
    name:"Categories",
    setup(){
        let splitEf = ref(false);
        let splitRg = ref(false);
        let categories = ref({})

         onMounted( async () =>{
        const response = await getCategoriesApi()
       categories.value = response.data
    //    console.log(categories);
      })
        return {splitEf, splitRg}


    }

}
</script>

<style >
:root{
    --left-bg-color: rgba(87, 84, 236, 0.7); /*El 0.7 es la transparencia*/
    --right-bg-color:rgba(43, 43, 43, 0.7);
    --left-btn-hover-color:rgba(87, 84, 236, 1); /*Con uno quitas la transparencia*/
    --right-btn-hover-color:rgb(43, 43, 43, 0.8);
    --hover-width: 75%;
    --other-width: 25%;
    --speed:1000ms;
}
h4{
    font-size: 4rem;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    white-space: nowrap;
}
.container-categories{
    position: relative;
    /* width: 100%; */
    height: 100vh;
    background-color: #333;
    margin-top: 4em;
    margin-bottom:4em ;
}

.btn{
    position: absolute;
    top: 40%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-50%);
    text-decoration: none;
    color: #fff;
    border: #fff solid 0.2rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    width: 15rem;
    padding: 2rem;
    background: none;
}
.active .left{
    color: #333;
}
.btn-left:hover{
    background-color: var(--left-btn-hover-color);
    border: var(--left-btn-hover-color);
}
.btn-right:hover{
    background-color: var(--right-btn-hover-color);
    border: var(--right-btn-hover-color);
}
.split{
    position: relative;
    height: 100%;
    width: 50%;
    overflow: hidden;
}
.split.left{
    position: absolute;
    left: 0;
    background: url('../assets/woman.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  
}
.split.right{
    position: absolute;
    right: 0;
    background: url('../assets/men.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.split.right, .split.left{
    transition: all var(--speed) ease-in-out;
}
.hoverLeft .left{
    width: var(--hover-width);
      
}
.hoverLeft .right{
    width: var(--other-width);
}
.hoverRight .left{
    width: var(--other-width);
}
.hoverRight .right{
    width: var(--hover-width);
}
@media(max-width:800px){
    h1{
        font-size: 2rem;
        top: 25%;
    }
    .btn{
        padding: 1.2rem;
        width: 12rem;
    }
    .split{
        width: 100%;
        height: 50%;
    }
    .split.left{
        bottom:0;
    }
    .hoverLeft .left{
        width: 100%;
    }
    .hoverLeft .right{
        width:100% ;
    }
    .hoverRight .left{
    width: 100%;
    }
    .hoverRight .right{
    width: 100%;
    }
}
</style>