"use client";

import { useEffect, useState } from "react";

const themes = [
  { id: "family", label: "Family", description: "Coral & green" },
  { id: "heritage", label: "Heritage", description: "Navy & gold" },
  { id: "emerald", label: "Emerald", description: "Deep green & mint" },
  { id: "royal", label: "Royal", description: "Cobalt & sky" },
  { id: "plum", label: "Plum", description: "Plum & rose" },
  { id: "ocean", label: "Ocean", description: "Teal & aqua" },
  { id: "sunset", label: "Sunset", description: "Orange & gold" },
  { id: "midnight", label: "Midnight", description: "Ink & cyan" },
  { id: "rose", label: "Rose", description: "Rose & berry" },
  { id: "slate", label: "Slate", description: "Slate & lime" },
];

const featuredThemes = ["family", "heritage", "emerald", "plum"];

export default function ThemePicker() {
  const [selected, setSelected] = useState("family");
  const [showMore, setShowMore] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) setAutoRotate(true);
  }, []);

  useEffect(() => {
    const alternates = ["heritage", "emerald", "royal", "plum", "ocean", "sunset", "midnight", "rose", "slate"];
    let alternateIndex = 0;
    let showFamily = true;
    if (!autoRotate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      const nextTheme = showFamily ? alternates[alternateIndex] : "family";
      if (showFamily) alternateIndex = (alternateIndex + 1) % alternates.length;
      showFamily = !showFamily;
      setSelected(nextTheme);
      document.querySelector(".fv")?.setAttribute("data-theme", nextTheme);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [autoRotate]);

  function chooseTheme(theme: string) {
    setSelected(theme);
    document.querySelector(".fv")?.setAttribute("data-theme", theme);
  }

  return (
    <div className="fv-theme-picker" aria-label="Colour palettes">
      <div className="fv-theme-picker__label">
        <span>Choose your colour</span>
        <button
          className={autoRotate ? "fv-theme-auto is-on" : "fv-theme-auto"}
          type="button"
          onClick={() => setAutoRotate((current) => !current)}
          aria-pressed={autoRotate}
        >
          <i aria-hidden="true" /> Auto colour {autoRotate ? "on" : "off"}
        </button>
      </div>
      <div className="fv-theme-picker__options" role="group" aria-label="Colour palette options">
        {themes.filter((theme) => featuredThemes.includes(theme.id)).map((theme) => (
          <button
            key={theme.id}
            className={selected === theme.id ? "is-active" : ""}
            type="button"
            onClick={() => chooseTheme(theme.id)}
            aria-pressed={selected === theme.id}
          >
            <i className={`theme-swatch ${theme.id}`} aria-hidden="true" />
            <b>{theme.label}</b>
            <small>{theme.description}</small>
          </button>
        ))}
        <button
          className={showMore ? "fv-theme-more is-active" : "fv-theme-more"}
          type="button"
          onClick={() => setShowMore((current) => !current)}
          aria-expanded={showMore}
        >
          More colours <span aria-hidden="true">{showMore ? "−" : "+"}</span>
        </button>
      </div>
      {showMore && (
        <div className="fv-theme-picker__more" role="group" aria-label="More colour palette options">
          {themes.filter((theme) => !featuredThemes.includes(theme.id)).map((theme) => (
            <button
              key={theme.id}
              className={selected === theme.id ? "is-active" : ""}
              type="button"
              onClick={() => chooseTheme(theme.id)}
              aria-pressed={selected === theme.id}
            >
              <i className={`theme-swatch ${theme.id}`} aria-hidden="true" />
              <b>{theme.label}</b>
              <small>{theme.description}</small>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
