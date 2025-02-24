<template>
    <div class="auth-container">
      <h1>{{ isLogin ? '登录' : '注册' }}</h1>
      <select v-model="role" class="auth-select">
        <option value="student">学生</option>
        <option value="teacher">老师</option>
        <option value="parent">家长</option>
      </select>
      <input type="text" v-model="username" placeholder="用户名" class="auth-input" />
      <input type="password" v-model="password" placeholder="密码" class="auth-input" />
      <input v-if="!isLogin" type="password" v-model="confirmPassword" placeholder="确认密码" class="auth-input" />
      <button @click="submitForm" class="auth-button">{{ isLogin ? '登录' : '注册' }}</button>
      <button @click="toggleForm" class="auth-button">{{ isLogin ? '切换到注册' : '切换到登录' }}</button>
    </div>
  </template>
  
  <script>

  import apiConfig from '@/api/index';
  export default {
    data() {
      return {
        isLogin: true,
        role: '',
        username: '',
        password: '',
        confirmPassword: '',
        message: ''
      };
    },
    methods: {
      toggleForm() {
        this.isLogin = !this.isLogin;
        this.confirmPassword = ''; // 清空确认密码字段
      },
      async submitForm() {
        if (!this.isLogin && this.password !== this.confirmPassword) {
          alert('两次输入的密码不一致');
          return;
        }
  
        const apiUrl = this.isLogin ? `${apiConfig.apiUrl}/login` : `${apiConfig.apiUrl}/register`;
        console.log(apiUrl);
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password,
              role: this.role
            })
          });
          const data = await response.json();
          if (data.status === 'success') {
            // 存储用户信息
            localStorage.setItem('user', JSON.stringify(data));
            // 跳转到首页
            this.$router.push({ name: 'Home' });
          }
        } catch (error) {
          console.error(`${this.isLogin ? '登录' : '注册'}失败`, error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .auth-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .auth-select,
  .auth-input,
  .auth-button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .auth-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .auth-button:hover {
    background-color: #45a049;
  }
  </style>