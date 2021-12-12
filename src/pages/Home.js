import React from 'react';
import { useLocation } from 'react-router';

const Home = () => {
       let location = useLocation();
       console.log(location);
    return (
        <div>
          Home  
        </div>
    );
};

export default Home;