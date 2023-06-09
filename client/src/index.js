import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from './context/UserContextProvider';
import { DataContextProvider } from './context/DataContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';


const container = document.getElementById("root")

const root = createRoot(container)

root.render(
  <UserContextProvider>
    <DataContextProvider>
      <Router>
        <App />
      </Router>
    </DataContextProvider>
  </UserContextProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
