<template>
    <div v-if="this.postData" class="post">       
        <h2>{{postData.title}}</h2>
        <p>{{postData.content}}</p>
    </div>
    
</template>

<script>
export default {
    name: 'Post',       
    created(){
        const postId = Number(this.$route.params.id)
        //check if valid post id
        if(!isNaN(postId)){
            //"fetch" post            
            this.postData = this.$store.getters.getPost(postId)
            //check if post is returned
            if(!this.postData) this.$router.push({ path: `/error`})
        }else{            
            //redirect to 404 page
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
