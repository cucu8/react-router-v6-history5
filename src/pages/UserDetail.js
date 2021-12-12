import React from 'react';
import { useLocation } from 'react-router';

const UserDetail = () => {
       let location = useLocation();
       console.log(location);
    return (
        <div>
            User Detail
        </div>
    );
};

export default UserDetail;