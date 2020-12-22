import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {store, persistor} from "./store"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import './i18n';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
import setAuthToken from "./utils/setAuthToken"
import jwt_decode from "jwt-decode";
import {setCurrentUser} from "./store/action/actions"

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);

	store.dispatch(setCurrentUser(decoded));   
}
ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root'));
// serviceWorker.unregister();
