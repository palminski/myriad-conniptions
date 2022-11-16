function DetailsModal({onClose}) {
    
    return (
        <>
            
            <div className="modal-background">
                
                <div className="container modal-container">
                    <h2>Title of Project</h2>
                    <div className="row justify-content-between m-5">
                        <img src={require("../../assets/images/monkey-at-computer.jpg")} alt="William Bolls" className="col-4"></img>
                        <p className="col-7">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="row justify-content-around">
                        <a className="col-11 btn btn-primary my-2">View Webpage</a>
                    </div>

                </div>
            </div>
            


            
        </>
    );
}

export default DetailsModal;