<template>
<div class="ui footer">
  <div class="container">
    <div class="ui grid">
      <div class="sixten wide mobile eight wide tablet four wide computer column">
        <ul>
          <li class="main--title-text">Company</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Support Centre</li>
        </ul>
      </div>
      <div class="sixten wide mobile eight wide tablet four wide computer column">
         <ul>
          <li class="main--title-text">Questions?</li>
          <li>Help Support</li>
          <li>Track Order</li>
          <li>Returns</li>
          <li>Shipping Info</li>
          <li>History</li>
        </ul>
      </div>
      <div class=" sixten wide mobile eight wide tablet four wide computer column">
        <ul>
          <li class="main--title-text">Useful links</li>
          <li>Gift Cards</li>
          <li>Size Chart</li>
          <li>My Account</li>
          <li>Our Locations</li>
          <li>FAQ´S</li>
        </ul>
      </div>
      <div class="sixten wide mobile eight wide tablet four wide computer column">
        <ul>
          <li class="main--title-text">Connect With Us</li>
          <div class="box--media">
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-linkedin-in"></i></li>
          </div>
        </ul>
      </div>
    </div>
  </div>

</div>
<div class="box--ab">
  Made by @GuadalupeG🐰
</div>
</template>

<script>

import BasicLayout from '@/layouts/BasicLayout.vue';

export default {
    name:"Footer",
    components: {  BasicLayout }

}
</script>

<style lang="scss">

.footer{
  background-color: #16202b;
  max-height: max-content; 
  width: 100vw;
  margin-top:4em ;
  display: flex;
  .container{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
      text-align: left;
      list-style: none;
      li:hover{
        color:#5c615f
      }
      .main--title-text{
        text-decoration: underline;
        padding-bottom: 1em;
        &:hover{
          color:#15b377
        }
      }
      .box--media{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
}
.box--ab{
  background: #16202b;
  padding-bottom: 2em;
}

</style>