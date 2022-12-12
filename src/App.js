import './App.css';
import './responsive.css';
import About from './components/About/About';
import Feature from './components/Feature/Feature';
import Home from './components/Home/Home';
import Information from './components/Information/Information';
import ScndRange from './components/ScndRange/ScndRange';
import { Scroller } from 'react-fully-scrolled';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Scroller
        curPage={1}
        onBeforeScroll={(from, to) => { }}
        onAfterScroll={(page) => { }}
        isEnabled={true}
      >
        <Home />
        <About />
        <Information />
        <Feature />
        <ScndRange />
        <ComingSoon/>
        <Footer/>
      </Scroller>
    </>
  );
}

export default App;
