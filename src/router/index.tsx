import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import CONFIG from '@/config';
import routesMap from './routes';

const Routes: React.FC = function () {
  return  (
    <div>
      <Router basename={CONFIG.baseURL}>
        <Switch>
          {
            routesMap.map((route, idx) =>(
              // <PrivateRoute {...route} key={idx} />
            ))
          }
        </Switch>
      </Router>
    </div>
  )
}

export default Routes