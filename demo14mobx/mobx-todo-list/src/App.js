import logo from './logo.svg';
import './App.css';

import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { useEffect } from 'react';

let aaa = observable({
  a: 0
});
setInterval(action(() => {
  aaa.a += 1
}), 1000)
let A = observer(() => {
  return (
    <div className="App">
      <h1>{aaa.a}</h1>

    </div>
  );
});

export default A
