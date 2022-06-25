import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();

/* Forma Larga */
todoList.todos.forEach(todo => crearTodoHTML(todo));

/* Forma Corta */
// todoList.todos.forEach(crearTodoHTML);


