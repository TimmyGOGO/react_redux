import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// таким образом composeWithDevTools добавляет автоматически devtools для включения плагина 
// redux devtools и при этом можно добавить еще middleware через запятую:
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// const history = syncHistoryWithStore(Route.hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    {/* <Router history={Route.hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/tracks/:id" component={Track}/>
    </Router> */}
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
