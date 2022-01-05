const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullName() {
      if(this.name === '') {
        console.log('Running again...');
        return '';
      } 
      return this.name + ' ' + 'kawaguchi';
    },
  },
  methods: {
    outputFullName() {
      if(this.name === '') {
        console.log('Running again...');
        return '';
      } 
      return this.name + ' ' + 'kawaguchi';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
