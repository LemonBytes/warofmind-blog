interface IPreview {
  xPosition: number;
  yPosition: number;
  previewType: string;
}

const X_SHIFT = 30;
const Y_SHIFT = 65;

export const PreviewBox: React.FC<IPreview> = ({
  xPosition,
  yPosition,
  previewType,
}) => {
  return (
    <div
      id="previewBox"
      className="w-64 h-40 absolute border border-white"
      style={{ left: xPosition + X_SHIFT, top: yPosition - Y_SHIFT }}
    >
      <video autoPlay loop muted style={{ width: "100%", height: "100%" }}>
        <source
          src={`/assets/videos/${previewType}Preview.mp4`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};
