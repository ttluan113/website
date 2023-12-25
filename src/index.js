import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';


import { PrivateRoutes, publicRoutes } from './Components/Container/Route/Routes';

import { Provider } from "react-redux";
import {store} from './redux/stote';
import { persistor  } from './redux/stote';
import { PersistGate } from 'redux-persist/integration/react';
import Dashboard from './Components/layouts/admin/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <Routes>
      {publicRoutes.map((route , index) => {
        const Page = route.component;
       return <Route  key={index} path={route.path} element={<Page/>}/>
       })}
      <Route element={<PrivateRoutes/>}>
      <Route path='/admin' element={<Dashboard />} />
      </Route>
      </Routes>
    </Router>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
