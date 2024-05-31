
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
            
            <div className="container px-4">
                <div className="row justify-content-center  ">
                    
                    {projectInfo.map((project) => (
                        <div className="project-card card  bg-c-light-brown col-12 col-lg-5 grow-in mx-4 mb-3 mb-lg-5 " onClick={()=>navigateToPage(project.pageId)} key={project.title}>
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