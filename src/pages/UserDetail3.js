import React from 'react';
import { useLocation, useParams } from 'react-router';

const UserDetail3 = () => {
    const parametre = useParams()
    console.log(parametre)
    //! location ile hangi path'e geldiğimiz bilgisini alabiliriz.
    const location = useLocation()
    console.log(location)

    return (
      <div>
            User Detail 3
            <p>path^den gelen parametre  parametre :{parametre.userId} </p>
      </div>
    );
};

export default UserDetail3;