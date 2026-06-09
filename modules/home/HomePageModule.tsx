import { About } from "./components/About";
import { OurImpacts } from "./components/OurImpacts";
import { OurProjects } from "./components/OurProjects";
import { Sustainability } from "./components/Sustainability";
import { Testimonials } from "./components/Testimonials";
import { TrustedPartners } from "./components/TrustedPartners";
import { WhatWeDo } from "./components/WhatWeDo";

export function HomePageModule() {
    return (
        <main>
            <OurImpacts />
            <About />
            <WhatWeDo />
            <OurProjects />
            <TrustedPartners />
            <Sustainability />
            <Testimonials />
        </main>
    )
}