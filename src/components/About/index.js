function About() {

    return (
        <div className="grow-in">
            <h1 className="my-4 ">About Me</h1>
            <hr />
            <div className="container my-5">
                <div className="row justify-content-around justify-content-lg-between bg-c-light-brown pt-4 about-me-container">
                    <img src={require("../../assets/images/profile-images/profile-image-min.jpg")} alt="William Bolls" className="drop-shadow img-fluid col-8 col-lg-4 portrait mb-4 "></img>
                    <p className="col-12 col-lg-7  text-white text-align-left">
                        Hello! My name is William Bolls. I am a developer with an interest in web and game design. I have a bachelors degree in Psychology and Japanese culture from the University of Oregon. I have also completed a full stack web development bootcamp through the University of Oregon.<br /><br />
                        This website has a selections of some of the projects that I have worked on or am currently working on with links to the application itself (or to videos demonstrating the application in the case of unpublished games) as well as to its github repository.<br /><br />
                        If you would like to contact me you can do so using the form on this website or email me directly at williambolls98@gmail.com.

                    </p>
                </div>
                <div className="row mt-5">
                    <h2 className="col-12">Skills</h2>
                </div>
                <hr></hr>
                <div className="row mt-5 justify-content-center">
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="" />
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="" />
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="" />
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="" />
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="" />
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;