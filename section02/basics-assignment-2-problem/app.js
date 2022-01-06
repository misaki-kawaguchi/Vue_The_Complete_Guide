const app = Vue.createApp({
  data() {
    return {
      outputName: '',
      enterName: '',
      name: ''
    }
  },
  methods: {
    // 1)
    showAlert() {
      alert('alert');
    },
    // 2)
    setOutput(event) {
      this.outputName = event.target.value;
    },
    // 3)
    inputText(event) {
      this.name = event.target.value;
    },
    enterOutput() {
      this.enterName = this.name;
    }
  }
});

app.mount("#assignment");