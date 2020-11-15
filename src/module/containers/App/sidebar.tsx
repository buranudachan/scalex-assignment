import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <div className="sidenav">
            <div>
                <Link to="/users">
                    <label className="color">Users</label>
                </Link>
            </div>

            <div >
                <Link to="/dashboard">
                    <label className="color">Dashboard</label>
                </Link>
            </div>
            <div >
                <Link to="/logs">
                    <label className="color">Logs</label>
                </Link>
            </div>
            <div>
                <Link to="/">
                    <label className="color">Signout</label>
                </Link>
            </div>
        </div >

    )
}
export default Sidebar
