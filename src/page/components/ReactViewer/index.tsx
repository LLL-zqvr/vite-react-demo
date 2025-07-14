import * as React from 'react';
import Viewer from 'react-viewer';
 
export default function PreviewImgJs() {
  const [ visible, setVisible ] = React.useState(false);
 
  return (
    <div>
      <button onClick={() => { setVisible(true); } }>show</button>
      <Viewer
      visible={visible}
      onClose={() => { setVisible(false); } }
      images={[{src: './image.png', alt: ''}]}
      />
    </div>
  );
}