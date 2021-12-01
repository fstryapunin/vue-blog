<template>
    <div @click="openPost" class="post-preview-container">
        <h2 class="post-heading">{{postData.title}}</h2>
        <p>{{postData.preview}}</p>
    </div>
</template>

<script>


export default {
    name: "PostPreview",
    props:['postData'],
    methods: {
        openPost(){
            
            this.$router.push({ path: `/post/${this.postData.id}`})
        }
    }   
}
</script>

<style scoped>
    .post-preview-container{
        background-color: white;
        cursor: pointer;
        margin: 20px 0px;
        padding: 20px;      
        border-radius: 5px;       
        box-sizing: border-box;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
        height: 100%;
        transition: background-color 1s;
    }
    .post-preview-container:hover{
        
        background-color: #42b883;
    }
    
</style>

