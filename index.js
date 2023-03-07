/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import codePush from "react-native-code-push";
import {store, persistor} from 'services/redux/store';
import App from './src/app/App';
import {name as appName} from './app.json';

const ReduxProvider = () => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );

  MyApp = codePush (ReduxProvider)

  
AppRegistry.registerComponent(appName, () => MyApp);
