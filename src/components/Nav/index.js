// import React from 'react'; is no longer required

function Nav() {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">

            <a className="nav-name" href="/">William Bolls</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#navbarNav' aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>    
            </button>       

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav ml-auto">
                <a className="nav-item nav-link" href="#about">About</a>
                <a className="nav-item nav-link" href="#projects">Projects</a>
                <a className="nav-item nav-link" href="#resume">Resume</a>
                <a className="nav-item nav-link" href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;