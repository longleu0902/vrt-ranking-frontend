import logo from './logo.svg';
import './App.css';
import { Layout } from "../src/layout/Layout";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
