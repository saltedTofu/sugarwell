import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form name="waterForm" method="POST" data-netlify="true">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text"></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}


export default App;
