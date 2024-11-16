import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { checkAuth } from './entities/user/model/action';
import { fetchFavorites } from './entities/offer/model/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuth());
store.dispatch(fetchFavorites());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
