import {useState} from 'react';

import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-c-brown py-3">

            <a className="nav-name header-text" href="/myriad-conniptions">William Bolls</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#navbarNav' aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ml-auto">
                        <Link to = "/" style={{textDecoration: 'none'}}><a className="nav-item nav-link header-text pointer"  >About</a></Link>
                        <Link to = "/projects" style={{textDecoration: 'none'}}><a className="nav-item nav-link header-text pointer"  >Projects</a></Link>
                        <Link to = "/contact" style={{textDecoration: 'none'}}><a className="nav-item nav-link header-text pointer"  >Contact</a></Link>
                    </div>
                </div>
                
            </nav>
        </div>

    );
}

export default Nav;