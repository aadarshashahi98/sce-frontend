import { ManufacturingRequirement } from "./components/manufacturingRequirement";
import { TrustTheExperience } from "./components/trustTheExperience";

export function ServicesPageModule() {
    return (
        <main>
            <TrustTheExperience />
            <ManufacturingRequirement />
        </main>
    )
}