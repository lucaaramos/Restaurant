import React from "react";
import Carrusel from "../components/carrusel";
import Navbar from "../components/navbar";

export default function Home() {
    return(
        <div>
            <header>
                <h1>Urbano Comida Americana</h1>
                <Navbar/>     
            </header>
            <div>
                <Carrusel/>
            </div>
            
        </div>
    )
};
