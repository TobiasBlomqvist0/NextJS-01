import React from 'react'
import Link from 'next/link'
import style from '../../styles/Home.module.css'

const Topbar = () => {
  return (

    <div className={style.topbar}>
      <Link href="/about" className={style.links}>About</Link>
      <Link href="/contact" className={style.links}>Contact</Link>
      <Link href="/" className={style.links}>Home</Link>
    </div>

  )
}

export default Topbar