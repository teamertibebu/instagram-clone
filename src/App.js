import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';

function App() {
  axios.get('/ping').then((res) => {
    console.log('DATA:', res.data);
  });

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
