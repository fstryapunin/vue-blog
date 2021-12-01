<template>
    <div class="post-edit-container">        
        <h2 class="post-heading">{{postData.title}}</h2>
        <div class="btn-container">
            <button class="post-btn edit-btn">EDIT</button>
            <button @click="onDelete(postData.id)" class="post-btn delete-btn">DELETE</button>
        </div>        
    </div>
</template>

<script>
export default {
    name: "PostEdit",
    props:['postData'],
    methods: {
        onDelete(id){            
            this.$store.commit('deletePost', id)
        }
    }      
}
</script>

<style scoped>
    .post-edit-container{
        background-color: white;        
        margin: 20px 0px;
        padding: 20px;      
        border-radius: 5px;       
        box-sizing: border-box;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);   
        display: flex;
    }
    
    .btn-container{
        display: flex;
        align-self: center;
        gap: 10px;
        margin-left: auto;
    }

    .post-btn{
        padding: 12px;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        font-weight: bold;        
    }

    .delete-btn{
        color: white;
        background-color: #ff6961;
    }

    .edit-btn{
        background-color: #42b883;
        color: white;
    }
    
</style>