<template>
    <h1>RECENTS POSTS</h1> 
    <div>   
        <div :key="post.id" v-for="post in getPosts" class="post-preview-container">
            <PostPreview :post-data="post"/>
        </div>
    </div>     
</template>

<script>

import PostPreview from './PostPreview.vue'

export default {
    name: 'PostPreviews',
    components: {PostPreview},
    computed: {
        getPosts(){
            return this.$store.state.posts
        }
    },    
}

</script>
