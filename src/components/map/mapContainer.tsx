"use client";
import { useEffect, useRef } from "react";
import { initMap } from "@/lib/map";

export function MapContainer() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    let cleanup: (() => void) | undefined;
    initMap(ref.current).then((c) => (cleanup = c));
    return () => cleanup?.();
  }, []);

  return <div ref={ref} style={{ width: "100%", height: "100vh" }} />;
}
