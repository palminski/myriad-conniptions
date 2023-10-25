function LairOfTheSphinx() {

    return (
        <>
            <div className="grow-in">
                <h1 className="my-4 ">The Lair of the Sphinx</h1>
                
                <div className="container grow-in my-5">


                    <div className="row justify-content-around justify-content-lg-between bg-c-light-brown pt-4 project-container">
                        <img src={require("../../../assets/images/project-images/sphinx-page.png")} alt="The fearsome Sphinx" className="drop-shadow img-fluid col-8 col-lg-4 project-image mb-4 "></img>
                        <p className="col-12 col-lg-7  text-white text-align-left">
                            Welcome to the Lair of the Sphinx. Within you will find myriad monsters with which to do battle. Unlike many monsters that will challenge adventurers physically, The ones within the Sphinx's lair challenge explorers mentally. When you run into a monster within you will be asked one or more riddles. In order to slay the monster you must answer the question it poses to you correctly. If you are incorrect it will damage you. Once you reach 0 HP you will be removed from the dungeon and have to start over from the begining. All questions will have a one word answer (ie: "bird" as opposed to "a bird").
                            <br></br>
                            <br></br>
                            An RPG themed website that ustilises RESTful api's, SQL, and sequelise. This project uses SQL in a non-traditional way to create a riddle solving game. Solve riddles to slay the monsters! All monsters are hand drawn by myself.
                        </p>
                    </div>

                    <div className="row  justify-content-left drop-shadow">
                        <a className="project-tab  mr-2" href={"https://the-lair-of-the-sphinx.herokuapp.com/"} target="_blank">View Webpage</a>
                        <a className="project-tab  mr-2" href={"https://github.com/Dodgemech/The-Lair-of-the-Sphinx"} target="_blank">View Repo <i className="devicon-github-original"></i></a>
                    </div>

                    <br></br>
                    <br></br>


                    <div className="row mt-5 justify-content-center">
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt="" />


                    </div>
                </div>
            </div>
        </>
    );
}

export default LairOfTheSphinx;