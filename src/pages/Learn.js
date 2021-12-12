import React from 'react';
import { useLocation } from "react-router";
import { Link ,Outlet} from 'react-router-dom';

const Learn = () => {
      let location = useLocation();
      console.log(location);
    return (
      <div>
            <h1>Learn</h1> 
            <Link to="/learn/courses">see Courses</Link>
        This courses listed here
       <Outlet/>
      </div>
    );
};

export default Learn;