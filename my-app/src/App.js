import { Button } from '@chakra-ui/react';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Video from './Components/Video';
import Upload from './Components/Upload';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App(){
  return (
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/videos' element={<Video />}  />
      <Route path='/upload' element={<Upload />}  />
      <Route path='/login' element={<Login />}  />
      <Route path='/signup' element={<Signup />}  />
    </Routes>
    <Footer />
  </Router>
    
    
  )
}


export default App;