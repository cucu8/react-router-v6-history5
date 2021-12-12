import React from 'react';
import { useLocation } from 'react-router';
const UserDetail2 = () => {
       let location = useLocation();
       console.log(location);
    return (
        <div>
            User Detail 2
        </div>
    );
};

export default UserDetail2;