import EventBus, {
  ADD_TODO,
  REMOVE_TODO
} from './EventBus';

export const removeTodo = (_$element, index) => {
  EventBus.$emit(REMOVE_TODO, index);
};

export const addTodo = () => {
  EventBus.$emit(ADD_TODO);
};
