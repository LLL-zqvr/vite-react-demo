

import Game from "@/page/components/Game";
import Button from "@/page/components/Button/index"
import List from "@/page/components/List/index"
import Form from "@/page/hooks/useStore/index"
import TaskApp from "@/page/hooks/useReducer/index";
import UseContext from "@/page/hooks/useContext";
import PreviewImg from '@/page/components/PreviewImg/index'
import ImageList from "./components/ImageList";
import { showImagePreviewer } from "./components/PreviewImgJs";
import {MyComponent} from './components/test'
// import YetPreviewImg from "./components/YetPreviewImg";
// import PreviewImgJs from "./components/PreviewImgJs"
// import ReactViewer from "./components/ReactViewer"
export default function Home() {
  return (
    <>
      <Button />
      <List />
      <Game />
      <Form />
      <TaskApp />
      <UseContext />
     <PreviewImg />
     <ImageList />
     <img src="./image.png" alt="示例图" onClick={()=>{showImagePreviewer('./image.png')}}/>
 <p className="text-red-600">Tailwind CSS is working 🎉</p>
 <MyComponent />
    </>
  );
}
