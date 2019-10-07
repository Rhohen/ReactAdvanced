import React from 'react';
import './App.css';
import MainList from './Components/MainList';
import { Provider } from "react-redux"
import configureStore from './Components/utils/configureStore.js';

export const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h3>Integration Week End</h3>
        </header>
        <MainList/>
      </div>
    </Provider>

  );
}

export default App;
