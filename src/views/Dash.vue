<template>
    <div class="dashboard">              
        <div v-if="userIsAtheticated">
            <div v-if="!showCreatePost">         
            <div :key="post.id" v-for="post in $store.state.posts">
                <PostEdit :post-data="post"/>                
            </div>
            </div>   
            <transition name="slide">
                <NewPost @toggle-popup="toggleShowCreate" v-if="showCreatePost"/>
            </transition>
            <button class="new-btn" @click="toggleShowCreate">NEW POST</button>
        </div>
        <div v-else>
            <Login/>
        </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue'
import PostEdit from '../components/PostEdit.vue'
import NewPost from '../components/NewPost.vue'

export default {    
    name: 'Dash',
    data(){
        return {
            showCreatePost: false
        }
    },
    computed: {
        userIsAtheticated(){
            return this.$store.getters.getUser.authenticated
        },
    },
    methods:{
        authUser(){
            this.$store.commit('authenticateUser')
        },
        toggleShowCreate(){
            this.showCreatePost = !this.showCreatePost
        }
    },
    components: { Login, PostEdit, NewPost }
}
</script>

<style scoped>
    .dashboard{        
        max-width: 1140px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px; 
    }

    .new-btn{
        padding: 12px;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        font-weight: bold; 
        background-color: #42b883;
        color: white;
        width: 100%;
    }
</style>


