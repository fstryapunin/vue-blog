<template>
    <div class="dashboard">        
        <div v-if="userIsAtheticated">            
            <div :key="post.id" v-for="post in $store.state.posts">
                <PostEdit :post-data="post"/>
            </div>
        </div>
        <div v-else>
            <Login/>
        </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue'
import PostEdit from '../components/PostEdit.vue'

export default {    
    name: 'Dash',
    computed: {
        userIsAtheticated(){
            return this.$store.getters.getUser.authenticated
        },
    },
    methods:{
        authUser(){
            this.$store.commit('authenticateUser')
        }
    },
    components: { Login, PostEdit }
}
</script>

<style scoped>
    .dashboard{        
        max-width: 1140px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px; 
    }
</style>


