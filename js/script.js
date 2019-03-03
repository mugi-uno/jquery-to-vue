import './mount';
import $ from 'jquery';
import { readData } from './reader';
import {
  toggleTodoList,
  addTodo,
  removeTodo
} from './writer';
import EventBus, {
  UPDATE_NEXT_TODO_TEXT,
  UPDATE_TODO_COUNT
} from './EventBus';

function updateAll() {
  const { count, nextTodoText } = readData();

  EventBus.$emit(UPDATE_NEXT_TODO_TEXT, nextTodoText);
  EventBus.$emit(UPDATE_TODO_COUNT, count);

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
