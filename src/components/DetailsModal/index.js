function DetailsModal({currentProject, onClose}) {
    
    return (
        <>
            
            <div className="modal-background fade-in-modal-bg" onClick={onClose}>
                
                <div className="container py-3 modal-container grow-in-modal justify-content-around bg-c-light-brown" onClick={(e) => e.stopPropagation()}>
                    <h2 className="">{currentProject.title}</h2>
                    <hr/>
                    {/* <div className="row justify-content-between m-5">
                        <img src={currentProject.imageLocation} alt={currentProject.imageAlt} className="col-4"></img>
                        <p className="col-7">{currentProject.description}</p>
                    </div> */}
                    <img src={currentProject.imageLocation} alt={currentProject.imageAlt} className="col-12 col-md-8 modal-image"></img>
                    <div className="container">
                        <h4 className="my-3">Description</h4>
                        <hr/>
                        <div className="row justify-content-around">
                        <p className="col-8">{currentProject.description}</p>
                        </div>
                        
                    </div>
                    <div className="row justify-content-around">
                    {currentProject.link && <a className="col-7 col-md-5 btn btn-primary my-2" href={currentProject.link} target="_blank">View Webpage</a>}
                    {currentProject.downloadLink && <a className="col-7 col-md-5 btn btn-primary my-2" href={currentProject.downloadLink} download>Download</a>}
                    {currentProject.repoLink && <a className="col-7 col-md-5 btn btn-primary my-2" href={currentProject.repoLink} target="_blank">View Repo <i class="devicon-github-original"></i></a>}
                    {currentProject.youtubeLink && <a className="col-7 col-md-5 btn btn-primary my-2" href={currentProject.youtubeLink} target="_blank">View Video</a>}
                    
                    
                    </div>
                    <button className="col-7 col-md-5 btn btn-danger my-2" onClick={onClose}>Close</button>

                </div>
            </div>
            


            
        </>
    );
}

export default DetailsModal;