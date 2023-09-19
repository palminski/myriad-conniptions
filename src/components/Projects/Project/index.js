import { useParams } from "react-router";
import Vorpal from "./Vorpal";
import Rabit from "./Rabit";
import LairOfTheSphinx from "./LairOfTheSphinx";
import LoquaciousCards from "./LoquaciusCards";
import RepMaster from "./RepMaster";
import UltimateBrewMaster from "./UltimateBrewMaster";


function Project() {

    const {id: projectId } = useParams();
    
    
    return(
        <>
            {(() => {
                if (projectId === "vorpal") {
                    return <Vorpal />
                }
                else if (projectId === "rabit") {
                    return <Rabit />
                }
                else if (projectId === "the-lair-of-the-sphinx") {
                    return <LairOfTheSphinx />
                }
                else if (projectId === "loquacious-cards") {
                    return <LoquaciousCards />
                }
                else if (projectId === "repmaster") {
                    return <RepMaster />
                }
                else if (projectId === "ultimate-brew-master") {
                    return <UltimateBrewMaster />
                }
                else {
                    return <Vorpal />
                }
            })()}
        </>
    );
}

export default Project;