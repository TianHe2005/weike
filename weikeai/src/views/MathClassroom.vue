<template>
  <div>
    <h1>数学课堂</h1>
    <!-- 添加数学课堂的具体内容 -->
  </div>
  <div>
    <video ref="MathClassroom" controls @timeupdate="onTimeUpdate">
      <source :src="videoUrl" type="video/mp4">
      您的浏览器不支持 video 标签。
    </video>
  </div>
  <!-- 做题测试弹窗 -->
  <div v-if="showQuizModal" class="quiz-modal-overlay">
    <div class="quiz-modal">
      <h2>做题测试</h2>
      <p>请回答以下问题：</p>
      <!-- 添加你的做题测试内容 -->
      <p ref="question">求 \( y^{(4)} \) 的形式</p>
      <label v-for="(option, index) in options" :key="index">
        <input type="radio" v-model="userAnswer" :value="option.value">
        <span :ref="'option' + index">{{ option.label }}</span>
      </label>
      <button @click="submitAnswer" v-if="!showCorrectAnswer">提交答案</button>
      <div v-if="showCorrectAnswer" class="correct-answer">
        <h3>正确答案：</h3>
        <p ref="correctAnswer">{{ correctAnswer }}</p>
      </div>
      <button @click="closeQuizModal" v-if="showCorrectAnswer">完成</button>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'; // 引入axios实例

export default {
  name: 'MathClassroom',
  data() {
    return {
      videoUrl: '',
      showQuizModal: false,
      userAnswer: '',
      correctAnswer: 'B', // 假设正确答案是B
      showCorrectAnswer: false,
      quizShown: false, // 新增标志变量
      options: [
        { label: '$ \\frac{dy^4}{dx^4} $', value: 'A' },
        { label: '$ \\left(\\frac{d^4y}{dx^4}\\right) $', value: 'B' },
        { label: '$ \\left(\\frac{dy^4}{d^4x}\\right) $', value: 'C' }
      ]
    };
  },
  mounted() {
    this.fetchVideo();
    this.renderMathJax();
  },
  methods: {
    async fetchVideo() {
      try {
        console.log('Sending request to /getVideo');
        const response = await api.instance.post('/getVideo', {
          /* 你的请求体数据 */
        }, {
          responseType: 'arraybuffer' // 设置响应类型为arraybuffer
        });
        console.log('Response received:', response);

        if (!response.data) {
          throw new Error('No video data received');
        }

        const videoBlob = new Blob([response.data], { type: 'video/mp4' }); // 假设视频类型为mp4
        this.videoUrl = URL.createObjectURL(videoBlob);
        console.log('Video URL set:', this.videoUrl);

        // 检查视频元素是否正确设置
        const videoElement = this.$refs.MathClassroom;
        if (videoElement) {
          videoElement.src = this.videoUrl;
          console.log('Video element src set:', videoElement.src);
        } else {
          console.error('Video element is not found');
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        console.error('Error details:', error.response ? error.response.data : 'No response data');
        // 处理错误，例如显示错误信息给用户
        alert('视频加载失败，请稍后再试。');
      }
    },
    onTimeUpdate(event) {
      const video = event.target;
      const currentTime = video.currentTime;
      const targetTime = 11 * 60 + 19; // 11分19秒

      if (currentTime >= targetTime && !this.showQuizModal && !this.quizShown) {
        this.showQuizModal = true;
        video.pause(); // 暂停视频
        this.quizShown = true; // 设置标志变量为true
        this.renderMathJax(); // 确保在弹窗显示后渲染 MathJax
      }
    },
    submitAnswer() {
      // 这里可以添加逻辑来检查用户答案是否正确
      // 例如，假设正确答案是“正确答案”
      if (this.userAnswer === this.correctAnswer) {
        alert('答案正确！');
      } else {
        alert('答案错误，请再试一次。');
      }
      this.showCorrectAnswer = true; // 显示正确答案
    },
    closeQuizModal() {
      this.showQuizModal = false;
      this.showCorrectAnswer = false; // 重置正确答案显示
      this.userAnswer = ''; // 重置用户答案
      this.$refs.MathClassroom.play(); // 继续播放视频
    },
    renderMathJax() {
      // 使用 MathJax 的标准 API 渲染数学公式
      this.$nextTick(() => {
        if (this.$MathJax && this.$MathJax.Hub) {
          if (this.$refs.question) {
            this.$MathJax.Hub.Queue(["Typeset", this.$MathJax.Hub, this.$refs.question]);
          }

          // 渲染选项
          this.options.forEach((option, index) => {
            if (this.$refs['option' + index]) {
              this.$MathJax.Hub.Queue(["Typeset", this.$MathJax.Hub, this.$refs['option' + index]]);
            }
          });

          // 渲染正确答案
          if (this.$refs.correctAnswer) {
            this.$MathJax.Hub.Queue(["Typeset", this.$MathJax.Hub, this.$refs.correctAnswer]);
          }
        } else {
          console.error('MathJax is not initialized');
        }
      });
    }
  }
};
</script>

<style scoped>
/* 添加样式 */
.quiz-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.quiz-modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
  text-align: center;
}

.quiz-modal input {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

.correct-answer {
  margin-top: 20px;
  text-align: left;
}

.correct-answer h3 {
  margin: 0 0 10px 0;
}

.correct-answer p {
  margin: 0;
}

.quiz-modal button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.quiz-modal button:hover {
  background-color: #0056b3;
}

.quiz-modal label {
  display: block;
  margin-bottom: 10px;
}
</style>