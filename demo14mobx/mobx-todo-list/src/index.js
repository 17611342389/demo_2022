import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { observable, action } from "mobx";
import { observer } from "mobx-react";
let appState = observable({ timer: 0 });
setInterval(
  action(() => {
      appState.timer += 1;
  }),
  1000
);
appState.resetTimer = action(() => {
  appState.timer = 0;
});
let AAA = observer(() => {
  return (
    <div className="App">
      <div>{appState.timer}</div>
      <div onClick={()=> appState.resetTimer()}>点</div>
       <App/>
    </div>
  );
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AAA  appState={appState}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

