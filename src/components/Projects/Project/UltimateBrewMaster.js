function UltimateBrewMaster() {
    
    return (
        <>
            <div className="grow-in">
                <h1 className="my-4 ">Ultimate Brew Master</h1>
                <hr />
                <div className="container grow-in my-5">


                    <div className="row justify-content-around justify-content-lg-between bg-c-light-brown pt-4 project-container">
                        <img src={require("../../../assets/images/project-images/brew-master-page.png")} alt="Beer!" className="drop-shadow img-fluid col-8 col-lg-4 project-image mb-4 "></img>
                        <p className="col-12 col-lg-7  text-white text-align-left">
                        A fun little web aplication that allows users to search for breweries in the United States using the open brewery API. Also includes fun Simpsons gifs!
                        <br/>
                        <br/>
                        Favorite breweries can be saved to a list of favorites that will persist through sessions.

                        </p>
                    </div>

                    <div className="row  justify-content-left drop-shadow">
                        <a className="project-tab  mr-2" href={"https://palminski.github.io/ultimate-brew-master-brewery-finder/"} target="_blank">View Webpage</a>
                        <a className="project-tab  mr-2" href={"https://github.com/palminski/ultimate-brew-master-brewery-finder"} target="_blank">View Repo <i class="devicon-github-original"></i></a>
                    </div>

                    <br></br>
                    <br></br>


                    <div className="row mt-5 justify-content-center">
                        <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="" />
                        <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />


                    </div>
                </div>
            </div>
        </>
    );
}

export default UltimateBrewMaster;