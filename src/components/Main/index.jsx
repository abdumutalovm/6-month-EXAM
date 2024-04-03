import React from 'react'
import first from '../../assets/1stImage.webp'
import second from '../../assets/2ndImage.webp'
import third from '../../assets/3rdImage.webp'
import fourth from '../../assets/4thImage.webp'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './index.module.css'



function Main() {
  const {t,i18n} = useTranslation();
  const [lang,setLang] = useState('uz');
  const navigate = useNavigate()
  console.log(theme);


  useEffect(() => {
if(localStorage.getItem('lang')){
  i18n.changeLanguage(localStorage.getItem('lang'))
  setLang(localStorage.getItem('lang'))
}else{
  i18n.changeLanguage('uz');
  setLang('uz')
}
  },[])

  function getOurProducts(e){
     e.preventDefault()
     navigate("./products")
  }

  return (
    <>
    <div className={theme === 'light' ? styles.container : styles.containerDark}>
        <div>
        <h1>{t('we are changing the way people shop')}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
        <button className={styles.mainBtn} onClick={getOurProducts}>{t('our products')}</button>
        </div>
        <div className={styles.sliderWrapper}>
            <img src={first} alt="first" />
            <img src={second} alt="second" />
            <img src={third} alt="third" />
            <img src={fourth} alt="" />
        </div>
    </div>
    </>
  )
}

export default Main