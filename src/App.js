import logo from './logo.svg';
import './App.css';
import UseState from './Components/UseStateHook/UseState';
import UseReducerHook from './Components/UseReducerHook/UseReducerHook';
import UseContextHook from './Components/UseContextHook/UseContextHook';
import UseRefHook from './Components/UseRefHook/UseRefHook';
import UseRefForPreviousState from './Components/UseRefHook/UseRefForPreviousState';

function App() {
  return (
    <>
      {/* <UseState /> */}
      {/* <UseReducerHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseRefHook /> */}
      <UseRefForPreviousState />
    </>
  );
}

export default App;
