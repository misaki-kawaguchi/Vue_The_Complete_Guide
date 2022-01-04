const app = Vue.createApp({
  // 常にオブジェクトを返す
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://jp.vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    }
  }
});

app.mount('#user-goal');