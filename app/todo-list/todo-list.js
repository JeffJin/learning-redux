/**
 * Created by Jeff on 4/25/2016.
 */
/*
 * Open the console
 * to see that the tests pass.
 */

require('babel-polyfill');
var expect = require('expect');
var deepFreeze = require('deep-freeze');

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ];
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

testAddTodo();
console.log('All tests passed.');
