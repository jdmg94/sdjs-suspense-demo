import React, { Suspense } from 'react';
import Loader from './components/Loader';
import { Route, Switch } from 'react-router-dom';

// Single bundle
// import Home from './containers/Home';
// import WithHooks from './containers/WithHooks';
// import WithClasses from './containers/WithClasses';
// import WithEditing from './containers/WithEditing';
// import WithSuspense from './containers/WithSuspense';

// Code Split
const Home = React.lazy(() => import('./containers/Home'));
const WithHooks = React.lazy(() => import('./containers/WithHooks'));
const WithClasses = React.lazy(() => import('./containers/WithClasses'));
const WithEditing = React.lazy(() => import('./containers/WithEditing'));
const WithSuspense = React.lazy(() => import('./containers/WithSuspense'));

const App  = () => (
  <Suspense
    maxDuration={700}
    fallback={<Loader />}
  >
    <Switch>
      <Route 
        exact 
        path="/with-classes" 
        component={WithClasses} 
      />
      <Route 
        exact 
        path="/with-hooks" 
        component={WithHooks} 
      />
      <Route 
        exact 
        path="/with-suspense" 
        component={WithSuspense}
      />
      <Route 
        exact
        path="/with-editing"
        component={WithEditing}
      />
      <Route component={Home} />     
    </Switch>
  </Suspense>
);  

export default App;
