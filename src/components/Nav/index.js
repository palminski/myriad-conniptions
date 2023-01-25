import {useState} from 'react';
function Nav(props) {

    const {
        pageSelected,
        setPageSelected
    } = props;

    const [coverOn, setCoverOn] = useState(false);

    const changePage = (newPage) => {
        if (pageSelected != newPage && !coverOn) {
            setCoverOn(true);

            

            setTimeout(() => {
                setCoverOn(false);
                setPageSelected(newPage);
            }, 550)
        }

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-c-brown py-3">

                <a className="nav-name header-text" href="/myriad-conniptions">William Bolls</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#navbarNav' aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link header-text pointer"  onClick={() => changePage('about')}>About</a>
                        <a className="nav-item nav-link header-text pointer"  onClick={() => changePage('projects')}>Projects</a>
                        <a className="nav-item nav-link header-text pointer"  onClick={() => changePage('contact')}>Contact</a>
                    </div>
                </div>
                
            </nav>
            <div className={coverOn && 'cover'}></div>
        </div>

    );
}

export default Nav;