import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Destination from './Component/Destination'
import Crew from './Component/Crew';
import Nav from './Component/Navbar';
import Technology from './Component/technology';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/destination' element={ <Destination /> } />
          <Route path='/crew' element={ <Crew /> } />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </div>
    </Router> 
  );
};

const Home = () => (
  <div className="home" style={{ backgroundImage: "url(/background-home-desktop.jpg)", 
    backgroundPosition: 'center', 
    backgroundSize: 'cover',
    minWidth: '100vw',
    minHeight: '100vh',
    marginTop: '-106px'
  }}>
    
   <div className="hero">
     <div className="content">
        <h3> So, you want to travel to </h3>
        <h1> Space </h1>
        <p> Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
        </p>
     </div>

     <div className="content_design">
        <h1> Explore </h1>
     </div>
   </div>
  </div>
);

export default App;
