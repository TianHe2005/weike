<template>
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <img src="@/assets/logo.png" alt="EduPath Logo" />
          <span>智径课堂</span>
        </div>
        <nav class="nav">
          <a href="/">首页</a> |
          <a href="/classroom">进入课堂</a> |
          <a href="/practice">进入练习</a> |
          <a href="/my-learning">我的学习</a> |
          <a href="/login">登录/注册</a>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'EduPathHeader',
  };
  </script>
  
  <style>
  /* Header styles */
  .header {
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo img {
    height: 40px;
    margin-right: 10px;
  }
  
  .logo span {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  
  .nav a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
    font-size: 16px;
  }
  
  .nav a:hover {
    color: #007bff;
  }
  </style>