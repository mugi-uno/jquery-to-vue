import './mount';
import $ from 'jquery';
import {
  addTodo,
  removeTodo
} from './writer';

$(function() {
  $('#addTodo').on('click', function() {
    addTodo();
  });

  $('#todoList').on('click', '.delete', function() {
    removeTodo(this, $('#todoList').find('.delete').index(this));
  });
});
