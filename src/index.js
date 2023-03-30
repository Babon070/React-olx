import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './language/i18next'
import { BrowserRouter } from 'react-router-dom';
import Loader from './component/loader/Loader';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
const App = lazy(()=> import ("./App"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loader/>}>
      <Provider store={store}>
          <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
