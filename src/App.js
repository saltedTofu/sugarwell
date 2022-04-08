import titleBG from './titleBG.png';
import Line from './line.png';
import Tap from './Tap.png';
import Logo from './logo.png';
import Sink from './sink.png';
import Sprinkler from './sprinkler.png';
import Vent from './vent.png'
import WaterSoftener from './waterSoftener.jpg';
import ProductImage from './productImage.png';
import Form from './form.png';
import Yang from './yang.jpg';
import Logo2 from './logo2.png';
import titleBG2 from './titleBG2.png';
import NiceMan from './niceMan.png'
import TruckMan from './TruckMan.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div id="headerContainer">
          <img id="logoImage" src={Logo2}/>
          <nav id="navLinks">
            <a data-text="ABOUT" href="#main">ABOUT</a>
            <a data-text="SERVICES" href="#main2">SERVICES</a>
            <a data-text="PRODUCTS" href="#products">PRODUCTS</a>
            <a data-text="CONTACT" href="#contact">CONTACT</a>
          </nav>
        <div>
        </div>
        <a data-text="GET A QUOTE">GET A QUOTE</a>
        </div>
      </header>
      <div id="title">
        <img id="titleBG" src={titleBG}/>
        <div id="titleName">
          <img id="titleLogo" src={Logo2}/>
          <h3>Quality Water Softeners, Professional Installation and Maintenance</h3>
          <img id="lineImage" src={Line}/>
          <button className='button'>Learn More</button>
          <div id="titleImages">
            <img src={NiceMan}/>
            <img src={TruckMan}/>
            <img src={Yang}/>
          </div>
        </div>
      </div>
      <div id="main">
        <div id="mainLeft">
          <h1>OUR VISION </h1>
          <p>Phasellus eu risus est. In nulla neque, vestibulum sed aliquet a, gravida ac augue. Mauris vehicula lacus lorem, non consectetur lorem placerat interdum. Morbi lacus lectus, vulputate nec molestie sit amet, pretium sit amet diam. Vestibulum est nisl, ornare id nibh sit amet, imperdiet auctor dui. Donec lorem erat, euismod elementum leo quis, bibendum commodo tortor. Pellentesque sollicitudin dictum lorem, non aliquet augue fermentum eu. Mauris dolor massa, condimentum ut ultricies vitae, rhoncus nec nisl. Aliquam erat volutpat. Aliquam erat volutpat. Maecenas lacinia cursus venenatis. Fusce at malesuada risus. Duis venenatis est eget urna eleifend varius. Suspendisse aliquam accumsan lacinia. Mauris vitae blandit sapien. Nunc fermentum pellentesque est sed blandit.</p>
        </div>
        <div id="mainRight">
          <h2>Why Do You Need A Water Softener?</h2>
          <p>water hard ooga boogaLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue tellus quis varius tempor. Nulla porta malesuada mi ac imperdiet. Ut blandit erat accumsan ligula finibus rutrum. Morbi vel massa vel nulla tincidunt accumsan et sed lectus. Cras ullamcorper ante mauris, et sodales nisl porta id. Integer sapien ante, gravida id faucibus nec, lacinia sed turpis. In hac habitasse platea dictumst. Quisque pellentesque orci nec mi placerat, sit amet ornare erat tincidunt. Curabitur vulputate eros quam, a venenatis dui ultrices vel. Fusce molestie eleifend nisl, id blandit nisl. Aliquam a fringilla sapien.</p>
          <p>Ut in congue mi. Duis ultrices sapien suscipit nisl tempus, eget volutpat nunc tempor. Nam ultricies egestas dolor vitae accumsan. Fusce consequat metus augue, eu laoreet turpis eleifend eu. Vestibulum sed auctor urna. Morbi tincidunt nibh nec vulputate bibendum. Vestibulum euismod dignissim erat, id porta nunc commodo in. Cras aliquet velit in odio aliquet posuere. Pellentesque vulputate eu turpis a bibendum. Duis quis tempor elit. Donec et lorem at nulla accumsan pulvinar sodales imperdiet erat. Etiam mollis mi eget nibh auctor, ut eleifend risus tempus.</p>
        </div>
      </div>
      
      <div id="main2">
        <div id="main2Left">
          <h2>What We Can Do For You</h2>
          <div id="services">
              <div className="serviceExample">
                <img id="tapImage" src={Tap}/>
                <p>Maintenance: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</p>
              </div>
              <div className="serviceExample">
                <img id="tapImage" src={Sprinkler}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</p>
              </div>
              <div className="serviceExample">
                <img id="tapImage" src={Vent}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</p>
              </div>
              <div className="serviceExample">
                <img id="tapImage" src={Sink}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</p>
              </div>
          </div>
        </div>
        <div id="main2Right">
          <img src={WaterSoftener} />
        </div>
      </div>
      <div id="products">
        <h1>Our Products</h1>
        <div className="productExample">
          <img src={ProductImage} />
          <div className="productDescription">
            <h3>Water Softener</h3>
            <p>The Pentair Water Softener is our premium, whole-house, on-demand salt-based water softening system.</p>
            <ul>
              <li>Effectively prevents hard water scale buildup in plumbing and appliances, helping to increase their efficiency and lifespan</li>
              <li>Enjoy softer skin, shinier hair, and softer, right-out-of-the-dryer laundry</li>
              <li>3 unique models to choose from to meet the demands of your home based on your home size (or number of bathrooms)</li>
            </ul>
          </div>
        </div>
        <div className="productExample">
          <img src={ProductImage} />
          <div className="productDescription">
            <h3>Water Purifier</h3>
            <p>The Pentair Water Softener is our premium, whole-house, on-demand salt-based water softening system.</p>
            <ul>
              <li>Effectively prevents hard water scale buildup in plumbing and appliances, helping to increase their efficiency and lifespan</li>
              <li>Enjoy softer skin, shinier hair, and softer, right-out-of-the-dryer laundry</li>
              <li>3 unique models to choose from to meet the demands of your home based on your home size (or number of bathrooms)</li>
            </ul>
          </div>
        </div>
        <div className="productExample">
          <img src={ProductImage} />
          <div className="productDescription">
            <h3>Water Filter</h3>
            <p>The Pentair Water Softener is our premium, whole-house, on-demand salt-based water softening system.</p>
            <ul>
              <li>Effectively prevents hard water scale buildup in plumbing and appliances, helping to increase their efficiency and lifespan</li>
              <li>Enjoy softer skin, shinier hair, and softer, right-out-of-the-dryer laundry</li>
              <li>3 unique models to choose from to meet the demands of your home based on your home size (or number of bathrooms)</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="contact"> 
        <form name="contact" method="POST" data-netlify="true" id="contactForm">
          <img src={Form}/>
          <h2>Request a Free Quote</h2>
          <input type="hidden" name="form-name" value="contact" />
          <p>Name </p>
          <input type="text" name="name" required/>
          <p>Email</p>
          <input type="email" name="email" required/>
          <p>Phone Number</p>
          <input type="text" name="phoneNumber" />
          <p>What Products/Services are you interested in?</p>
          <textarea rows="4" cols="50" required name="message"/>
          <br></br>
          <button type="submit" className="button" id="submitForm">Send</button>
        </form>
        <div id="contactUs">
          <h2>Contact Me Directly</h2>
          <img src={Yang} />
          <p>1111 Main St</p>
          <p>Houston</p>
          <p>Texas</p>
          <p>77478</p>
        </div>
      </div>
      <footer>
          yo
      </footer>
    </div>
  );
}


export default App;
