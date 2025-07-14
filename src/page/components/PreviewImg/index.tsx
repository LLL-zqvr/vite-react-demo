import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


export default function PreviewImg() {
    return (
        <PhotoProvider maskOpacity={0.5} >
                <PhotoView src="./image.png" >
                    <img src="./image.png" className='sdf' alt="" style={{width: '100px', height: '100px' }} />
                </PhotoView>

        </PhotoProvider>
    );
}