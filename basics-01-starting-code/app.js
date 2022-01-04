const app = Vue.createApp({
  // 常にオブジェクトを返す
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
    };
  },
});

app.mount('#user-goal');