import React from 'react'
import { IKImage } from 'imagekitio-react'

const Image = ({src, className, w, h, alt}) => {
  return (
    <IKImage 
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
        path={src} 
        alt={alt}
        className={className}
        width={w}
        height={h}
     />
  )
}

export default Image