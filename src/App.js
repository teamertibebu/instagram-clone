import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import MyDropZone from './components/DropZone.jsx';
import Post from './components/Post.jsx';

function App() {
  axios.get('/ping').then((res) => {
    console.log('DATA:', res.data);
  });

  return (
    <div className="App">
      <Navbar />
      <Post />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MyDropZone />
    </div>
  );
}

export default App;
