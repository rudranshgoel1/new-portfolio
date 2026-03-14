import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";

const Photos = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
