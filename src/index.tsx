import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import { BaseForm } from './component/from';
import Routes from './router';
import 'antd/dist/antd.css';

ReactDOM.render(
  <div>
    <Routes />
    {/* <BaseForm fromType="form_1" /> */}
  </div>
,
document.getElementById('tomato-work') as HTMLDivElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
