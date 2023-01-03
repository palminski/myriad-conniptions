// import React from 'react'; is no longer required

function Nav(props) {

    const {
        pageSelected,
        setPageSelected
    } = props;
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-c-brown py-3">

            <a className="nav-name header-text" href="/myriad-conniptions">William Bolls</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#navbarNav' aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>    
            </button>       

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav ml-auto">
                <a className="nav-item nav-link header-text" href="#about" onClick={() => setPageSelected('about')}>About</a>
                <a className="nav-item nav-link header-text" href="#projects" onClick={() => setPageSelected('projects')}>Projects</a>
                <a className="nav-item nav-link header-text" href="#contact" onClick={() => setPageSelected('contact')}>Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;