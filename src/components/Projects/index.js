import { useState } from "react";
import DetailsModal from "../DetailsModal";

function Projects() {

    const [modalOpen,setModalOpen] = useState(false);

    const [currentProject,setCurrentProject] = useState();

    const toggleModal = (project,i) => {

        if(document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100%";
        }
        else
        {
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        };
        setCurrentProject({...project, index: i})
        setModalOpen(!modalOpen);
    }

    const projectInfo = [
        {
            title: "R.A.B.I.T",
            imageLocation: require("../../assets/images/project-images/rabit-image.PNG"),
            imageAlt: "the fearsome sphinx",
            description: "RABIT (acronym for Remote Access Bio-Integration Terminator) is a game being created using the GameMaker engine and GML scripting language. This is an ongoing project and is not yet completed, but progess can be viewed following the link below.",
            youtubeLink: "https://www.youtube.com/playlist?list=PLxVRBSIe4S9E1RD_C8kEtvJ5VGjsP85WM",
            
        },

        {
            title: "The Lair of the Sphinx",
            imageLocation: require("../../assets/images/project-images/sphinx-page.png"),
            imageAlt: "the fearsome sphinx",
            description: "An RPG themed website that ustilises RESTful api's, SQL, and sequelise. This project uses SQL in a non-traditional way to create a riddle solving game. Solve riddles to slay the monsters! All monsters are hand drawn by myself.",
            link: "https://the-lair-of-the-sphinx.herokuapp.com/",
            repoLink: "https://github.com/Dodgemech/The-Lair-of-the-Sphinx"
        },
        
        {
            title: "Globo Gains",
            imageLocation: require("../../assets/images/project-images/globo-gains-page.PNG"),
            imageAlt: "Homepage of Globo Gains",
            description: "Online workout journal and message board created using MongoDB, React, GraphQL and Apollo. Theme parodies Globo Gym from the 2004 comedy movie Dodgeball: A true Underdog Story",
            link: "https://globogains.herokuapp.com/",
            repoLink: "https://github.com/palminski/perfidious-gains-goblins"
        },
        {
            title: "Ultimate Brew Master",
            imageLocation: require("../../assets/images/project-images/brew-master-page.png"),
            imageAlt: "beer and keg",
            description: "A simple web aplication that allows users to search for breweries in the United States using the opend brewery API. Also includes fun Simpsons gifs!",
            link: "https://palminski.github.io/ultimate-brew-master-brewery-finder/",
            repoLink: "https://github.com/palminski/ultimate-brew-master-brewery-finder"
        },
        // {
        //     title: "Ra-byte Blog",
        //     imageLocation: require("../../assets/images/project-images/blog-page.PNG"),
        //     imageAlt: "picture of a simple website",
        //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //     link: "https://shrouded-island-63424.herokuapp.com/",
        //     repoLink: "https://github.com/palminski/rabyte-blog"
        // },
        // {
        //     title: "Cloud Nine",
        //     imageLocation: require("../../assets/images/project-images/weather-page.png"),
        //     imageAlt: "weather forecast website",
        //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //     link: "https://palminski.github.io/cloud-nine-weather-app/",
        //     repoLink: "https://github.com/palminski/cloud-nine-weather-app"
        // },
        // {
        //     title: "Employee Manager",
        //     imageLocation: require("../../assets/images/project-images/manager-page.JPG"),
        //     imageAlt: "Comand Line Interface employee managing app",
        //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //     link: "https://drive.google.com/file/d/1U-wY1mN58ghzcpkD220CrHqd9MdBbOKN/view",
        //     repoLink: "https://github.com/palminski/employee-manager-rabit"
        // },
        
    ];
    
    return(
        <>
            <h1 className="my-4 grow-in">Projects</h1>
            <hr/>
            <div className="container">
                <div className="row justify-content-around my-3">
                    
                    {projectInfo.map((project,i) => (
                        <div className="project-card card my-4 bg-c-light-brown col-12 col-lg-5 grow-in" onClick={()=>toggleModal(project,i)} key={project.title}>
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