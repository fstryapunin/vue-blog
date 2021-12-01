<template>
    <div class="post">
        <h2>{{postData.title}}</h2>
        <p>{{postData.content}}</p>
    </div>
    
</template>

<script>
export default {
    name: 'Post',    
    created(){
        const postId = Number(this.$route.params.id)
        if(!isNaN(postId)){
            this.postData = this.$store.getters.getPost(postId)
        }else{
            //redirect to 404
            this.$router.push({ path: `/error`})
        }
    }
}
</script>

<style scoped>
    .post{
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
  }
</style>
