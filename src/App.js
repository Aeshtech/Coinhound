import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './App2.css';
import Landing from './components/Landing/Landing';
import Dashboard from './components/MainView/Dashboard/Dashboard';
import ScanToken from './components/MainView/ScanToken/ScanToken';
import ScanWallet from './components/MainView/ScanWallet/ScanWallet';
import Splash from './components/MainView/Splash';
import Context from './Contexts/Context';
import './responsive.css';
// import About from './components/About/About';
// import Feature from './components/Feature/Feature';
// import Home from './components/Home/Home';
// import Information from './components/Information/Information';
// import ScndRange from './components/ScndRange/ScndRange';
// import ComingSoon from './components/ComingSoon/ComingSoon';
// import Footer from './components/Footer/Footer';

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(true);
  const [user] = useState({ userData: "something", auth: true, token: null });

  // useEffect(() => {
  //   if (user?.auth) {
  //     setUser(user => ({
  //       ...user,
  //       auth: true,
  //       userData: JSON.parse(localStorage.getItem('userData')),
  //       token: JSON.parse(localStorage.getItem('token'))
  //     }))
  //   } else if (localStorage.getItem('userData')) {
  //     setUser(user => ({
  //       ...user,
  //       auth: true,
  //       userData: JSON.parse(localStorage.getItem('userData')),
  //       token: JSON.parse(localStorage.getItem('token'))
  //     }))
  //   }
  // }, [user?.auth]);

  return (
    <>


      {/* -------------Dapp-------------- */}
      <Router>
        <Routes>
        </Routes>
        <Context.Provider value={{ isWalletConnected, setIsWalletConnected }}>
          <Routes>
            <Route path="/" exact element={<Landing />} />
            {user?.auth && user?.userData && (
              <>
                <Route path="/splash" exact element={<Splash />} />
                <Route path="/dashboard" exact element={<Dashboard />} />
                <Route path="/preScanWallet" exact element={<ScanWallet />} />
                <Route path="/scanToken" exact element={<ScanToken />} />
              </>
            )}
          </Routes>
        </Context.Provider>
      </Router>


    </>
  );
}

export default App;
