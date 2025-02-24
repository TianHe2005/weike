<template>
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
        <a href="#" class="nav-link" @click.prevent="showHome = true; showSubjects = false; showPractice = false; showMyLearning = false; showBanner = true">首页</a>
        <a href="#" class="nav-link" @click.prevent="showHome = false; showSubjects = true; showPractice = false; showMyLearning = false; showBanner = false">进入课堂</a>
        <a href="#" class="nav-link" @click.prevent="showHome = false; showSubjects = false; showPractice = true; showMyLearning = false; showBanner = false">进入练习</a>
        <a href="#" class="nav-link" @click.prevent="showHome = false; showSubjects = false; showPractice = false; showMyLearning = true; showBanner = false">个人中心</a>
        <div v-if="user" class="user-dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
          <img src="@/assets/logo.png" alt="User Avatar" class="user-avatar" />
          <div v-if="showDropdown" class="dropdown-content" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <a href="#" class="dropdown-item">个人信息</a>
            <a href="#" class="dropdown-item">设置</a>
            <a href="#" class="dropdown-item" @click.prevent="logout">退出登录</a>
          </div>
        </div>
        <a v-else href="/auth" class="nav-link">登录/注册</a>
      </nav>
    </div>
  </header>
  <div v-if="showBanner" class="header-image">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(banner, index) in banners" :key="index">
        <img :src="banner" alt="Header Image" />
      </swiper-slide>
      <template v-slot:pagination>
        <div class="swiper-pagination"></div>
      </template>
    </swiper>
    <transition name="slide-up">
      <div class="about-us">
        <h2>EduPath智径课堂</h2>
        <p>一个专注于打造AI辅助教学的基于多模态AI的沉浸式教学系统平台，</p>
        <p>集多模态情绪识别系统、硬件超体模块、AI陪练分析等功能，学生教师家长三端并联，</p>
        <p>用AI精细化分析培养学生综合兴趣提升能力成绩，打破传统填压式学习！</p>
      </div>
    </transition>
  </div>
  <div v-if="showHome" class="other-content">
    
  </div>
  <div v-else-if="showSubjects" class="subject-buttons">
    <a href="/classroom/subject/chinese" class="subject-button">
      <img src="@/assets/chinese.png" alt="Logo" class="button-logo" />
      语文
    </a>
    <a href="/classroom/subject/math" class="subject-button">
      <img src="@/assets/math.png" alt="Logo" class="button-logo" />
      数学
    </a>
    <a href="/classroom/subject/english" class="subject-button">
      <img src="@/assets/english.png" alt="Logo" class="button-logo" />
      英语
    </a>
    <a href="/classroom/subject/physics" class="subject-button">
      <img src="@/assets/physics.jpg" alt="Logo" class="button-logo" />
      物理
    </a>
    <a href="/classroom/subject/chemistry" class="subject-button">
      <img src="@/assets/chemistry.png" alt="Logo" class="button-logo" />
      化学
    </a>
    <a href="/classroom/subject/politics" class="subject-button">
      <img src="@/assets/politics.png" alt="Logo" class="button-logo" />
      政治
    </a>
    <a href="/classroom/subject/history" class="subject-button">
      <img src="@/assets/history.jpg" alt="Logo" class="button-logo" />
      历史
    </a>
    <a href="/classroom/subject/biology" class="subject-button">
      <img src="@/assets/biology.png" alt="Logo" class="button-logo" />
      生物
    </a>
    <a href="/classroom/subject/geography" class="subject-button">
      <img src="@/assets/geography.png" alt="Logo" class="button-logo" />
      地理
    </a>
    <a href="/classroom/subject/physical-education" class="subject-button">
      <img src="@/assets/sport.png" alt="Logo" class="button-logo" />
      体育
    </a>
    <a href="/classroom/subject/professional-courses" class="subject-button">
      <img src="@/assets/zyk.png" alt="Logo" class="button-logo" />
      专业课程
    </a>
    <a href="/my-learning" class="subject-button">
      <img src="@/assets/wdclass.png" alt="Logo" class="button-logo" />
      我的课堂
    </a>
  </div>
  <div v-else-if="showPractice" class="practice-buttons">
    <a href="/practice/myhomework" class="practice-button">
      <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
      我的作业
    </a>
    <a href="/practice/" class="practice-button">
      <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
      课外练习
    </a>
    <a href="/practice/" class="practice-button">
      <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
      智能解答
    </a>
    <a href="/practice/" class="practice-button">
      <img src="@/assets/logo.png" alt="Logo" class="button-logo" />
      能力培养
    </a>
  </div>
  <div v-else-if="showMyLearning" class="my-learning-container">
  <div class="sidebar">
    <div class="sidebar-section">
      <button class="sidebar-button" @click.prevent="activeSection = 'personalInfo'">
        个人信息
      </button>
    </div>
    <div class="sidebar-section">
      <button class="sidebar-button" @click.prevent="activeSection = 'learningProgress'">
        学习进度
      </button>
    </div>
    <div class="sidebar-section">
      <button class="sidebar-button" @click.prevent="activeSection = 'myClass'">
        我的班级
      </button>
    </div>
    <div class="sidebar-section">
      <button class="sidebar-button" @click.prevent="activeSection = 'settings'">
        设置
      </button>
    </div>
  </div>
    <div class="main-content">
      <div v-if="activeSection === 'personalInfo'">
        <h3>个人信息</h3>
        <p>姓名: 张三</p>
        <p>年级: 高二</p>
        <p>班级: 2班</p>
        <!-- 这里放置“个人信息”的具体内容 -->
      </div>
      <div v-else-if="activeSection === 'learningProgress'">
        <h3>学习进度</h3>
        <p>已完成课程: 5/10</p>
        <p>完成率: 50%</p>
        <!-- 这里放置“学习进度”的具体内容 -->
      </div>
      <div v-else-if="activeSection === 'myClass'">
        <h3>我的班级</h3>
        <p>班级名称: 高二2班</p>
        <p>班级人数: 30人</p>
        <!-- 这里放置“我的班级”的具体内容 -->
      </div>
      <div v-else-if="activeSection === 'settings'">
      <h3>设置</h3>
      <!-- 这里放置“设置”的具体内容 -->
    </div>
    </div>
  </div>



  <div class="contact-us">
    <h2>联系我们</h2>
    <p>如果您有任何问题或建议，请通过以下方式联系我们：</p>
    <ul>
      <li>电话: 13651593730</li>
      <li>邮箱: 1371453554@qq.com</li>
      <li>地址: 智径课堂总部，南京市栖霞区南京审计大学金审学院</li>
    </ul>
    <div class="wechat-qrcode">
      <p>微信公众号</p>
      <img src="@/assets/qiyeweichat.jpg" alt="WeChat QR Code" class="qrcode-image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHome: true,
      showSubjects: false,
      showBanner: true,
      showPractice: false,
      showMyLearning: false,
      activeSection: 'personalInfo', // 默认显示个人信息
      user: null,
      showDropdown: false,
      showQrcode: false,
      banners: [
        require('@/assets/banner1.jpg'),
        require('@/assets/banner2.jpg'),
        require('@/assets/banner3.jpg'),
        require('@/assets/banner4.jpg')
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        loop: true
      }
    };
  },
  created() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      try {
        const userString = localStorage.getItem('user');
        if (userString) {
          this.user = JSON.parse(userString);
        } else {
          this.user = null;
        }
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
        this.user = null;
      }
    },
    logout() {
      localStorage.removeItem('user');
      this.user = null;
      this.$router.push({ name: 'Auth' });
    }
  }
};
</script>

