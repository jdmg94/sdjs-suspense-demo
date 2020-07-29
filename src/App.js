import React, { Suspense } from 'react';
import Loader from './components/Loader';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

// Code Split
const WithHooks = React.lazy(() => import('./containers/WithHooks'));
const WithSuspense = React.lazy(() => import('./containers/WithSuspense'));

const App = () => (
	<Layout>
		<Suspense fallback={<Loader />}>
			<Switch>
				<Route exact path="/with-hooks" component={WithHooks} />
				<Route exact path="/with-suspense" component={WithSuspense} />
				<Route component={Home} />
			</Switch>
		</Suspense>
	</Layout>
);

export default App;
