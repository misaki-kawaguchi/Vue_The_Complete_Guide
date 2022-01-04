const app = Vue.createApp({
  // 常にオブジェクトを返す
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://jp.vuejs.org/'
    };
  },
});

app.mount('#user-goal');