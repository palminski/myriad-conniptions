function DetailsModal({currentProject, onClose}) {
    
    return (
        <>
            
            <div className="modal-background fade-in-modal-bg" onClick={onClose}>
                
                <div className="container modal-container grow-in-modal" onClick={(e) => e.stopPropagation()}>
                    <h2>{currentProject.title}</h2>
                    <div className="row justify-content-between m-5">
                        <img src={currentProject.imageLocation} alt={currentProject.imageAlt} className="col-4"></img>
                        <p className="col-7">{currentProject.description}</p>
                    </div>
                    <div className="row justify-content-around">
                        <a className="col-11 btn btn-primary my-2" href={currentProject.link} target="_blank">View Webpage</a>
                    </div>

                </div>
            </div>
            


            
        </>
    );
}

export default DetailsModal;