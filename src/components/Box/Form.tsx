import React from 'react'
import style from '../../styles/Home.module.css'

const Form = () => {
  return (
    <div style={{display: 'flex', alignItems: "center", flexDirection: 'column', paddingTop: "5rem"}}>
        <h1>Form</h1>

        <form action="" style={{display: 'flex', alignItems: "center", flexDirection: 'column', width: "100%"}}>
            <input type="email" placeholder='Email' className={style.formInput} />

            <input type="password" placeholder='Password' className={style.formInput} />
        
            <button className={style.formButton}>Login</button>
        </form>

    </div>
  )
}

export default Form