import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

const history = createBrowserHistory();

// таким образом composeWithDevTools добавляет автоматически devtools для включения плагина 
// redux devtools и при этом можно добавить еще middleware через запятую:
const store = createStore(createRootReducer(history), 
                          composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history))));



ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </>
    </ConnectedRouter>
    {/* <Route path="/about" component={About}/>
      <Route path="/tracks/:id" component={Track}/> */}
    {/*</Router> */}
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
