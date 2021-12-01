<template>
    <div class="nav-container">
        <div class="nav-inner">
        <img alt="navLogo" src="../assets/logo.png">
        <div class="link-container">
            <router-link to="/">HOME</router-link>
            <router-link to="/about" exact>ABOUT</router-link>
        </div>
        <router-link to="/dashboard">ADMIN</router-link>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'Navbar'      
}
</script>

<style scoped>
    .nav-container{
        top: 0;
        position: sticky;
        background-color: white;
        box-sizing: border-box;
        flex-basis: 0px;
        width: 100%;
        padding: 20px;        
        border-bottom: 5px solid #42b883;
        z-index: 1;
    }

    .nav-inner{
        max-width: 1140px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .link-container{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    img{
        max-height: 50px;
    }

    a{
        color: #35495e;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.25em;
        transition: 0.5s;
    }

    .router-link-active{
        color: #42b883;
        text-decoration: none;        
    }
</style>
