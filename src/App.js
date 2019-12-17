import React from 'react';
import Navbar from './components/Navbar/Navbar.component';

const menuLinks = [
  { address: 'https://www.google.ro', name: 'Google' },
  { address: 'https://www.yahoo.com', name: 'Yahoo' }
];

function App() {
  return (
    <div className="App">
      <Navbar logo="Bellesa" menuItems={menuLinks} />
    </div>
  );
}

export default App;
