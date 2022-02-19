export const PreviewBox = () => {
  return (
    <div id="previewBox">
      <video
        id="previewVideo"
        autoPlay
        loop
        style={{ width: "500px", height: "500px" }}
      >
        <source />
      </video>
    </div>
  );
};
