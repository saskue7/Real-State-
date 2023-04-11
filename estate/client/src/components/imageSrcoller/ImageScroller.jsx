import React from 'react'
import "./imageScroller.css"
import { useRef } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const ImageScroller = (photos) => {
 const container = useRef(null)
 const left = () => {
  const {current} = container
  current.scrollLeft -= 910

 }
 const right = () => {
  const { current } = container
  current.scrollLeft += 910


 }
 console.log(photos.data)
  return (
    <div className="imagesBox">
    <button onClick={left}><ChevronLeftIcon /></button>
     <div className='image_box' width={910} ref={container} style={{border:"1px solid black"}}>
     {photos.data.map((photo) => (<img src={photo.url} width={910} alt=""/>))}
     </div>
    <button onClick={right}><ChevronRightIcon /></button>
    </div>
  )
}

export default ImageScroller