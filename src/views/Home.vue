<template>
  <div class="home">    
    <PostPreviews/>
  </div>
</template>

<script>
import PostPreviews from '../components/PostPreviews.vue'
export default {
  name: 'Home',
  components: {PostPreviews}  
}
</script>

<style scoped>
  .home{
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
  }
</style>
