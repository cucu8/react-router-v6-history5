import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
const User = ({ isLoggedIn }) => {
  let location = useLocation();
  const navigate = useNavigate();
  console.log(location);
    console.log(isLoggedIn);

    //! eğer login olan kullanıcı yok ise iki türlüde yönlendirme yapabiliriz... 
    
  //   if (!isLoggedIn) {
  //   return <Navigate to="/"/>
  //   }
    
    // useEffect(() => {
    //     if (!isLoggedIn) {
    //        navigate("/")
    //    }
    // }, [])

  return (
    <div>
      User
      <h1>USER</h1>
      <Link to="/user/detail">User Detail</Link>
      <Link to="/user/detail2">User Detail2</Link>
      <Link to="/user/detail3/3333">User Detail3</Link>
      {/* route kisminda user route icinde tanımladıgımız children routelar user componentinin icinde <Outlet/> tagı nerde ise orada render edilecektir.  */}
      <Outlet />
    </div>
  );
};

export default User;
