import React from 'react';
import "./Common.css";
import { NavLink } from 'react-router-dom';
import web from "../src/images/home1.jpg";
import Common from './Common';

const Home = () => {
    return (
        <>
    <Common 
        name='Grow your Business with'
        imgsrc={web}
        visit='/service'
        btname='Get Started'
    />
        </>
    )
}

export default Home;
