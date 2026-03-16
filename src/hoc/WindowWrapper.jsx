import useWindowStore from "#store/window";
import { useGenieEffect } from "#components/GenieEffect";
import { useGSAP } from "@gsap/react";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex, isMinimized } = windows[windowKey];
    const ref = useRef(null);
    // Tracks the isMinimized value from the previous render so useGSAP
    // (which fires as a layoutEffect) can detect an unminimize transition
    // before useEffect updates the ref for the next render.
    const wasMinimizedRef = useRef(false);

    const { triggerGenieIn } = useGenieEffect(windowKey);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      if (wasMinimizedRef.current) {
        const dockRect = useWindowStore.getState().dockRefs[windowKey];
        if (dockRect) {
          triggerGenieIn(dockRect, null);
          return;
        }
      }

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power3.out" },
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    // Runs after useGSAP (layoutEffect) so the ref holds the OLD value
    // while the animation hook reads it, then updates for future renders.
    useEffect(() => {
      wasMinimizedRef.current = isMinimized;
    });

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
