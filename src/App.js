import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState/UseState';
import { UseReducer } from './components/UseReducer/UseReducer';
import { ObjectUseSate } from './components/ImmutableState/ObjectUseState';
import { ArrayUseState } from './components/ImmutableState/ArrayUseState';
import { Child } from './components/ParentChild/Child';
import { Parent } from './components/ParentChild/Parent';

function App() {
  return (
    <div className="App">
      {/* <UseReducer></UseReducer> */}
      {/* <ObjectUseSate></ObjectUseSate> */}
      {/* <ArrayUseState></ArrayUseState> */}
      <Parent></Parent>
    </div>
  );
}

export default App;
