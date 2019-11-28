import React from 'react'

import style from "./index.scss";

import backgroundImage from '@/assets/images/login_bj.jpg'

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <div className={style.warpBox}>
      <div className={style.LoadingContent}></div>
      <div className={style.background} style={{background: `url(${backgroundImage}) no-repeat`}}></div>
    </div>
  )
}

export default Login
