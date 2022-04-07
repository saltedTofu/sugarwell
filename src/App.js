import logo from './logo.svg';
import titleBG from './titleBG.png';
import Line from './line.png';
import Tap from './Tap.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <form name="contact" method="POST" data-netlify="true" id="contactForm">
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
      <header>
        <div>Logo</div>
        <nav id="navLinks">
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
        </nav>
        <div>
        </div>
        <div>
          Form Link
        </div>
      </header>
      <div id="title">
        <img id="titleBG" src={titleBG}/>
        <div id="titleName">
          <h1>SUGARWELL</h1>
          <p>tagline asdasdsad dasdsadasd</p>
          <img id="lineImage" src={Line}/>
          <button className='button'>Learn More</button>
        </div>
      </div>
      <div id="main">
        <div id="mainLeft">
          <h2>OUR VISION </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac. Nam id rhoncus elit. Sed quis massa ex. Maecenas sed tortor sit amet neque rutrum interdum. Proin ac lacus augue.</p>
        </div>
        <div id="mainRight">
          <h2>What We Can Do For You</h2>
            <div id="services">
                <div className="serviceExample">
                  <img id="tapImage" src={Tap}/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</p>
                </div>
                <div className="serviceExample">
                  <img id="tapImage" src={Tap}/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</p>
                </div>
                <div className="serviceExample">
                  <img id="tapImage" src={Tap}/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</p>
                </div>
                <div className="serviceExample">
                  <img id="tapImage" src={Tap}/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</p>
                </div>
            </div>
        </div>
      </div>
      
      <div id="main2">
        <div id="main2Left">
          <h2>About Water Softening</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac. Nam id rhoncus elit. Sed quis massa ex. Maecenas sed tortor sit amet neque rutrum interdum. Proin ac lacus augue.</p>
        </div>
        <div id="main2Right">
          <h2>Pics</h2>
        </div>
      </div>
      <div id="products">
        <h2>Products</h2>
      </div>
    </div>
  );
}


export default App;
