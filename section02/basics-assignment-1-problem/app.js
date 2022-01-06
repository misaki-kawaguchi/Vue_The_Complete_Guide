const app  = Vue.createApp({
  data() {
    return {
      name: 'Misaki Kawaguchi',
      age: 30,
      imgUrl: 'https://jp.vuejs.org/images/logo.svg'
    }
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    }
  }
});

app.mount('#assignment');