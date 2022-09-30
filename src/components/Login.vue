// src/components/Login.vue
<template>
  <div>
      <h2>Log In</h2>
      <form @submit="onSubmit">
          <input placeholder="Enter your ID" v-model="uid">
          <input placeholder="Enter your password" v-model="password">
          <button type="submit">Login</button>
          <button type="button" @click="pageLink">회원가입</button>
          <!-- <div class="alert-danger" v-if="errors.has('password')"></div>        -->
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'LogIn',
  data: () => ({
    uid: '',
    password: ''
  }),
  methods: {
    ...mapActions(['login']),
    async onSubmit () {
        this.$validator.validateAll() // validation check를 하고     
        if (!this.errors.any()) { // 아무 문제 없으면 아래 코드 실행           
            try {
            let loginResult = await this.login({uid: this.uid, password: this.password})
            console.log(loginResult) // 로그인 성공하면 true, 아니면 false
            } catch (err) {
                console.error(err)
            }
        } else {
            console.log('validate err')
        }
    },
    goToPages () {
      this.$router.push({
        name: 'HelloWorld'
      })
    },
    pageLink(){
      this.$router.push({path: '/join'})
    }
  },
  computed: {
    ...mapGetters({
      errorState: 'getErrorState' // getter로 errorState를 받는다
    })
  }  
}
</script>

<style scoped>
 /* 색깔도 칠해준다. 경고의 빨간 맛  */
.alert-danger p{
  color: red;
}
</style>