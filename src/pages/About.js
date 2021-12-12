import React from 'react';
import { useLocation } from 'react-router';

const About = () => {
    let location = useLocation()
    console.log(location)
    return (
        <div>
           About 
        </div>
    );
};

export default About;