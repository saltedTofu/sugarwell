import Logo2 from '../../logo2.png';
import './header.css'

function Header(){
    return(
      <header>
        <img id="logoImage" alt="aquatech logo" src={Logo2}/>
        <nav id="navLinks">
          <a data-text="ABOUT" href="#main">ABOUT</a>
          <a data-text="SERVICES" href="#main2">SERVICES</a>
          <a data-text="PRODUCTS" href="#products">PRODUCTS</a>
          <a data-text="CONTACT" href="#contactSection">CONTACT</a>
        </nav>
        <div>
        </div>
        <a data-text="GET A QUOTE" href="#contactSection" >GET A QUOTE</a>
      </header>
    )
}

export default Header;