
import { useNavigate } from "react-router";
import projectInfo from "./projectData";

function Projects() {

    

    const navigate = useNavigate();

    

    const navigateToPage = (project) => {
        navigate(`/projects/${project}`);
        
    }

    
    
    return(
        <>
            <h1 className="my-4 grow-in">Projects</h1>
            
            <div className="container">
                <div className="row justify-content-around my-3">
                    
                    {projectInfo.map((project) => (
                        <div className="project-card card my-4 bg-c-light-brown col-12 col-lg-5 grow-in" onClick={()=>navigateToPage(project.pageId)} key={project.title}>
                            <img className="card-img mt-3" src={project.imageLocation} alt={project.imageAlt}></img>
                            <div className="mt-3">
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