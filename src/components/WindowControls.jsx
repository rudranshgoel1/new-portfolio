import useWindowStore from "#store/window";
import { useGenieEffect } from "./GenieEffect";

const WindowControls = ({ target }) => {
  const { closeWindow, minimizeWindow } = useWindowStore();
  const { triggerGenie } = useGenieEffect(target);

  const handleMinimize = () => {
    const dockRect = useWindowStore.getState().dockRefs[target];

    if (!dockRect) {
      minimizeWindow(target); // no animation fallback
      return;
    }

    triggerGenie(dockRect, () => minimizeWindow(target));
  };

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} >x</div>
      <div className="minimize" onClick={handleMinimize} >-</div>
      <div className="maximize" >+</div>
    </div>
  );
};

export default WindowControls;