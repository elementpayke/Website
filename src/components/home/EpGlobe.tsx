"use client";

import { useEffect, useRef } from "react";
import { geoOrthographic, geoPath, geoGraticule10, geoDistance } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import worldAtlas from "world-atlas/countries-110m.json";

const HI = new Set([
  "404", "800", "834", "646", "231", "566", "288", "686", "384", "204",
  "768", "854", "466", "120", "180", "710", "894", "454", "508", "072",
]);

const PINS: Array<[string, [number, number]]> = [
  ["ke", [36.8, -1.3]], ["ng", [3.4, 6.5]], ["gh", [-0.2, 5.6]], ["ug", [32.6, 0.3]],
  ["tz", [39.3, -6.8]], ["za", [28, -26.2]], ["sn", [-17.4, 14.7]], ["cm", [9.7, 4.05]],
  ["et", [38.7, 9]], ["zm", [28.3, -15.4]], ["gb", [-0.1, 51.5]], ["eu", [8.7, 50.1]],
  ["ae", [55.3, 25.2]], ["cn", [114, 22.5]], ["us", [-74, 40.7]],
];

const NS = "http://www.w3.org/2000/svg";
function el<K extends keyof SVGElementTagNameMap>(
  name: K,
  attrs: Record<string, string | number>,
  parent?: Element,
): SVGElementTagNameMap[K] {
  const e = document.createElementNS(NS, name) as SVGElementTagNameMap[K];
  for (const k in attrs) e.setAttribute(k, String(attrs[k]));
  if (parent) parent.appendChild(e);
  return e;
}

export default function EpGlobe() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    svg.innerHTML = "";
    const defs = el("defs", {}, svg);
    const ocean = el("radialGradient", { id: "epOcean", cx: "35%", cy: "30%", r: "75%" }, defs);
    [["0%", "#6A5CFF"], ["60%", "#3B2ED3"], ["100%", "#1C1488"]].forEach(([o, c]) =>
      el("stop", { offset: o, "stop-color": c }, ocean),
    );
    const shine = el("radialGradient", { id: "epShine", cx: "32%", cy: "26%", r: "60%" }, defs);
    el("stop", { offset: "0%", "stop-color": "#fff", "stop-opacity": 0.28 }, shine);
    el("stop", { offset: "100%", "stop-color": "#fff", "stop-opacity": 0 }, shine);

    const proj = geoOrthographic().scale(190).translate([200, 200]).clipAngle(90).precision(0.5);
    const path = geoPath(proj);
    const sphere = el("path", { fill: "url(#epOcean)" }, svg);
    const grat = el("path", { fill: "none", stroke: "#fff", "stroke-opacity": 0.1, "stroke-width": 0.6 }, svg);
    const graticule = geoGraticule10();

    const world = feature(
      worldAtlas as unknown as Topology,
      worldAtlas.objects.countries as unknown as GeometryCollection,
    );
    const lands = world.features.map((f) => {
      const highlighted = HI.has(String(f.id));
      return [
        f,
        el(
          "path",
          {
            fill: highlighted ? "#FFB224" : "#EDEBFB",
            "fill-opacity": highlighted ? 1 : 0.9,
            stroke: "#3B2ED3",
            "stroke-width": 0.4,
            "stroke-opacity": 0.6,
          },
          svg,
        ),
      ] as const;
    });

    el("circle", { cx: 200, cy: 200, r: 190, fill: "url(#epShine)", style: "pointer-events:none" }, svg);
    const pg = el("g", {}, svg);
    const pins = PINS.map(([iso, coord]) => {
      const g = el("g", { style: "transition:opacity .35s" }, pg);
      const ring = el("circle", { r: 6, fill: "none", stroke: "#5ED6B4", "stroke-width": 2 }, g);
      if (!reduced) {
        el("animate", { attributeName: "r", values: "5;20", dur: "1.6s", repeatCount: "indefinite" }, ring);
        el("animate", { attributeName: "stroke-opacity", values: ".9;0", dur: "1.6s", repeatCount: "indefinite" }, ring);
      }
      el("circle", { r: 4, fill: "#5ED6B4", stroke: "#fff", "stroke-width": 1.5 }, g);
      const tag = el("g", { transform: "translate(-14,-32)" }, g);
      el("rect", { width: 28, height: 20, rx: 5, fill: "#fff", style: "filter:drop-shadow(0 6px 10px rgba(10,8,40,.35))" }, tag);
      el("image", { href: `/flags/${iso}.svg`, x: 3, y: 3, width: 22, height: 14, preserveAspectRatio: "xMidYMid slice" }, tag);
      el("path", { d: "M10 20 L14 24 L18 20 Z", fill: "#fff" }, tag);
      return [coord, g] as const;
    });

    const t0 = performance.now();
    let raf = 0;
    const frame = (now: number) => {
      const lam = 10 - ((now - t0) / 1000) * 14;
      const phi = -4;
      proj.rotate([lam, phi]);
      sphere.setAttribute("d", path({ type: "Sphere" }) ?? "");
      grat.setAttribute("d", path(graticule) ?? "");
      lands.forEach(([f, p]) => p.setAttribute("d", path(f) ?? ""));
      const center: [number, number] = [-lam, -phi];
      pins.forEach(([coord, p]) => {
        const xy = proj(coord);
        if (!xy) return;
        p.setAttribute("transform", `translate(${xy[0]},${xy[1]})`);
        p.style.opacity = geoDistance(coord, center) < 1.35 ? "1" : "0";
      });
      if (!reduced) raf = requestAnimationFrame(frame);
    };
    frame(t0);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 400"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
      aria-hidden="true"
    />
  );
}
