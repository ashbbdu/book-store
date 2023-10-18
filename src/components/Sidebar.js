import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {BiLogOut} from "react-icons/bi"
import { useDispatch } from 'react-redux';
import { logout } from '../services/operations/authApis';

const Sidebar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout(navigate))
    }
  return (
    <div className='sidebar-main' style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'   }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </Link>
            
            <Link exact to="/cart" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Cart</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div
          >
             <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {/* <Link exact to="/" activeClassName="activeClicked">
                <div className='d-flex align-items-center' onClick={handleLogout}>
            <BiLogOut size={20}  />  <CDBSidebarMenuItem >Logout</CDBSidebarMenuItem>
            </div>
            </Link> */}
             <Link exact to="/cart" activeClassName="activeClicked" onClick={handleLogout}>
              <CDBSidebarMenuItem icon="arrow-right">Logout</CDBSidebarMenuItem>
            </Link>
        
          </CDBSidebarMenu>
        </CDBSidebarContent>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;