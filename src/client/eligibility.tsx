import { hydrate } from "preact";
import EligibilityChecker from "@/components/EligibilityChecker";
hydrate(<EligibilityChecker />, document.getElementById("eligibility-tool")!);
