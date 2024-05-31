function Vorpal() {

    return (
        <>
            <div className="grow-in">
                <h1 className="my-4 ">Vorpal</h1>

                <div className="container grow-in px-4">


                    <div className="row justify-content-around justify-content-lg-between bg-c-light-brown  project-container ">
                        <img src={require("../../../assets/images/project-images/vorpal-image.png")} alt="Loquacious Cards Edit Deck Page" className="drop-shadow img-fluid col-12 col-lg-4 project-image"></img>
                        <p className="col-12 col-lg-8  text-white text-align-left project-text">
                            Vorpal is a fantasy endless runner game built using C# and the Unity engine. The player must swipe to move and tap to toggle their color in order to slay monsters as they ascend a spooky necropolis finding treasure and aiming for a high score. There are also a variety of collectables allowing the player to unlock a secret treasure...
                            <br></br>
                            <br></br>
                            This game is currently available on Android through the Google Play Store!
                        </p>
                    </div>

                    <div className="row  justify-content-left drop-shadow">
                        <a className="project-tab  mr-2" href={require("../../../assets/downloadable-files/Vorpal.apk")} download>Download APK</a>
                        <a className="project-tab  mr-2" href={"https://play.google.com/store/apps/details?id=com.rabitgames.vorpal"} target="_blank">Download on Google Play</a>
                        <a className="project-tab  mr-2" href={"https://github.com/palminski/vorpal-swipes"} target="_blank">View Repo <i className="devicon-github-original"></i></a>
                    </div>

                    


                    <div className="row mt-5 justify-content-center">
                        <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="" />
                        <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="" />

                    </div>
                </div>
            </div>
        </>
    );
}

export default Vorpal;