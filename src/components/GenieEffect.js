import gsap from "gsap";
import { useRef } from "react";

const bakeTransform = (el) => {
  const gx = parseFloat(gsap.getProperty(el, "x")) || 0;
  const gy = parseFloat(gsap.getProperty(el, "y")) || 0;

  if (gx === 0 && gy === 0) return;

  const parent = el.offsetParent || document.documentElement;
  const parentRect = parent.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();

  el.style.left = `${elRect.left - parentRect.left}px`;
  el.style.top = `${elRect.top - parentRect.top}px`;
  gsap.set(el, { x: 0, y: 0 });
};

export function useGenieEffect(targetId = null) {
  const windowRef = useRef(null);

  const getEl = () =>
    targetId ? document.getElementById(targetId) : windowRef.current;

  const triggerGenie = (dockIconRect, onComplete) => {
    const el = getEl();
    if (!el) return;

    bakeTransform(el);

    const winRect = el.getBoundingClientRect();
    const offsetX =
      dockIconRect.left + dockIconRect.width / 2 -
      (winRect.left + winRect.width / 2);
    const offsetY = dockIconRect.top - winRect.bottom;

    el.style.animation = "";
    void el.offsetWidth;
    el.style.setProperty("--dock-offset-x", `${offsetX}px`);
    el.style.setProperty("--dock-offset-y", `${offsetY}px`);
    el.style.animation = "genie-out 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards";
    el.addEventListener("animationend", onComplete, { once: true });
  };

  const triggerGenieIn = (dockIconRect, onComplete) => {
    const el = getEl();
    if (!el) return;

    bakeTransform(el);

    const winRect = el.getBoundingClientRect();
    const offsetX =
      dockIconRect.left + dockIconRect.width / 2 -
      (winRect.left + winRect.width / 2);
    const offsetY = dockIconRect.top - winRect.bottom;

    el.style.animation = "";
    void el.offsetWidth;
    el.style.setProperty("--dock-offset-x", `${offsetX}px`);
    el.style.setProperty("--dock-offset-y", `${offsetY}px`);
    el.style.animation = "genie-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards";

    el.addEventListener(
      "animationend",
      () => {
        el.style.animation = "";
        onComplete?.();
      },
      { once: true },
    );
  };

  return { windowRef, triggerGenie, triggerGenieIn };
}
