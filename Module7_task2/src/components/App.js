import React from 'react';
import Header from './Header';
import Navigation from './Nav';
import Article from "./Article";
import Section from './Section';
import Footer from './Footer';

import browsersData from '../data/browsers.json';

const App = () => (
  <div>
    <Header />
    <Navigation />
    <Article/>
    <Section browsers={browsersData} />
    <Footer /> 
  </div>
);

export default App;
