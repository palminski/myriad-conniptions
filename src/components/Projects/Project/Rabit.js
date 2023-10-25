function Rabit() {
    
    return (
        <>
        <div className="grow-in">
            <h1 className="my-4 ">Ra-Bit</h1>
            
            <div className="container grow-in my-5">
                

                <div className="row justify-content-around justify-content-lg-between bg-c-light-brown pt-4 project-container">
                    <img src={require("../../../assets/images/project-images/rabit-image.PNG")} alt="A Cute Pixel Art Bunny" className="drop-shadow img-fluid col-8 col-lg-4 project-image mb-4 "></img>
                    <p className="col-12 col-lg-7  text-white text-align-left">
                    A game being created using the GameMaker game engine as well as the scripting language Game Maker Language (GML). The game features the titular Ra-Bit traversing a maze-like environment. The game features many hidden areas and mysteries to uncover. This is an ongoing project that is being worked on between other coding projects in order to practice various programming principles and create something fun and unique. 

                    </p>
                </div>

                <div className="row  justify-content-left drop-shadow">
                <a className="project-tab  mr-2" href={"https://www.youtube.com/playlist?list=PLxVRBSIe4S9E1RD_C8kEtvJ5VGjsP85WM"} target="_blank">View Video on YouTube</a>
                </div>  

                <br></br>
                <br></br>
                
            </div>
        </div>
        </>
    );
}

export default Rabit;