import React from 'react'
import './App.css';
import'./index.css';


import { Blog, Footer, Header, Mfeatures, Possibility,IntroJRS,Pricing,Team} from './containers';
import { CTA, Brand, Navbar} from './components';

const App = () => {
  return (
    <div classname="App">
      <div className="gradient__bg">
            <Navbar />
            <Header />
      </div>

      <Brand />
      <IntroJRS />
      <Mfeatures />
      <Possibility />
      <CTA />
      <Pricing />
      <Blog />
      <Team />
      <Footer />
     
      
    </div>
  )
}

export default App
