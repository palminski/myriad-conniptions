function RepMaster() {

    return (
        <>
            <div className="grow-in">
                <h1 className="my-4 ">RepMaster</h1>
                <hr />
                <div className="container grow-in my-5">


                    <div className="row justify-content-around justify-content-lg-between bg-c-light-brown pt-4 project-container">
                        <img src={require("../../../assets/images/project-images/RepMasterPage.PNG")} alt="RepMaster homepage" className="drop-shadow img-fluid col-8 col-lg-4 project-image mb-4 "></img>
                        <p className="col-12 col-lg-7  text-white text-align-left">
                            RepMaster is an online work out app where you can keep track of your workouts! To use simply make an account and build workouts, fill them with exercises, and assign them to days of the week. Once assigned you will be able to check which workout is scheduled for the day. Additionally, you can edit the weight, number of sets, and number of reps for each exercise!
                            <br /><br />
                            For easy access, this web app can be downloaded as a progressive web application onto your computer or mobile device!
                            <br></br>
                            <br></br>

                        </p>
                    </div>

                    <div className="row  justify-content-left drop-shadow">
                        <a className="project-tab  mr-2" href={"https://repmaster.herokuapp.com/"} target="_blank">View Webpage</a>
                        <a className="project-tab  mr-2" href={"https://github.com/palminski/orchard-alley-lifts"} target="_blank">View Repo <i className="devicon-github-original"></i></a>
                    </div>

                    <br></br>
                    <br></br>


                    <div className="row mt-5 justify-content-center">
                        <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="" />
                        <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                        <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                        <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" />
                        <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="" />


                    </div>
                </div>
            </div>
        </>
    );
}

export default RepMaster;