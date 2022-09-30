<template> 
  <router-view/>
</template>

<style lang="scss">
  body{
    background-color: #ece2dd;
  }
#app {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: #2c3e50;
  // background-color: #ece2dd;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
