var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event){
      // alert();
      // タスクが空白だったら処理を終わる
      if(this.newItem == '') return;
      var todo = {
        item: this.newItem,
        isDone: false
      };

      this.todos.push(todo);
      this.newItem = '';
    },
    deleteItem: function(index) {
      // alert(index);
      this.todos.splice(index, 1)
    }
  }

})
