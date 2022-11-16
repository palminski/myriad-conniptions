function Projects() {

    const projectInfo = [
        {
            title: "The Lair of the Sphinx",
            imageLocation: require("../../assets/images/project-images/sphinx-page.png"),
            imageAlt: "the fearsome sphinx",
            description: "Lorem Ipsum",
            link: "https://the-lair-of-the-sphinx.herokuapp.com/"
        },
        {
            title: "Ultimate Brew Master",
            imageLocation: require("../../assets/images/project-images/brew-master-page.png"),
            imageAlt: "beer and keg",
            description: "Lorem Ipsum",
            link: "https://palminski.github.io/ultimate-brew-master-brewery-finder/"
        },
        

    ];
    
    return(
        <>
            <h1 className="my-4">Projects</h1>
            <hr/>
            <div className="container">
                <div className="row justify-content-around my-5">
                    
                    {projectInfo.map((project) => (
                        <div className="project-card card my-4 bg-secondary col-5">
                            <img className="card-img-top mt-3" src={project.imageLocation} alt={project.imageAlt}></img>
                            <div className="card-body">
                                <h3 className="card-title text-white">{project.title}</h3>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            
        </>
    );
}

export default Projects;