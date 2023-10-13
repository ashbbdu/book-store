import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const PrivateRoute = ({children}) => {

    const {token} = useSelector((state) => state.auth);

    if(token !== null)
        return (
            <>
            
            <div className='d-flex'><Sidebar/>  <div  style={{marginLeft : "80px"}}> {children}</div></div>
            <div className='header-container'><Header /></div>
            </>
        )
    else
        return <Navigate to="/" />

}

export default PrivateRoute
