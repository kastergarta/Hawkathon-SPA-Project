import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { datadogLogs } from '@datadog/browser-logs';

datadogLogs.init({
    clientToken: 'pub9aab0674ec0de513e362c78bb6d6c011',
    datacenter: 'us',
    forwardErrorsToLogs: true,
    sampleRate: 100
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
