import Vue from 'vue';

const EventBus = new Vue();

export default EventBus;

export const UPDATE_NEXT_TODO_TEXT = 'UPDATE_NEXT_TODO_TEXT';
export const UPDATE_TODO_COUNT = 'UPDATE_TODO_COUNT';
