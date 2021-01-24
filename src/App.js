import './App.css';
import CountComponent from './components/CountComponent';
import { CountProvider } from './provider/CountProvider';

function App() {
  return (
    <CountProvider>
    <div className="App">
      <h2>Hooks + Context = Forget Redux</h2>
      <hr/>
      <CountComponent/>
    </div>
    </CountProvider>
  );
}

export default App;
