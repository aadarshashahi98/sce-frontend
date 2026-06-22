import { TrustedPartners } from "../home/components/TrustedPartners";
import { About } from "./components/about";
import { BuildYourDream } from "./components/buildYourDeram";
import { Impact } from "./components/impact";
import { MessageFromCEO } from "./components/messageFromCEO";
import { Team } from "./components/team";

export function AboutPageModule() {
    return (
        <main>
            <About />
            <Impact />
            <MessageFromCEO />
            <TrustedPartners />
            <Team />
            <BuildYourDream />
        </main>
    )
}