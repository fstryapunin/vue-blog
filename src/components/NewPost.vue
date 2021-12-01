<template>
        <div class="new-post-wrapper">        
            <div class="post-editor">                
                <div class="input-control">
                    <label>Title</label>
                    <input class="text-input" type="text" v-model="post.title"/>
                </div>
                <div class="input-control">
                    <label>Preview</label>
                    <textarea class="text-input" type="textarea" rows="5" v-model="post.preview"/>
                </div>
                <div class="input-control">
                    <label>Content</label>
                    <textarea class="text-input" type="textarea" rows="20" v-model="post.content"/>
                </div>
                <div class="btn-container">
                    <button @click="onSave()" class="post-btn save-btn">SAVE</button>
                    <button @click="$emit('toggle-popup')" class="post-btn cancel-btn">CANCEL</button>
                </div>       
                
            </div>
        </div>         
</template>

<script>
export default {
    name: 'NewPost',
    data(){
        return {
            post: {
                title: '',
                preview: '',
                content: ''
            }
        }
    }, methods: {
        onSave(){
            if(this.post.title.length > 0 && this.post.preview.length > 0 && this.post.content.length > 0){
            this.$store.commit('createPost', this.post)            
            this.$emit('toggle-popup')
            }else{
                alert('Please fill out all the fields')
            }
        }
    }
}
</script>

<style scoped>

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

    textarea{
        resize: none;
    }
    
    .new-post-wrapper{
        position: absolute;
        top: 95px;
        bottom:0;
        left: 0;
        right: 0;
        background-color: white;
        padding: 25px;       
    }
    
    .post-editor{
        max-width: 1140px;
        margin-left: auto;
        margin-right: auto;
    }

    .btn-container{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }   

    .post-btn{
        padding: 12px;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        font-weight: bold;  
        flex-grow: 1;
        min-width: 300px;
        flex-basis: 100px;      
    }
   
    .save-btn{
        background-color: #42b883;
        color: white;        
    }

    .cancel-btn{
        color: white;
        background-color: #ff6961;
    }
    
</style>