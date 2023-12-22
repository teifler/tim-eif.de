import './App.css';

import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
          <Home />
          <About />
        </div>
      </header>
    </div>
  );
}

export default App;
