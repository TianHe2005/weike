<template>
    <div>
      <header class="header">
        <div class="header-content">
          <div class="logo">
            <img src="@/assets/logo.png" alt="EduPath Logo" />
            <div class="logo-text">
              <span>智径课堂</span>
              <span class="edu-path">EduPath</span>
            </div>
          </div>
          <nav class="nav">
            <a href="/" class="nav-link">首页</a>
            <a href="/classroom" class="nav-link">进入课堂</a>
            <a href="/practice" class="nav-link">进入练习</a>
            <a href="/my-learning" class="nav-link">我的学习</a>
            <a href="/auth" class="nav-link">登录/注册</a>
          </nav>
        </div>
      </header>
      <div class="content">
        <div class="subject-buttons">
          <a href="/classroom/subject/chinese" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            语文
          </a>
          <a href="/classroom/subject/math" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            数学
          </a>
          <a href="/classroom/subject/english" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            英语
          </a>
          <a href="/classroom/subject/physics" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            物理
          </a>
          <a href="/classroom/subject/chemistry" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            化学
          </a>
          <a href="/classroom/subject/politics" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            政治
          </a>
          <a href="/classroom/subject/history" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            历史
          </a>
          <a href="/classroom/subject/biology" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            生物
          </a>
          <a href="/classroom/subject/geography" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            地理
          </a>
          <a href="/classroom/subject/physical-education" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            体育
          </a>
          <a href="/classroom/subject/professional-courses" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            专业课程
          </a>
          <a href="/my-learning" class="subject-button">
            <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
            我的课堂
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClassroomView'
  };
  </script>
  
  <style scoped>
  /* Header styles */
  .header {
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 15px 0; /* 增加内边距 */
  }
  
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    height: 40px;
    margin-right: 10px;
  }
  
  .logo-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .logo span {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  
  .edu-path {
    font-size: 14px;
    color: #666;
  }
  
  .nav a.nav-link {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav a.nav-link:hover {
    background-color: #007bff;
    color: #fff;
  }
  
  /* Content styles */
  .content {
    margin-top: 150px; /* 调整内容与导航栏之间的间距 */
    text-align: center;
  }
  
  /* Subject buttons styles */
  .subject-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3列 */
    grid-template-rows: repeat(6, auto); /* 6行 */
    gap: 10px; /* 增加按钮之间的间距 */
    justify-items: center;
  }
  
  .subject-button {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 36px; /* 增加字体大小 */
    padding: 24px 32px; /* 减少内边距 */
    border-radius: 16px; /* 增加圆角 */
    transition: background-color 0.3s, color 0.3s;
    border: 1px solid #ddd;
    background-color: #f9f9f9; /* 添加背景颜色 */
    width: auto; /* 改为自动宽度 */
  }
  
  .subject-button:hover {
    background-color: #007bff;
    color: #fff;
    border-color: #007bff;
  }
  
  .button-logo {
    height: 48px; /* 设置logo高度 */
    margin-right: 20px; /* 设置logo与文本之间的间距 */
  }
  </style>