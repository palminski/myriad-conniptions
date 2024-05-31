function About() {

    return (
        <div className="grow-in">
            <h1 className="my-4 ">About Me</h1>
            
            <div className="container my-3">
                <div className="bg-c-light-brown pt-4 about-me-container clearfix">
                    <img src={require("../../assets/images/profile-images/profile-image.jpeg")} alt="William Bolls" className="drop-shadow img-fluid portrait px-4"></img>
                    <p className="text-white text-align-left px-4 pb-4">
                        Hello! I am William Bolls, a software developer from Eugene, Oregon with an interest in web and game design.
                          I have completed a comprehensive full-stack web development bootcamp through the University of Oregon.
                          This rigorous program ingrained in me a deep understanding of JavaScript and the MERN stack, forming the foundation of my expertise in web technologies.
                          Beyond this foundational training, I also possess a bachelor's degree in Psychology and Japanese culture from the same institution, providing me with a unique perspective in the realm of software design and user experience.
                          <br /><br />
  
                          Though the bootcamp was primarily centered around JavaScript and the MERN stack, my learning journey didn't stop there.
                           Post-bootcamp, I've explored a myriad of technologies: from developing a mobile game application using Unity and C# to crafting websites with TypeScript and the Angular framework.
                           This self study has not only taught me about the involved technologies, but also has improved my ability to adapt and utilize new technologies quickly.
                            <br/><br/>
                         
                        This website has a selections of some of the projects that I have worked on or am currently working on with links to the application itself (or to videos demonstrating the application in the case of unpublished games) as well as to its github repository.  
                        If any of these projects pique your interest, or you have any questions, comments, or proposals, please don't hesitate to reach out! I can be reached by either using the form on this website, or via email at <a className="email-link" href="mailto:williambolls98@gmail.com">williambolls98@gmail.com</a>.

                    </p>
                </div>
                <div className="row mt-5">
                    <h2 className="col-12">Skills</h2>
                </div>
                <hr></hr>
                <div className="row mt-5 justify-content-center ">
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                    <img className="pb-4 col-4 col-lg-1 drop-shadow icon"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                    <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                </div>
            </div>
        </div>
    );
}

export default About;