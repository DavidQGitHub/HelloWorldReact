import logo from './logo.svg';
import './App.css';
import ExampleComponent, {AnotherComponent} from './components/ExampleComponent';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <ExampleComponent />
      <AnotherComponent />
      <Greeting name="DQ" age="49" />
    </div>
  );
}

export default App;
