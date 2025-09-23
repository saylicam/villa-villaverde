"use client";

import RippleHover from "./RippleHover";
import { PropsWithChildren } from "react";

export default function GlowCard({ children }: PropsWithChildren) {
  return (
    <RippleHover>
      <div className="gradient-border rounded-2xl card-surface">
        {children}
      </div>
    </RippleHover>
  );
}
