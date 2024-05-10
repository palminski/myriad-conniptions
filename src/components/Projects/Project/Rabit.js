function Rabit() {

    return (
        <>
            <div className="grow-in">
                <h1 className="my-4 ">RaBit</h1>

                <div className="container grow-in my-5">


                    <div className="row justify-content-around justify-content-lg-between bg-c-light-brown pt-4 project-container">
                        <img src={require("../../../assets/images/project-images/rabit-image.png")} alt="A Cute Pixel Art Bunny" className="drop-shadow img-fluid col-8 col-lg-4 project-image mb-4 "></img>
                        <p className="col-12 col-lg-7  text-white text-align-left">
                            A game I have been working on in between other projects. Previously I was making it using GameMaker and Game Maker Language (GML). Recently I have switched to developing in Unity using C# as it is a much more powerful engine.
                            <br />
                            <br />
                            Below you can access a YouTube playlist documenting the development of the game when it was being made in GameMaker, as well as download a zip folder containing the most recent build
                            <br />
                            <br />
                            Controls For Controller: <br></br>Left Joystick to move, South Button to jump, and Right Trigger to shift.
                            <br />
                            <br />
                            Controls For Keyboard: <br></br>WASD or Arrows to move and jump, Space to shift.
                        </p>

                    </div>

                    <div className="row  justify-content-left drop-shadow">
                        <a className="project-tab  mr-2" href={require("../../../assets/downloadable-files/RabitV1.zip")} download>Download Build</a>
                        <a className="project-tab  mr-2" href={"https://www.youtube.com/playlist?list=PLxVRBSIe4S9E1RD_C8kEtvJ5VGjsP85WM"} target="_blank">View Old Videos</a>
                    </div>

                    <br></br>
                    <br></br>

                    <div className="row mt-5 justify-content-center">
                        <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="" />
                        <img className="pb-4 col-4 col-lg-1 icon drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rabit;