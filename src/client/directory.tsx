import { hydrate } from "preact";
import ClinicBrowser from "@/components/ClinicBrowser";
import { clinics } from "@/data/clinics";
hydrate(
  <ClinicBrowser clinics={clinics} />,
  document.getElementById("clinic-browser")!,
);
