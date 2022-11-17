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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://the-lair-of-the-sphinx.herokuapp.com/",
            repoLink: "https://github.com/Dodgemech/The-Lair-of-the-Sphinx"
        },
        {
            title: "Ultimate Brew Master",
            imageLocation: require("../../assets/images/project-images/brew-master-page.png"),
            imageAlt: "beer and keg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://palminski.github.io/ultimate-brew-master-brewery-finder/",
            repoLink: "https://github.com/palminski/ultimate-brew-master-brewery-finder"
        },
        {
            title: "Ra-byte Blog",
            imageLocation: require("../../assets/images/project-images/blog-page.PNG"),
            imageAlt: "picture of a simple website",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://shrouded-island-63424.herokuapp.com/",
            repoLink: "https://github.com/palminski/rabyte-blog"
        },
        {
            title: "Cloud Nine",
            imageLocation: require("../../assets/images/project-images/weather-page.png"),
            imageAlt: "weather forecast website",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://palminski.github.io/cloud-nine-weather-app/",
            repoLink: "https://github.com/palminski/cloud-nine-weather-app"
        },
        {
            title: "Employee Manager",
            imageLocation: require("../../assets/images/project-images/manager-page.JPG"),
            imageAlt: "Comand Line Interface employee managing app",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://drive.google.com/file/d/1U-wY1mN58ghzcpkD220CrHqd9MdBbOKN/view",
            repoLink: "https://github.com/palminski/employee-manager-rabit"
        },
        {
            title: "Note Taker",
            imageLocation: require("../../assets/images/project-images/note-page.PNG"),
            imageAlt: "Comand Line Interface employee managing app",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://express-note-taker-rabit.herokuapp.com/notes",
            repoLink: "https://github.com/palminski/express-note-taker-rabit"
        },
    ];
    
    return(
        <>
            <h1 className="my-4 grow-in">Projects</h1>
            <hr/>
            <div className="container">
                <div className="row justify-content-around my-3">
                    
                    {projectInfo.map((project,i) => (
                        <div className="project-card card my-4 bg-secondary col-12 col-lg-5 grow-in" onClick={()=>toggleModal(project,i)} key={project.title}>
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