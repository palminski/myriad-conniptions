function Resume() {
    
    return(
        <>
            <h1 className="my-4 grow-in">Resume</h1>
            <hr></hr>
            <div className="container my-5">
                <h3 className="grow-in mb-5">Click the image below to view a PDF of my full resume</h3>
                <a href={require("../../assets/downloadable-files/resume.pdf")} target="_blank">
                    <img className="grow-in resume-image image-fluid" src={require("../../assets/images/resume-image.PNG")} />
                </a>

                <div className="row mt-5">
                    <h2 className="col-12">Skills</h2>
                </div>
                <hr></hr>
                <div className="row mt-5 justify-content-between">
                <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt=""/>
                </div>
            </div>
        </>
    );
}

export default Resume;