<style>
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

/* Header image styles */
.header-image {
  text-align: center;
  margin-top: 50px;
}

.swiper-container {
  width: 90%;
  height: 50%;
}

.swiper-slide img {
  width: 90%;
  height: auto;
}

.header-image img {
  max-width: 200%;
  height: auto;
}

/* Subject buttons styles */
.subject-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 5px;
  margin-top: 150px; /* 增加与导航栏的间距 */
  justify-items: center; /* 水平居中 */
}

.subject-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  padding: 1px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  width: 150px; /* 增加按钮宽度 */
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subject-button:hover {
  background-color: #f0f0f0;
  transform: translateY(-5px); /* 添加轻微的上浮效果 */
}

.button-logo {
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
}

/* Practice buttons styles */
.practice-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4列等宽 */
  column-gap: 1px; /* 减小水平间距 */
  row-gap: 5px; /* 调整垂直间距，如果需要 */
  padding: 20px;
  margin-top: 150px; /* 增加与导航栏的间距 */
}

.practice-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  width: 100px; /* 缩小按钮宽度 */
}

.practice-button:hover {
  background-color: #f0f0f0;
}

/* My Learning styles */
.my-learning-container {
  display: flex;
  margin-top: 150px; /* 增加与导航栏的间距 */
}

.sidebar {
  width: 250px;
  padding: 20px;
  border-right: 1px solid #ddd;
}

.sidebar-section {
  margin-bottom: 20px;
}

.sidebar-section .sidebar-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  background: none;
  cursor: pointer;
  width: 100%;
  justify-content: flex-start;
}

.sidebar-section .sidebar-button:hover {
  background-color: #f0f0f0;
}

.main-content {
  flex: 1;
  padding: 20px;
}


.user-dropdown {
  position: relative;
  display: inline-block;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.user-dropdown:hover .dropdown-content {
  display: block;
}
.contact-us {
  margin-top: 50px;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.wechat-qrcode {
  margin-top: 20px;
  cursor: pointer;
  position: relative;
}

.qrcode-image {
  width: 200px;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 添加过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.about-us h2{
    font-weight: bold;
    font-size: 2em;   
}
.about-us p{
  color: gray;
}
/* 添加过渡动画 */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s ease;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>