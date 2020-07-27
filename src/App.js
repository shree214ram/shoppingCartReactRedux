import React from "react";
import Home from "./Components/Home/Home";
import "./App.css";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore();


function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
