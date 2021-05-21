import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState/UseState';
import { UseReducer } from './components/UseReducer/UseReducer';
import { ObjectUseSate } from './components/ImmutableState/ObjectUseState';
import { ArrayUseState } from './components/ImmutableState/ArrayUseState';

function App() {
  return (
    <div className="App">
      {/* <UseReducer></UseReducer> */}
      {/* <ObjectUseSate></ObjectUseSate> */}
      <ArrayUseState></ArrayUseState>
    </div>
  );
}

export default App;
