import React from 'react'
import { Scroller } from 'react-fully-scrolled';
import About from './About/About';
import Home from './Home/Home';
import ComingSoon from './ComingSoon/ComingSoon';
import Feature from './Feature/Feature';
import Information from './Information/Information';
import ScndRange from './ScndRange/ScndRange';
import Footer from './Footer/Footer';

export default function Landing() {
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
        <Information/>
        <Feature />
        <ScndRange/>
        <ComingSoon/>
        <Footer/>
      </Scroller>
    </>
  )
}
