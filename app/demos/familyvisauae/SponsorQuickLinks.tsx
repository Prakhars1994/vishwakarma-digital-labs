"use client";

const options = [
  ["Spouse", "Spouse"],
  ["Children", "Child"],
  ["Parents", "Parent"],
  ["Newborn", "Newborn"],
] as const;

export default function SponsorQuickLinks() {
  const choose = (person: string) => {
    window.dispatchEvent(new CustomEvent("familyvisa:select-dependent", { detail: person }));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("calculator")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };

  return <div className="quick">
    {options.map(([label, person]) => <button type="button" key={person} onClick={() => choose(person)}>{label} <b>→</b></button>)}
  </div>;
}
