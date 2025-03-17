import './App.css';
import Header from './Component/Header';
import Account from './Component/Account';
import Sidebar from './Component/Sidebar';
import Body from './Component/Body';

function App() {
  return (
    <div className="App">
      <Header name='Haut' />
      <Account name='Account' />
      <Sidebar name='Sidebar' />
      <Body name='Body' />
    </div>
  );
}

export default App;
