import React from 'react';

import RowsList from './components/rowsList/RowsList'
import Banner from './components/banner/Banner'
import NavBar from './components/navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowsList />
    </div>
  );
}

export default App;
