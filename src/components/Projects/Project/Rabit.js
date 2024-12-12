function Rabit() {

    return (
        <>
            <div className="grow-in">
                <h1 className="my-4 ">RaBit</h1>

                <div className="container grow-in px-4">
                    <div className=" bg-c-light-brown  project-container clearfix pt-3">
                        <img src={require("../../../assets/images/project-images/RABIT_IMAGE.png")} alt="William Bolls" className="drop-shadow img-fluid portrait px-4"></img>
                        <p className="text-white text-align-left px-4 pb-4">
                            A game I have been creating on and off over the last few years. Previously I was making it using GameMaker Studio, I have since switched to developing in Unity.
                            <br />

                            If you would like to play test it I would love to hear your feedback! You can download an alpha build here or email me to request one. Keep in mind it is still in relatively rough shape, but it is totally playable! Once you have downloaded the zip file, extract its contents, go into the builds folder, and double click the executable named little-leaps.
                            <br />
                            <br />
                            If you are helping me test please try out the testing gauntlet and rate each levels difficulty and how much you enjoyed it on a scale from 1 to 10. Additionally, if you have any notes on a specific room that would be super helpful as well. A lot of rooms are very difficult as, unfortunately I have become very skilled at my own game and it has been kind of hard for me to gauge what will be doable for the average or newcomer player. If you see a level that has a cool idea in it but seems too difficult, let me know so I can include an easier version of the same idea earlier in the game.
                            <br></br>
                            Some Levels are VERY hard and levels are in no particular order. While in the gauntlet you can press O and P on your keyboard to go forward and backwards through levels to skip overly challenging ones or return to a specific room.
                            <br />
                            <br />
                            <strong>
                                Controls For Controller:
                            </strong>
                            <br></br>
                            Left Joystick to move, South Button to jump, and Right Trigger to shift.
                            <br></br>
                            East Button to dash, east button and down on joystick while in air to ground pound.
                            <br></br>
                            Start Button to bring up menu
                            <br />
                            <br></br>
                            <strong>
                                Controls For Keyboard:
                            </strong>
                            <br></br>
                            WASD or Arrows to move and jump
                            <br></br>
                            Space, Z, or N to shift.
                            <br></br>
                            X, or M to Dash.
                            <br></br>
                            Down Arrow or S while in air to ground pound
                            <br></br>
                            Escape to bring up menu
                            <strong>
                                <br></br>
                                <br></br>
                                NOTES:
                            </strong>
                            <br></br>
                            Main menu and pause menu can not be interacted with by mouse. A rework for it is on my list of future updates. Currently you can navigate it using the arrows/joystick and South Button or Enter.
                            <br></br>
                            Version 1.1 has an adjustment to players movement. I got a lot of feedback about this and I think this works better. In 1.1 you can cling on to walls which makes wall jumping a bit easier.
                        </p>
                    </div>

                    
                    <div className="row ml-0 justify-content-left drop-shadow">
                        <a className="project-tab  mr-2" href={require("../../../assets/downloadable-files/RABIT_alpha.zip")} download>Alpha 1.0</a>
                        <a className="project-tab  mr-2" href={require("../../../assets/downloadable-files/RABIT_alpha_1_1.zip")} download>Alpha 1.1</a>
                        <a className="project-tab  mr-2" href={require("../../../assets/downloadable-files/RABIT_alpha_1_2.zip")} download>Alpha 1.2</a>
                        <a className="project-tab  mr-2" href={"https://www.youtube.com/playlist?list=PLxVRBSIe4S9E1RD_C8kEtvJ5VGjsP85WM"} >View Old Videos</a>
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

export default Rabit;