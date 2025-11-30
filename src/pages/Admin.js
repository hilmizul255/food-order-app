import React from 'react';
import './pages.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

function Admin() {
    return (
        <div>
            <h1>Admin</h1>
            <Sidebar/>
            <Main/>
        </div>
    );
}

export default Admin;