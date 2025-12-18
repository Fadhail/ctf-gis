"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Map } from "@/components/map/map";

export function MapContainer() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-6xl py-0">
        <CardContent className="p-8 py-0 pb-8 overflow-hidden">
          <h1 className="flex items-center justify-center p-4 font-bold text-2xl">
            Global Network Activity Map
          </h1>
          <Map />
        </CardContent>
      </Card>
    </div>
  );
}
