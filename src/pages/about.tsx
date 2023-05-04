import React from 'react'
import Image from 'next/image'
import Topbar from '@/components/Box/Topbar'

const about = () => {
  return (
    <div style={{display: "flex",flexDirection: "column",  alignItems: "center"}}>
        <Topbar/>

        <h1>About</h1>

        <div style={{width: "50%"}}>
            <p style={{textAlign: "center"}}>This is the about page, and here is a little bit of random text, and a picture...</p>

        </div>
        <Image
            src="/img/picture.png"
            alt="Random picture"
            width={500}
            height={400}
            />
    </div>
  )
}

export default about