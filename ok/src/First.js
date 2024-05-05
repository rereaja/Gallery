import React from "react";
import {Routes, Route} from 'react-router-dom'

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Notfound from "./Pages/NotFound";
import Skills from "./Pages/Skills";
import Gallery from './Pages/Gallery'
import Cart from "./Pages/Cart";
import Pegawai from './Pegawai';


const First = () => {
    return(
        <Routes>  
            <Route exact path ="/" Component={Home} />
            <Route path="/gallery" Component={Gallery}/>
            <Route path ="/about" Component={About} />
            <Route path ="/contact" Component={Contact} />
            <Route path ="/skills" Component={Skills} />
            <Route path ="/cart" Component={Cart} />
            <Route path ="/pegawai" Component={Pegawai} />
            <Route path ="*" Component={Notfound} />
        </Routes>
    )
}

export default First