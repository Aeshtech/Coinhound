import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './App2.css';
import Dashboard from './components/MainView/Dashboard/Dashboard';
import ScanToken from './components/MainView/ScanToken/ScanToken';
import ScanWallet from './components/MainView/ScanWallet/ScanWallet';
import Splash from './components/MainView/Splash';
import Navbar from './components/Navbar/Navbar';
import Context from './Contexts/Context';
import './responsive.css';
// import About from './components/About/About';
// import Feature from './components/Feature/Feature';
// import Home from './components/Home/Home';
// import Information from './components/Information/Information';
// import ScndRange from './components/ScndRange/ScndRange';
// import { Scroller } from 'react-fully-scrolled';
// import ComingSoon from './components/ComingSoon/ComingSoon';
// import Footer from './components/Footer/Footer';

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(true);

  return (
    <>
      {/* <Scroller
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
      </Scroller> */}

      {/* -------------Dapp-------------- */}
      <Router>
        {/* <Routes>
          <Route path="/" exact element={<h1>Index</h1>} />
        </Routes> */}
        <Context.Provider value={{ isWalletConnected,setIsWalletConnected }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Splash/>} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/preScanWallet" exact element={<ScanWallet />} />
            <Route path="/scanToken" exact element={<ScanToken />} />
          </Routes>
        </Context.Provider>
      </Router>


    </>
  );
}

export default App;
