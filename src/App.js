import React from 'react';
import Home from './Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/service" element={<Service />}></Route>
        <Route path="*" element={<Error />}></Route>
        {/* <Route path ="*" element={<Home />}></Route>  */}


      </Routes>

    </>
  );
}

export default App;
