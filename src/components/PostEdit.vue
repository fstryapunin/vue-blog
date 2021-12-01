<template>
    <div class="post-edit-container">
        <div class="post-info">      
            <h2 class="post-heading">{{postData.title}}</h2>
            <div class="btn-container">
                <button @click="onEdit" class="post-btn edit-btn">EDIT</button>
                <button @click="onDelete(postData.id)" class="post-btn delete-btn">DELETE</button>
            </div>            
        </div>
        <transition name="fade">
            <div v-if="showEditor" class="post-editor">                
                <div class="input-control">
                    <label>Title</label>
                    <input class="text-input" type="text" v-model="newPost.title"/>
                </div>
                <div class="input-control">
                    <label>Preview</label>
                    <textarea class="text-input" type="textarea" rows="5" v-model="newPost.preview"/>
                </div>
                <div class="input-control">
                    <label>Content</label>
                    <textarea class="text-input" type="textarea" rows="20" v-model="newPost.content"/>
                </div>                      
                <button @click="onSave(postData.id)" class="post-btn save-btn">SAVE</button>
            </div>  
        </transition>                
    </div>
</template>

<script>
export default {
    name: "PostEdit",
    data(){
        return{
            showEditor : false,            
            newPost: {},
        }        
    },
    props:['postData'],
    mounted(){
        this.newPost = {...this.postData}
    },    
    methods: {
        onDelete(id){            
            this.$store.commit('deletePost', id)
        },
        onEdit(){
            this.showEditor = !this.showEditor            
        },
        onSave(){
            this.$store.commit('updatePost', this.newPost)
            this.showEditor = false
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
        
    }

    .post-info{
        display: flex;
    }

    .post-editor{
        margin-top: 10px;
        border-top: solid 5px #42b883;
    }

    .input-control{
        display: flex;
        flex-direction: column;
        margin: 20px 0px;        
    }

    label{
        align-self: flex-start;
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 1.25rem;
    }

    input{
        padding: 10px;
    }

    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
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

    .save-btn{
        background-color: #42b883;
        color: white;
        width: 100%;
    }
    
</style>