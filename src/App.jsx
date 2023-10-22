import { useState, useEffect } from 'react';
import {  Route, BrowserRouter, Routes, } from 'react-router-dom';
import Loading from './componenets/Loading/Loading';
import Navbar from "./componenets/Navbar/Navbar"
import Work from "./pages/Work/Work"
import About from "./pages/About/About"
import Footer from "./componenets/Footer/Footer"
import  './App.css'

const App = () => {

 const [loading, setLoading] = useState(false);


   useEffect(() => {
       
        const loadData = async () => {
 
            // Wait for two second
            await new Promise((r) => setTimeout(r, 1000));
 
            // Toggle loading state
            setLoading((loading) => !loading);
        };
 
        loadData();
    }, [])

 
  return (

    <BrowserRouter>
    <>
    {loading && <Loading />}
     <Navbar/>
    </>

    <Routes>
    <Route path="/" element={<Work/>}/>
    <Route path="/about" element={<About/>}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
