<template>
    <div class="test">
      <h1>This is a Test page. </h1>
      <div id="demo">
          <button @click="submitBtn()">post하기</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
        return{
            
        }
    },
    mounted() {
      this.load();
    },
    methods: {
      load() {
        axios.get('http://localhost:8080/api/twitter/').then(res => { 
          res.reset
          console.log(res.data);
        });
      },
      submitBtn() {
          axios.post('http://localhost:8080/api/twitter/post', "this is string").then(res => {
              console.log(res);
          }).catch(err => {
              console.log(err);
          });
      }
    }
  }
  
  </script>