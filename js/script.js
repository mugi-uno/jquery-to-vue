import './mount';
import $ from 'jquery';
import { readData } from './reader';
import {
  toggleTodoList,
  addTodo,
  removeTodo
} from './writer';
import { mutations } from './ObservableStore';

function updateAll() {
  const { count, nextTodoText } = readData();

  mutations.updateNextTodoText(nextTodoText);
  mutations.updateTodoCount(count);

  toggleTodoList(count);
}
$(function () {
  $('#addTodo').on('click', function () {
    addTodo();
    updateAll();
  });

  $('#todoList').on('input', '.todo:eq(0)', function () {
    updateAll();
  });

  $('#todoList').on('click', '.delete', function () {
    removeTodo(this);
    updateAll();
  });

  updateAll();
});
