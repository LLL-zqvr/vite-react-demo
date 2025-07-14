import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// 加上 Zoom 插件
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function YetPreviewImg() {
  const [open, setOpen] = React.useState(false);

  const slides = [
    {
      src: "/image.png",
      width: 1200, // 推荐写宽高，能提高缩放体验
      height: 800,
    },
  ];

  return (
    <>
      <img
        src="/image.png"
        alt="Preview"
        style={{ width: "300px", cursor: "pointer" }}
        onClick={() => setOpen(true)}
      />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 300, // 最大缩放倍数，默认是 3
          zoomInMultiplier: 2, // 鼠标滚轮缩放速度
        }}
      />
    </>
  );
}
