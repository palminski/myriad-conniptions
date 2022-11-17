import { useState } from "react";
import DetailsModal from "../DetailsModal";

function Projects() {

    const [modalOpen,setModalOpen] = useState(false);

    const [currentProject,setCurrentProject] = useState();

    const toggleModal = (project,i) => {
        setCurrentProject({...project, index: i})
        setModalOpen(!modalOpen);
    }

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
        {
            title: "Ultimate Brew Master",
            imageLocation: require("../../assets/images/project-images/brew-master-page.png"),
            imageAlt: "beer and keg",
            description: "Lorem Ipsum",
            link: "https://palminski.github.io/ultimate-brew-master-brewery-finder/"
        },
        {
            title: "Ultimate Brew Master",
            imageLocation: require("../../assets/images/project-images/brew-master-page.png"),
            imageAlt: "beer and keg",
            description: "Lorem Ipsum",
            link: "https://palminski.github.io/ultimate-brew-master-brewery-finder/"
        },
        {
            title: "Ultimate Brew Master",
            imageLocation: require("../../assets/images/project-images/brew-master-page.png"),
            imageAlt: "beer and keg",
            description: "Lorem Ipsum",
            link: "https://palminski.github.io/ultimate-brew-master-brewery-finder/"
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
            <h1 className="my-4 grow-in">Projects</h1>
            <hr/>
            <div className="container">
                <div className="row justify-content-around my-3">
                    
                    {projectInfo.map((project,i) => (
                        <div className="project-card card my-4 bg-secondary col-5 grow-in" onClick={()=>toggleModal(project,i)} key={project.title}>
                            <img className="card-img-top mt-3" src={project.imageLocation} alt={project.imageAlt}></img>
                            <div className="card-body">
                                <h3 className="card-title text-white">{project.title}</h3>
                            </div>
                        </div>
                    ))}

                    {modalOpen && <DetailsModal currentProject={currentProject} onClose={toggleModal}/>}

                </div>
            </div>
            
        </>
    );
}

export default Projects;