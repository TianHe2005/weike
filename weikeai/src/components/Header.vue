<template>
    <header>
      <nav>
        <ul>
          <li><a href="/">首页</a></li>
          <li><a href="/login">登录</a></li>
          <li><a href="/register">注册</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script lang="ts" setup></script>
  
  <style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 10px;
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  nav ul li {
    margin-right: 20px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
  }
  </style>