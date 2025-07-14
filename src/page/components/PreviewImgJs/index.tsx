import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

export function showImagePreviewer(
  source: string | string[],
  options?: Viewer.Options,
) {

  // 多图容器
  const container = document.createElement('div');
  // container.style.display = 'none';

  const urls = Array.isArray(source) ? source : [source];
  // 会遍历到prototype 上的元素 性能不好
  // for (const url of urls) {
  //   // const start = 
  //   const img = document.createElement('img');
  //   img.src = url;
  //   container.appendChild(img);
  // }

  urls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    container.appendChild(img);
  })

  // document.body.appendChild(container); console.log(xIsNext, squares, onPlay) console.log(xIsNext, squares, onPlay)
//多图预览中，若想实现点击哪张图就从哪张图开始预览，需要传入options，且其中要包括initialViewIndex，值为图片的索引值。
  const viewerInstance = new Viewer(container, {
    hidden() {
      viewerInstance?.destroy();
    },
    ...options,
  });

  viewerInstance.show();
}
