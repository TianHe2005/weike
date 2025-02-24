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
  </header> <!-- 添加这一行 -->
</template>

<script>
export default {
  name: 'MyHomework', // 修改这里
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
</style>