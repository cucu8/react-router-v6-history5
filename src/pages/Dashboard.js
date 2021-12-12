import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            {/* bu bilgi yani location.state bilgisi ilgili path'den buraya geldiğimizde gözükür. */}
            info that i gpt here is Dashboard
            <p>Price : {location.state.price}</p>
            <p>Course Name : {location.state.courseName }</p>
        </div>
    );
};

export default Dashboard;