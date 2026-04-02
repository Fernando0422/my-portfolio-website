import React, { useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import "./GradientBackdrop.css";

function safeDestroyVanta(effect) {
  if (!effect || typeof effect.destroy !== "function") return;
  try {
    effect.destroy();
  } catch (err) {
    if (err?.name !== "NotFoundError") {
      console.warn("[GradientBackdrop] destroy", err);
    }
  }
}

export default function GradientBackdrop() {
  const containerRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;

    const el = containerRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) return;

    vantaEffect = FOG({
      el,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,

      // Airy light fog — soft grays, no heavy black pools
      highlightColor: 0xffffff,
      midtoneColor: 0xd2d4d0,
      lowlightColor: 0xa8aaa6,
      baseColor: 0xf6f7f3,

      blurFactor: 0.58,
      zoom: 1.05,
      speed: 0.95,
    });

    return () => {
      safeDestroyVanta(vantaEffect);
    };
  }, []);

  return (
    <div ref={containerRef} className="gradient-backdrop" aria-hidden="true" />
  );
}