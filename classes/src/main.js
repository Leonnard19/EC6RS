class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.todos = [];
  }

  addTodo() {
    this.todos.push('Novo todo');
    console.log(this.todos);
  }
}

const MinhaLista = new TodoList();
const data = '19/05/1995';

document.getElementById('novotodo').onclick = () => {
  MinhaLista.addTodo();
};
document.getElementById('novadata').onclick = () => {
  MinhaLista.add(data);
};
