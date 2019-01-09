import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
                                    window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// import { createStore } from 'redux';

// // функция для управления данными store: (reducer)
// function playlist(state = [], action) {
//   if (action.type === 'ADD_TRACK') {
//     return [
//       ...state,
//       action.payload
//     ];
//   }
//   return state;
// }

// // создать store:
// const store = createStore(playlist);

// // получить состояние:
// console.log(store.getState());

// // подписаться на store: (получаем состояние при каждом изменении store)
// store.subscribe(() => {
//   console.log('subscribe', store.getState());
// });

// // функция, меняющая значение в store:
// store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
// store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });
