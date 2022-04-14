import Header from './components/Header/header';
import Title from './components/Title/title';
import Main from './components/Main/main';
import Main2 from './components/Main2/main2';
import Products from './components/Products/products';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Main />
      <Main2 />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
