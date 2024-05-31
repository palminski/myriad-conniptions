function LoquaciousCards() {

    return (
        <>
            <div className="grow-in">
                <h1 className="my-4 ">Loquacious Cards</h1>
                
                <div className="container grow-in px-4">


                    <div className="row justify-content-around justify-content-lg-between bg-c-light-brown  project-container">
                        <img src={require("../../../assets/images/project-images/loquacious-cards.PNG")} alt="Loquacious Cards Edit Deck Page" className="drop-shadow img-fluid col-12 col-lg-4 project-image"></img>
                        <p className="col-12 col-lg-8  text-white text-align-left project-text">
                            Loquacius Cards is an online flashcard app created using MongoDB, React, GraphQL and Apollo. Users can sign up for free and create flashcard deck to review at their leisure. <br/><br/>Additionally, once a deck has been made, users can share it with others using either a link or a QR code. Using these links the decks can be reviewed, even without an account. Users are also able to copy decks shared with them and modify them for their own uses.
                            <br></br>
                            <br></br>

                        </p>
                    </div>

                    <div className="row  justify-content-left drop-shadow">
                        <a className="project-tab  mr-2" href={"https://loquacious-conversationalist.herokuapp.com/"} target="_blank">View Webpage</a>
                        <a className="project-tab  mr-2" href={"https://github.com/palminski/loquacious-conversationalist"} target="_blank">View Repo <i className="devicon-github-original"></i></a>
                    </div>

                    


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

export default LoquaciousCards;