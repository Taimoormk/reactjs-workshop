import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createReduxStore } from './config';
import { ThemeProvider } from 'styled-components';
import { newTheme } from './components/theme';

const store = createReduxStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={newTheme}>
      <Provider store={store}>
        <MyApp />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
