<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
        <label>User</label>
        <input
            class="credential-input" 
            type="text" 
            v-model="login" 
            name="login" 
            placeholder="admin" 
        />
        </div>
        <div class="form-control">
        <label>Password</label>
        <input
            class="credential-input"
            type="password"
            v-model="password"             
            name="pass"
            placeholder="1234"
        />
        </div>
        <input class="login-button" type="submit" value="LOGIN"/>
    </form>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            login: '',
            password: ''
        }
    },
    methods: {
        async onSubmit(e){
            e.preventDefault()
            
            if(!this.login || !this.password) {
                alert('Please enter all required credentials')
                return
            }

            //normally make request to server to hash and check credentials
            if(this.login === 'admin' && this.password === '1234'){
                this.$store.commit('updateUser', true)
            }

            
        }
    }
}
</script>

<style scoped>
    .form-control{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 0px;
        gap: 10px;
    }

    label{
       font-size: 1.25rem;
       margin-right: auto;
       font-weight: bold; 
    }

    .credential-input{
        padding: 10px;
        font-size: 1.25rem;
        border-radius: 10px;
        border-style: solid;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);       
    }

    .add-form{
        width: min-content;
        display: flex;
        flex-direction: column;
              
    }

    .login-button{
        font-size: 1rem;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);  
        box-sizing: border-box;
        position: relative;
        left: 0;    
        background-color: #42b883;
        color: white;
        padding: 10px;
        align-self: flex-start;
        border-radius: 10px;
        border: solid #42b883;
        cursor: pointer;
    }


</style>