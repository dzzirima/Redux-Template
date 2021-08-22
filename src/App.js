
import './App.css';
import { useSelector } from 'react-redux'
import { Counter } from './components/Counter/Counter';

function App() {
 const count = useSelector(state => state.counter.count)

  return (
    <div className="App">
      <h1>The Counteris {count} </h1>
      <Counter/>
      
    </div>
  );
}

export default App;
