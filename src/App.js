
import './App.css';
import Header from "./Header";
import Main from './Main';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <>
    <section id='intro-section'>
        <Header />
    </section>
    <section id='portfolio-section'>
        <Main />
    </section>
    <section id='about-section'>
       <About />
    </section>
    <section id='contact-section'>
      <Footer />
    </section>
    </>
  )
}

export default App;
