import $ from 'jquery';
import EventBus, {
  ADD_TODO,
  REMOVE_TODO
  } from './EventBus';

export const writeNextTodo = (nextTodoText) => {
  $('#nextTodo').text('次のTODO: ' + nextTodoText);
};

export const writeTodoCount = (count) => {
  $('#todoCount').text('(全' + count + '件)');
};

export const toggleTodoList = (count) => {
  if (count) {
    $('#todoList').show();
  } else {
    $('#todoList').hide();
  }
};

export const toggleTodoEmpty = (count) => {
  if (count) {
    $('#todoEmpty').hide();
  } else {
    $('#todoEmpty').show();
  }
};

export const removeTodo = ($element, index) => {
  $element.closest('.todo').remove();

  EventBus.$emit(REMOVE_TODO, index);
};

export const addTodo = () => {
  var wrapper = $('<div>');
  wrapper.addClass('todo');

  var input = $('<input>');
  input.attr('type', 'text');

  var deleteButton = $('<button>');
  deleteButton.addClass('delete').text('削除');

  wrapper.append(input);
  wrapper.append(deleteButton);
  $('#todoList').append(wrapper);

  EventBus.$emit(ADD_TODO);
};
