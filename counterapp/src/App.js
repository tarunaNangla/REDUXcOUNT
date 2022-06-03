import { useDispatch, useSelector } from "react-redux";
import { incrementCountAction } from "./Redux/action";
import './App.css';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementCountAction(1))}>ADD</button>
      <button onClick={() => dispatch(incrementCountAction(-1))}>REDUCE</button>
        
      </header>
    </div>
  );
}

export default App;