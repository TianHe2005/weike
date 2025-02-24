<template>
    <div>
      <h1>学生视图</h1>
      <button @click="enterClassroom">进入课堂</button>
      <button @click="enterPractice">进入练习</button>
      <button @click="myLearning">我的学习</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      enterClassroom() {
        // 实现进入课堂逻辑
        console.log('进入课堂');
      },
      enterPractice() {
        // 实现进入练习逻辑
        console.log('进入练习');
      },
      myLearning() {
        // 实现我的学习逻辑
        console.log('我的学习');
      }
    }
  };
  </script>