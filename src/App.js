import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact"/>
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}


export default App;
