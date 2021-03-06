const app = Vue.createApp({
  // 常にオブジェクトを返す
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      // courseGoalB: '<h2>Master Vue and  build amazing apps!</h2>',
      courseGoalB: 'Master Vue and  build amazing apps!',
      vueLink: 'https://jp.vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');