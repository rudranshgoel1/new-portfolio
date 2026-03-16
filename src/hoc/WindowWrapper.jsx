import useWindowStore from "#store/window";
import { useGenieEffect } from "#components/GenieEffect";
import { useGSAP } from "@gsap/react";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex, isMinimized, isMaximized } = windows[windowKey];
    const ref = useRef(null);
    const draggableRef = useRef(null);
    const restoreRectRef = useRef(null);
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
      draggableRef.current = instance;

      return () => {
        draggableRef.current = null;
        instance.kill();
      };
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      const draggable = draggableRef.current;

      if (isMaximized) {
        const parent = el.offsetParent || document.documentElement;
        const parentRect = parent.getBoundingClientRect();
        const rect = el.getBoundingClientRect();

        restoreRectRef.current = {
          left: rect.left - parentRect.left,
          top: rect.top - parentRect.top,
          width: rect.width,
          height: rect.height,
        };

        // Measure navbar and dock heights
        const navbar = document.querySelector("nav");
        const dock = document.getElementById("dock");
        const navBottom = navbar ? navbar.getBoundingClientRect().bottom : 56;
        const dockHeight = dock ? dock.offsetHeight : 80;

        gsap.set(el, { x: 0, y: 0 });
        el.style.transform = "none";
        el.style.position = "fixed";
        el.style.left = "12px";
        el.style.right = "12px";
        el.style.top = `${Math.round(navBottom) + 8}px`;
        el.style.bottom = `${dockHeight + 8}px`;
        el.style.width = "auto";
        el.style.height = "auto";
        el.style.maxWidth = "none";
        el.style.maxHeight = "none";

        if (draggable) draggable.disable();
        return;
      }

      const restore = restoreRectRef.current;

      el.style.position = "absolute";
      el.style.inset = "";
      el.style.right = "";
      el.style.bottom = "";
      el.style.transform = "";
      el.style.maxWidth = "";
      el.style.maxHeight = "";
      if (restore) {
        el.style.left = `${restore.left}px`;
        el.style.top = `${restore.top}px`;
        el.style.width = `${restore.width}px`;
        el.style.height = `${restore.height}px`;
      } else {
        el.style.left = "";
        el.style.top = "";
        el.style.width = "";
        el.style.height = "";
      }

      gsap.set(el, { x: 0, y: 0 });
      if (draggable) draggable.enable();
    }, [isMaximized]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

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
