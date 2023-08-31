import React from "react";
import heroimg from '../assets/photo-grid.png';

export default function (){
    return (
        <section className="hero">
             <img src={heroimg} alt="img" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}