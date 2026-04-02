import React, { useEffect, useRef } from "react";

/**
 * Full-viewport Vanta GLOBE — same config as the Work / Portfolio page.
 */
export default function VantaGlobeBackdrop({ className = "workPage__vanta" }) {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const initVanta = async () => {
      if (!vantaRef.current || vantaEffectRef.current) return;

      const [{ default: GLOBE }, THREE] = await Promise.all([
        import("vanta/dist/vanta.globe.min"),
        import("three"),
      ]);

      if (!mounted || !vantaRef.current) return;

      vantaEffectRef.current = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        backgroundColor: 0xf3f3f3,
        color: 0x3f3f3f,
        color2: 0xb5b5b5,
        size: 0.95,
      });
    };

    initVanta();

    return () => {
      mounted = false;
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return <div className={className} ref={vantaRef} aria-hidden="true" />;
}
