function About() {
    
    return(
        <>
            <h1 className="my-4 grow-in">About Me</h1>
            <hr/>
            <div className="container my-5">
                <div className="row justify-content-around justify-content-lg-between bg-c-light-brown pt-4 about-me-container">
                    <img src={require("../../assets/images/profile-images/profile-image.jpg")} alt="William Bolls" className="drop-shadow img-fluid col-8 col-lg-4 portrait mb-4 grow-in"></img>
                    <p className="col-12 col-lg-7 grow-in text-white">Hello! My name is William Bolls. I am a developer with an interest in web and game design. I have a bachelors degree in Psychology and Japanese culture from the University of Oregon and have completed a full stack web development bootcamp there as well.<br/> This website has a selections of some of the projects that I have worked on or am working on with links to the application itself as well as to its github repository. Additionally there is a form where you can contact me with inquiries. A PDF version of my resume can be viewed <a target="_blank" href={require("../../assets/downloadable-files/resume.pdf")}>here.</a></p>
                </div>
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

export default About;