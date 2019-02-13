<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="main">      
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import leftNav from '@/components/common/leftnav'
export default {
  name: 'app',
  components:{
    leftNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  padding:0;
  margin:0;
}
.main{float:left;height:100%;width:95%;background-color:#EFF2F7;overflow:hidden;}
</style>
