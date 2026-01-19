"use client";
import { ReactNode, MouseEvent } from "react";

export default function RippleWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const createRipple = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;
    const rect = target.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.className = "ripple";

    const ripple = target.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    target.appendChild(circle);
  };

  return (
    <div className="ripple-container" onClick={createRipple}>
      {children}
    </div>
  );
}
